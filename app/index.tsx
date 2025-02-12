import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";
import styled, { ThemeProvider } from 'styled-components/native'
import {darkTheme,lighTheme} from "../styles/theme"
import { useState } from "react";

export default function Screen1(){
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const router = useRouter()

  const toogleTheme =()=>{
    setIsDarkTheme((prevTheme)=>!prevTheme)
  }
  const currentTheme = isDarkTheme?darkTheme:lighTheme

  return (<ThemeProvider theme={currentTheme}>
  <Container>
    <StyledText>HOla desde la pantalla 1</StyledText>
    <Button title="Ir a pantalla 2" onPress={()=>router.push("/screen2")}>
      
    </Button>
    <Button title="Cambiar tema" onPress={toogleTheme}></Button>
  </Container>
  </ThemeProvider>)
}
const Container = styled.View`
/**
  background-color: ${({theme})=>theme.colors.background};
*/
  background-color: ${(props)=>props.theme.colors.background};
  flex:1;
`
const StyledText = styled.Text`
  color: #BF4F74;
`