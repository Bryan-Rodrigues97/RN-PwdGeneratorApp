import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { Button } from "./Button";
import Colors from "@/constants/Colors";

export type PasswordProps = {
    pwd: string,
    closeModal: ()=> void
}

export function Password({pwd, closeModal}: PasswordProps){
    return(
        <View style={styles.container}>
            <View style={styles.pwdArea}>
                <Text style={styles.pwdText}>
                    Password Generated
                </Text>

                <TextInput style={styles.pwdTextArea}
                value={pwd}
                />

                <View style={styles.btnArea}>
                    <Button name="Save" buttonSize={"45%"} buttonIcon="save"  onPress={()=>{
                        //Alert.alert("Save")
                        closeModal()
                    }}/>
                    <Button 
                    name="Cancel" 
                    buttonSize={"45%"} 
                    buttonIcon="close" 
                    buttonColor={Colors.app.black}
                    buttonTextColor={Colors.app.green}
                    onPress={()=>{
                        //Alert.alert("Cancel")
                        closeModal()   
                    }}/>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    pwdArea:{
        paddingTop: 24,
        width:"90%",
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
        fontSize: 16,
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
})