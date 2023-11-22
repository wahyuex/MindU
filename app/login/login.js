import { useNavigation } from "@react-navigation/native";
import React,{useCallback, useState,} from 'react'
import { useFonts } from 'expo-font';
import { Center, View ,Text,Button} from 'native-base';
import * as SplashScreen from 'expo-splash-screen';
import { ForLogin1,IconLogin,GoogleIcon } from '../../assets/svgs';
import { Link } from 'expo-router';
import { Separator } from "../../components";

const poppinsMedium = require('../../assets/fonts/Poppins-Medium.ttf');
const poppinsSemiBold = require('../../assets/fonts/Poppins-SemiBold.ttf');
const poppinsBold = require('../../assets/fonts/Poppins-Bold.ttf');

SplashScreen.preventAutoHideAsync();

const Login = () => {
  
  const [fontsLoaded] = useFonts({
    'Poppins-Medium': poppinsMedium,
    'Poppins-SemiBold': poppinsSemiBold,
    'Poppins-Bold': poppinsBold,
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} background={"#006494"} h={"100%"}>
      <Separator height={125}/>
      <View marginLeft={5}>
        <IconLogin/>
      </View>
      <Separator height={82}/>
      <Center>
        <Text fontSize={32} color={"#B1C9EF"}fontWeight={"bold"}>Selamat Datang</Text>
      </Center>
      <Center p={10}>
        <Text textAlign={"center"} fontSize={16} color={"#fff"} fontWeight={"semibold"}>Selamat datang di MIND U. Bersiaplah untuk memulai perjalanan Anda menuju hal-hal yang terstruktur!</Text>
      </Center>
      <View px={10}>
        <Button size="sm" variant="subtle" background={"white"} h={50} borderRadius={24}>
          <Link href={"/home"} style={{flexDirection:"row"}}>
              <Text fontSize={16} fontWeight={"semibold"} pt={1} marginRight={5}>Masuk Dengan Google</Text>
              <GoogleIcon/>
          </Link>
        </Button>
      </View>
      <Separator height={40}/>
      <Center>
        <Text color={"white"} fontWeight={"bold"}>Made By Kelompok 1 IS 04-02</Text>
      </Center>
      <View position={"absolute"} zIndex={-1} top={70}>
        <ForLogin1/>
      </View>

    </View>
    );
}

export default Login;
