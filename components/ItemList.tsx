import Colors from "@/constants/Colors";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
import * as Clipboard from 'expo-clipboard'; 

export type ItemListProps = {
    text: string
    handleDelete?: ()=> void
}

export function ItemList({text, handleDelete}: ItemListProps){
    const [showPwd, setShowPwd] = useState<boolean>(false)
    
    async function handleCopyPwd() {
        await Clipboard.setStringAsync(text)
    }

    return(
        <View>
            {
                //TODO - Estilizar o TODO
                false &&
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Text style={{color: Colors.app.white}} numberOfLines={1}>jnfBDEHFLOEJNFLJNAFADFCNADSJKLFVCNADSL;KNFVLKADSNFVDLNFDL;NKJ</Text>
                </ScrollView>
            }
            <Swipeable renderRightActions={()=>(
                <View style={{alignItems:"center", justifyContent:"center",marginHorizontal: 15}}>
                    <TouchableOpacity activeOpacity={0.9} onPress={handleDelete}>
                        <FontAwesome name="trash" color={Colors.app.white} size={16} />
                    </TouchableOpacity>
                </View>
                )}>
                <Pressable onLongPress={handleCopyPwd}>
                    <View style={styles.itemListArea}>
                        <Text style={styles.itemListTitle}>{showPwd ? text : '***********'}</Text>
                        <TouchableOpacity activeOpacity={0.9} onPress={()=>setShowPwd(!showPwd)}>
                            <FontAwesome name={showPwd ? "eye-slash" : "eye"} color={Colors.app.white} size={16}/>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Swipeable>
        </View>
    )
}

const styles = StyleSheet.create({
    itemListArea:{
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    itemListTitle:{
        color: Colors.app.white,
        fontSize: 16,
    }
})