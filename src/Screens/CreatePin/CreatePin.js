import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  Platform,
  Alert,
  BackHandler,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {showError} from '../../helper/helperFunctions';
import {useIsFocused} from '@react-navigation/native';
const CreatePin = ({navigation, route}) => {
  const [pass, setPass] = useState('');
  const isFocused = useIsFocused();
  const [auth, setauth] = useState('');
  useEffect(() => {
    setauth(route.params.auth);
  }, []);

  // useEffect(() => {
  //   isFocused &&
  //     BackHandler.addEventListener('hardwareBackPress', () => backAction());
  //   return () =>
  //     BackHandler.removeEventListener('hardwareBackPress', () => backAction());
  // }, []);

  // console.log('isFocusedisFocusedisFocused', isFocused);

  // const backAction = () => {
  //   if (isFocused) {
  //    Aler
  //   }
  // };

  // const backAction = () => {
  //   if (isFocused) {
  //     Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'YES', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   }
  //   navigation.goBack();
  //   return true
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', backAction);
  //   return () =>
  //     BackHandler.removeEventListener('hardwareBackPress', () => {
  //       return false;
  //     });
  // }, []);

  const onPressContinue = () => {
    if (pass.length < 4) {
      showError(
        pass.length == 0 ? 'Please enter the pin ' : 'Pin must be 4 Digit',
      );
    } else {
      // console.log(pass,'vakbcks')
      navigation.navigate(navigationStrings.CONFIRMPIN, {
        pin: pass,
        auth: auth,
      });
    }
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Image source={imagePath.logo_header} />
        <Text style={styles.CreatePinHeading}>{strings.createPinHeading}</Text>
        <Text style={styles.CreatePinSubheading}>
          {strings.createPinSubHeading}
        </Text>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss()} accessible={false}> */}
        <View style={styles.codefieldView}>
          <SmoothPinCodeInput
            password
            mask={<View style={styles.customMask} />}
            textStyle={styles.pinTextStyle}
            cellStyle={styles.cell}
            cellSize={64}
            codeLength={4}
            cellSpacing={21}
            containerStyle={styles.cellcon}
            cellStyleFocused={styles.cellouter}
            value={pass}
            keyboardType={
              Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'
            }
            animated={false}
            onTextChange={password => {
              setPass(password);
              console.log(password, pass, 'passwordpasswordpassword');
            }}
          />
        </View>
        <View style={styles.btnview}>
          <ButtonComp
            btnText={strings.CONTINUE}
            // onPress={() => navigation.navigate(navigationStrings.CONFIRMPIN)}
            onPress={onPressContinue}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default CreatePin;
