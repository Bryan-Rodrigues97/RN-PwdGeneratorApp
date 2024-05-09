import { StyleSheet, View, Image, Modal, TouchableOpacity, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { CheckBox } from '@/components/Checkbox';
import { Button } from '@/components/Button';
import Colors from '@/constants/Colors';
import { TextWithValue } from '@/components/TextWithValue';
import { GeneratePwd as PwdGenerator} from '../../src/util/PwdGenerator'
import { Password } from '@/components/Password';
import { FontAwesome } from '@expo/vector-icons';


export default function TabOneScreen() {
  const [pwdLenght, setPwdLenght] = useState<number>(15)

  const [useUpperCase, setUseUpperCase]   = useState<boolean>(false)
  const [useLowerCase, setUserLowerCase]  = useState<boolean>(false)
  const [useNumbers, setUseNumbers]       = useState<boolean>(false)
  const [useSymbols, setUseSymbols]       = useState<boolean>(false)
  const [showInfoUsage, setShowInfoUsage] = useState<boolean>(false)

  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [newPwd, setNewPwd] = useState<string>('')

  const handlePressGeneratePwd = ()=> {
    const pwd = PwdGenerator(useUpperCase,useLowerCase,useSymbols,useNumbers,pwdLenght)

    if(pwd){
      setNewPwd(pwd)
      setModalVisible(true)
    }
  }
  
  return (
    <View style={{flex:1,backgroundColor:Colors.app.black}}>
      <TouchableOpacity>
        <FontAwesome name='info-circle' color={Colors.app.white} size={24} style={{marginTop: 50, alignSelf:'flex-end', marginRight:15}} onPress={()=>alert(
          `
          Information of Usage

          Home Screen: Upon opening the application, users are greeted with the Home Screen. Here, they have the capability to generate strong passwords ranging from 6 to 30 characters, combining uppercase letters, lowercase letters, numbers, and symbols. After generating a password, users can save it securely within the app and set a hint to help remember it in case they forget.

          Passwords Screen: In the second tab labeled "Passwords," users can view a list of passwords saved on their device along with the corresponding hints they've set. This screen enables users to navigate through their saved passwords and also delete any passwords they no longer need. Additionally, users have the option to add new passwords by tapping the "+" icon, allowing them to store any password securely on their device.

          This application provides users with a convenient and secure way to manage their passwords, ensuring that they can access their accounts with ease while maintaining robust security measures.`)}/>
      </TouchableOpacity>

      <View style={styles.container}>

        <Image source={require("../../assets/images/lock-icon.png")} style={styles.lockImage} resizeMode='contain'/>
        
        <View style={styles.pwdConfigArea}>
          <TextWithValue text='Character Lenght' value={String(pwdLenght)}/>
          
          <Slider
            style={{width: "100%", height: 40}}
            value={pwdLenght}
            onValueChange={setPwdLenght}
            minimumValue={6}
            maximumValue={30}
            minimumTrackTintColor={Colors.app.green}
            maximumTrackTintColor="#000"
            step={1}
            />

          <View style={styles.pwdCheckboxArea}>
            <CheckBox text='Include Uppercase Letters' isChecked={useUpperCase} onPress={()=>setUseUpperCase(!useUpperCase)}/>
            <CheckBox text='Include Lowercase Letters' isChecked={useLowerCase} onPress={()=>setUserLowerCase(!useLowerCase)}/>
            <CheckBox text='Include Numbers' isChecked={useNumbers} onPress={()=>setUseNumbers(!useNumbers)}/>
            <CheckBox text='Include Symbols' isChecked={useSymbols} onPress={()=>setUseSymbols(!useSymbols)}/>
          </View>


          <Button name='Generate' onPress={handlePressGeneratePwd}/>

        </View>

        <Modal visible={modalVisible} transparent animationType='slide'>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Password pwd={newPwd} closeModal={()=>setModalVisible(false)}/>
            </View>
          </View>
        </Modal>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.app.black,
  },
  lockImage:{
    height:250
  },
  pwdCheckboxArea:{
    paddingVertical: 25
  },
  title:{
    fontSize: 18,
    color: Colors.app.white
  },
  pwdConfigArea:{
    width:"80%"
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
