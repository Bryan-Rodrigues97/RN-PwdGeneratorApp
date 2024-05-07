import Colors from "@/constants/Colors";
import { useFonts } from "expo-font";
import { View, StyleSheet, Text } from "react-native";

type TextWithValueProps = {
    text: string,
    value: string
}

export function TextWithValue({text,value}: TextWithValueProps){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    text:{
        color: Colors.app.white,
        fontSize: 15
    },
    value:{
        color: Colors.app.green,
        fontSize: 20,
        fontWeight: "500"
    }
})