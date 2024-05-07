import { View, Text, StyleSheet, TouchableOpacityProps, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export type CheckBoxProps = TouchableOpacityProps & {
    text: string,
    isChecked?: boolean
}

export function CheckBox({text, isChecked=false, ...props}: CheckBoxProps){
    return(
        <TouchableOpacity style={styles.container} {...props} activeOpacity={0.7}>
            <FontAwesome color={Colors.app.green} name={isChecked ? "check-square-o" : "square-o"} size={24}/>
            <Text style={styles.textStyle} >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        gap: 10
    },
    textStyle:{
        color:Colors.app.white,
        fontSize: 14
    },
})