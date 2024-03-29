import React from 'react'
import { NavbarTopNew,ProfilUser,Separator, PrimaryButton} from '../../components'
import { Heading,Center,View, Button } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';
import firebase from "../../config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
const Setting = () => {
  const [userData, setUserData] = useState({});
  const buttonWidth = 300;
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    try {
      // Ambil data dari AsyncStorage
      const value = await AsyncStorage.getItem("user-data");
      if (value !== null) {
        const valueObject = JSON.parse(value);
        // Update value state bernama "data"
        setUserData(valueObject);
        // console.log(valueObject);
        // Fetch Data
        // fetchData(valueObject);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const logout = async () => {
    firebase.auth().signOut().then(() => {
        clearUserData();
      }).catch((error) => {
        console.error(error);
      });
  };
  const clearUserData = async () => {
    try {
      await AsyncStorage.clear();
      router.replace("newloginscreen");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#D5DEEF' }}>
    <NavbarTopNew />
    <View style={{ marginLeft: 5 }}>
      <Separator height={20} />
      <Heading ml={5}>Profil</Heading>
      <Separator height={5} />
      <View padding={5}>
        <ProfilUser name={userData.name} email={userData.email} />
      </View>
      <View mr={6} alignItems={'center'} justifyContent={'center'}>
          <View width={buttonWidth} marginLeft={5}>
            <PrimaryButton title={'About Us'} color={'#8AAEED'} fontSize={20} onPress={() => router.push('AboutUS')} />
          </View>
          <Separator height={25} />
          <View width={buttonWidth} marginLeft={5}>
            <PrimaryButton title={'Bug Report'} color={'#8AAEED'} fontSize={20} />
          </View>
          <Separator height={25} />
          <View width={buttonWidth} marginLeft={5}>
            <PrimaryButton title={'General Questions'} color={'#8AAEED'} fontSize={20} />
          </View>
          <Separator height={25} />
          <View width={buttonWidth} marginLeft={5}>
            <PrimaryButton title={'Arsip'} color={'#8AAEED'} fontSize={20} />
          </View>
        </View>
      </View>
    <Separator height={80} />
    <View style={{ padding: 20 }}>
      <PrimaryButton title="Keluar" color={'#B31217'} fontSize={20} onPress={logout} />
      <Center>App Version 1.0</Center>
    </View>
  </SafeAreaView>
  )
}

export default Setting