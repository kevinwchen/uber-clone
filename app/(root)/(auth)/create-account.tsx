import { ScrollView, Image, View, Text } from 'react-native';
import { icons, images } from '@/constants';
import InputField from '@/components/InputField';
import React, { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const CreateAccount = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onCreateAccountPress = async () => {};
  return (
    <ScrollView className={'flex-1 bg-white'}>
      <View className={'flex-1 bg-white'}>
        <View className={'relative w-full h-[250px]'}>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text
            className={
              'text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'
            }
          >
            Create Your Account
          </Text>
        </View>
        <View className={'p-5'}>
          <InputField
            label={'Name'}
            placeholder={'Enter your name'}
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label={'Email'}
            placeholder={'Enter your email'}
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label={'Password'}
            placeholder={'Enter your password'}
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title={'Create Account'}
            onPress={onCreateAccountPress}
            className={'mt-6'}
          />
          {/*Oauth*/}

          <Link href={'/log-in'} className={'text-lg text-center mt-10'}>
            <Text className={'text-general-200'}>
              Already have an account?{' '}
            </Text>
            <Text className={'text-primary-500'}>Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateAccount;
