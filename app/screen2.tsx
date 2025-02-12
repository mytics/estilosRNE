import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Screen2(){
  const router = useRouter()
  return (<View>
    <Text style={{color:'#fdf'}}>Hola desde la pantalla 2</Text>
    <Button title="Volver a la pantalla anterior" onPress={()=>router.back()}>
      
    </Button>
  </View>)
}