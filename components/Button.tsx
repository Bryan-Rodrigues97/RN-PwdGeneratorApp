import Colors from "@/constants/Colors";
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet, DimensionValue } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export type ButtonProps = TouchableOpacityProps & {
    name: string
    buttonSize?: DimensionValue
    buttonColor?: string
    buttonTextColor?: string,
    buttonIcon?: React.ComponentProps<typeof FontAwesome>['name']
}

export function Button({name,buttonSize="100%",buttonColor=Colors.app.green,buttonTextColor=Colors.app.black,buttonIcon='arrow-right',...props}:ButtonProps){
    return(
        <TouchableOpacity{...props} style={[styles.container,{width: buttonSize, backgroundColor: buttonColor}]} activeOpacity={0.7}>
            <Text style={[styles.buttonText, {color: buttonTextColor}]}>{name.toUpperCase()}</Text>
            <FontAwesome name={buttonIcon} color={buttonTextColor}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 40,
        width: 1,
        alignItems:"center",
        justifyContent: "center",
        flexDirection:"row",
        gap: 10
    },
    buttonText:{
        fontSize: 14,
        color: Colors.app.black,
        fontWeight:"500"
    }
})