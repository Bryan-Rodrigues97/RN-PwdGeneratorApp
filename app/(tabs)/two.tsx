import { ItemList } from '@/components/ItemList';
import Colors from '@/constants/Colors';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage, { PwdType } from '@/src/hooks/useStorage';
import { useFocusEffect } from 'expo-router';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Password } from '@/components/Password';


export default function TabTwoScreen() {
  const [pwdList, setPwdList] = useState<PwdType[]>([])
  const {getItem,removeItem} = useStorage()

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const handleDeleteItem = (uuid: string) => {
    
    if(pwdList){
      const list = pwdList.filter((item)=>item.uuid!=uuid)
      setPwdList(list);
      removePwd(uuid)    
    }
  }

  async function removePwd(value: string) {
    await removeItem("@AppPwdGenerator",value)
  }

  useFocusEffect(
    React.useCallback(() => {
      const loadPwdList = async () => {
        let list = await getItem("@AppPwdGenerator")
        setPwdList(list)
      }
      loadPwdList();
    }, [modalVisible])
  );

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Passwords</Text>
            <TouchableOpacity onPress={()=>setModalVisible(true)}>
              <FontAwesome name='plus-circle' size={24} color={Colors.app.green}/>
            </TouchableOpacity>
          </View>
            <FlatList
            contentContainerStyle={{gap: 10}}
            data={pwdList}
            renderItem={({item,index}) => <ItemList password={item.pwd} tip={item.tip} handleDelete={()=>handleDeleteItem(item.uuid)}/>}
            keyExtractor={item=>item.uuid}
            />
        </View>
        <Modal visible={modalVisible} transparent animationType='slide'>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Password pwd='' closeModal={()=>setModalVisible(false)}/>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.app.black,
  },
  content:{
    padding: 10,
  },
  titleView:{
    borderColor: "#FFF",
    borderBottomWidth: 1,
    marginBottom: 25,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  title:{
    fontSize: 20,
    fontWeight:'900',
    color: Colors.app.white,
    marginBottom: 3
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Cor de fundo transparente
    justifyContent: 'flex-end',             // Alinha o conteúdo na parte inferior da tela,
    alignItems:'center'
  },
  modalContent: {
    backgroundColor: Colors.app.gray,   // Cor de fundo do conteúdo do modal
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '90%',                         // Ocupa 90% da largura da tela
    height: '60%',                      // Começa em 60% da tela
  },
});
