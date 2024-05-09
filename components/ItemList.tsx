import Colors from "@/constants/Colors";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
import * as Clipboard from 'expo-clipboard'; 

export type ItemListProps = {
    password: string,
    tip?: string
    handleDelete?: ()=> void
}

export function ItemList({password,tip, handleDelete}: ItemListProps){
    const [showPwd, setShowPwd] = useState<boolean>(false)
    
    async function handleCopyPwd() {
        await Clipboard.setStringAsync(password)
    }

    return(
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text style={styles.tip} numberOfLines={1}>{tip}</Text>
            </ScrollView>
            
            <Swipeable renderRightActions={()=>(
                <TouchableOpacity style={{alignItems:"center", justifyContent:"center",marginHorizontal: 15}} activeOpacity={0.9} onPress={handleDelete}>
                    <View>
                        <FontAwesome name="trash" color={Colors.app.white} size={16} />
                    </View>
                </TouchableOpacity>
                )}>
                <Pressable onLongPress={handleCopyPwd}>
                    <View style={styles.itemListArea}>
                        <Text style={styles.itemListTitle}>{showPwd ? password : '***********'}</Text>
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
    },
    tip:{
        color: Colors.app.white,
        padding: 10,
        fontWeight: "500"
    }
})