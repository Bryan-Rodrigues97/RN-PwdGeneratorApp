import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { Button } from "./Button";
import Colors from "@/constants/Colors";
import * as Clipboard from 'expo-clipboard'; 
import useStorage, { PwdType } from "@/src/hooks/useStorage";
import { useState } from "react";
import uuid from 'react-native-uuid';

import * as React from 'react';

export type PasswordProps = {
    pwd: string,
    closeModal: ()=> void
}

export function Password({pwd, closeModal}: PasswordProps){
    const [password, setPassword]   = useState(pwd)
    const [pwdTip, setPwdTip]       = useState('')
    
    const pwdRef = React.useRef<TextInput>(null)

    const {saveItem} = useStorage()

    async function handleSave(){
        if(!password){
            Alert.alert("Warning", "Cannot save an blank password")
            return
        }

        await Clipboard.setStringAsync(password)
        
        let oPwd: PwdType = {
            uuid: String(uuid.v4()),
            pwd: password,
            tip: pwdTip
        }
        
        await saveItem('@AppPwdGenerator',oPwd)
        closeModal()
    }
    
    React.useEffect(() => {
        if (pwdRef && pwdRef.current) {
            pwdRef.current.focus();
        }
    }, []);
    
    return(
       
        <View style={styles.container}>
            <View style={styles.pwdArea}>
                <Text style={styles.pwdText}>
                    Password Generated
                </Text>

                <TextInput style={styles.pwdTextArea}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                ref={pwdRef}
                />

                <View style={styles.btnArea}>
                    <Button name="Save" buttonSize={"45%"} buttonIcon="save"  onPress={handleSave}/>
                    <Button 
                    name="Cancel" 
                    buttonSize={"45%"} 
                    buttonIcon="close" 
                    buttonColor={Colors.app.black}
                    buttonTextColor={Colors.app.green}
                    onPress={()=>{
                        closeModal()   
                    }}/>
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                <View style={styles.reminderArea}>
                    <Text numberOfLines={1} style={styles.pwdText}>Password Tip:</Text>
                    <TextInput style={[styles.pwdTextArea, {fontSize: 12, textAlign: "left", height: "50%", textAlignVertical:"top"}]}
                    value={pwdTip}
                    onChangeText={setPwdTip}
                    multiline
                    defaultValue=""
                    />
                </View>
            </KeyboardAvoidingView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    pwdArea:{
        padding: 10,
        paddingTop: 24,
        width:"100%",
        alignItems:"center"
    },
    pwdText:{
        fontSize:18,
        color:"#FFF",
        fontWeight:"500",
        marginBottom: 20
    },
    pwdTextArea: {
        height: 50,
        backgroundColor: "#000",
        color: "#FFF",
        fontSize: 14,
        padding: 5,
        textAlign:"center",
        fontWeight:"900",
        marginBottom: 20,
        width: "100%"
    },
    btnArea:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    reminderArea:{
        padding: 10
    }
})