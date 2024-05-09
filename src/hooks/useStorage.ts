import AsyncStorage from "@react-native-async-storage/async-storage";

export type PwdType = {
    uuid: string
    pwd: string
    tip: string
}

const useStorage = () => {

    async function getItem(key: string): Promise<PwdType[]> {
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

    async function saveItem(key: string, value: PwdType){
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
                let newPasswords = passwords.filter((v)=>v.uuid!=value)
                
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