import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async (key: string) => {
        try{
            const passwords = await AsyncStorage.getItem(key);

            if(passwords)
                return JSON.parse(passwords) 

            return []
        }
        catch(error){
            console.log("Error while Searching", error)
            return []
        }
    }

    const saveItem = async (key: string, value: string) => {
        try{
            let passwords = await getItem(key)

            passwords.push(value)

            await AsyncStorage.setItem(key,JSON.stringify(passwords))
        }
        catch(error){
            console.log("Error while Saving", error)
        }
    }

    const removeItem = async (key: string, value: string) => {
        try{
            let passwords = await getItem(key)

            if(passwords){
                let newPasswords = passwords.filter((v: string)=>v!=value)
                AsyncStorage.setItem(key,JSON.stringify(newPasswords))
            }
        }
        catch(error){
            console.log("Error while Deleting", error)
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}

export default useStorage