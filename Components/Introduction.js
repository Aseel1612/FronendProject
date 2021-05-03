import React, {useState,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,TouchableHighlight,ScrollView,TouchableOpacity,Alert
} from 'react-native';
import Constants from 'expo-constants'
import AppIntroSlider from 'react-native-app-intro-slider';
import { createStackNavigator } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Text
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}
function Int({ navigation: { navigate } }) {
  
  
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    

     setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
           <MyBackButton />
      </View>
      
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
        
          <View style={{   flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',}}>
        <Text style={{color: 'red',
    fontSize: 40,  }}>Nablus Tour Guide</Text>
        <Text style={{   color: 'red',
    fontSize: 20,
    marginTop: 8,   }}>The way Of Discovering Nablus City</Text>
        <Image
        style={{ width: 330,
    height:200,
   }}
          source={require('./Images/Logo.jpg')}
        
        />
      
            <Button 
           
              title="Sign Up"
              onPress={() => navigate('SignUp')}
            color="red"

              backgroundColor="black"
              fontSize='20'
            />
            
             <Button
          
            style={{backgroundColor:"red"}}
              title="Log In"
              onPress={() => navigate('Login')}
              color="red"
           
            />
          <Button
          
            style={styles.button}
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
           
            />
            <MyBackButton />
        
      </View>
        
        </SafeAreaView>
      ) : (
         
            <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        
        />
   
      )}
    </>

  );
};

function Login({ navigation: { navigate } }) {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <View>
          <Image
            source={require('./Images/Logo.jpg')}
            style={{ width: 380, height: 190 }}
          />
        </View>
        <View
          style={{
            borderBottomColor: '#F5FCFF',
            backgroundColor: 'white',
            borderRadius: 30,
            borderBottomWidth: 1,
            width: 250,
            height: 45,
            marginBottom: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
              left: 250,
              justifyContent: 'center',
            }}
            source={require('./Images/emailicon.png')}
          />
          <TextInput
            style={{
              height: 45,
              marginLeft: 0,
              backgroundColor: 'white',
              borderBottomColor: '#FFFFFF',
            }}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(value) => onChangeName(value)}
          />
        </View>

        <View
          style={{
            borderBottomColor: '#F5FCFF',
            backgroundColor: 'white',
            borderRadius: 30,
            borderBottomWidth: 1,
            width: 250,
            height: 45,
            marginBottom: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
              left: 250,
              justifyContent: 'center',
            }}
            source={require('./Images/passwordkeyicon.png')}
          />
          <TextInput
            style={{
              height: 45,
              marginLeft: 0,
              backgroundColor: 'white',
              borderBottomColor: '#FFFFFF',
              flex: 1,
            }}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>

        <View>
          <TouchableOpacity>
            <View
              style={{
                justifyContent: 'centrt',
                fontWeight: 'Bold',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Cochin',
                  fontWeight: 'Bold',
                  fontSize: 20,
                }}>
                {' '}
                Forgot?
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 45,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
              width: 250,
              borderRadius: 30,
            }}>
            <Text style={{ color: 'white' }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <View
              style={{
                height: 45,
                width: 120,
                alignItems: 'center',
                fontSize: 30,
                fontWeight: 'bold',
                backgroundColor: 'red',
                borderRadius: 30,
              }}>
              <Button
                title="Log In"
                color="white"
                onPress={() => Alert.alert("save you're information ")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#3b5998',
              height: 45,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
              width: 250,
              borderRadius: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  left: 230,
                  justifyContent: 'center',
                }}
                source={require('./Images/facebookicon.png')}
              />
              <Text style={{ color: 'white' }}>Continue with facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 45,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
              width: 250,
              borderRadius: 30,
              backgroundColor: '#ff0000',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  left: 220,
                  justifyContent: 'center',
                }}
                source={require('./Images/googleicon.jpg')}
              />
              <Text style={{ color: 'white' }}>Sign in with google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function SignUp({ navigation: { navigate } }) {
  const [user, setUser] = useState({
    name: '',
    Email: '',
    PhoneNumber: '',
   Password: '',
  });
  const [loading, setLoading] = useState(false);

  const onChangeName = (value) => {
    setUser({ ...user, name: value });
  };

  const onChangeGender = (value) => {
    setUser({ ...user, Email: value });
  };

  const onChangeEmail = (value) => {
    setUser({ ...user, PhoneNumber: value });
  };

  const onChangeStatus = (value) => {
    setUser({ ...user, Password: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('https://gorest.co.in/public-api/users', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        name: user.name,
        Email: user.Email,
       PhoneNumber: user.PhoneNumber,
     Password: user.Password,
      }),
    })
      .then((response) => {
        setLoading(false)
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

   const [textInputName, setTextInputName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
 const [textInputpass, setTextInputpass] = useState('');
  const [textInputconpass, setTextInputconpass] = useState('');
    const [textInputNum, setTextInputNum] = useState('');
   var phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{4})?([0-9]{3})$/;
   var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
   var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
 var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const checkTextInput = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
     
      return;
    }
    if (!textInputNum.trim()) {
      alert('Please Enter youre phone number');
      return;
    }
     if (!textInputpass.trim()) {   
      alert('Please Enter youre password');
      return;
    }
       if (!textInputconpass.trim()) {
    
      alert('Please Enter youre confirmed password');
      return;
    }
    if (textInputEmail.trim()) {
     
       if(textInputEmail.trim().match(validRegex)){
  if(textInputNum.trim().match(phoneno)){ if(textInputpass.trim().match(paswd))  {

         if(textInputconpass.trim().match((textInputpass.trim()))){
           return true;}
       if(!textInputconpass.trim().match((textInputpass.trim()))){
           alert("youre password Not confirmed");
           return;}
       
      }
     if(!textInputpass.trim().match(paswd))  
     { 
       alert('Please Enter password with at least 6 character ,one digit ,one upper case and one lower case ,one special character '); 
 return;
 
 
 }

  }
  if(!textInputNum.trim().match(phoneno)){ alert('invalid phone number');return ;}
   if(textInputpass.trim().match(paswd))  {
        return  true;
      }
     if(!textInputpass.trim().match(paswd))  
     { alert('Please Enter password with at least 6'); 
 return;}


 if(!textInputconpass.trim().match((textInputpass.trim()))){
           alert("youre password Not confirmed");
           return;}
       }
     if(!textInputEmail.trim().match(validRegex))  { 
       
        alert('Please Enter a valid Email');return;
     
     }
       alert('Success');
      
          }
 
    
  };
     
  
  
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ backgroundColor: 'white' }}>
          <Image
            style={{ height: 120, width: 300 }}
            source={require('./Images/Logo.jpg')}
          />
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }} >
              Full Name
            </Text>
            <TextInput
              style={{
                height: 45,
                marginLeft: 0,
                backgroundColor: 'white',
                borderBottomColor: '#FFFFFF',
                flex: 1,
              }}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
                onChangeText={
          (value) => setTextInputName(value)
          }
       />
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
              Email
            </Text>
            <TextInput
              style={{
                height: 45,
                marginLeft: 0,
                backgroundColor: 'white',
                borderBottomColor: '#FFFFFF',
                flex: 1,
              }}
              placeholder="Email"
              keyboardType="email-address"
               iconName='ios-mail'
          iconColor='#2C384A'
              underlineColorAndroid="transparent"
                onChangeText={
            (value) => setTextInputEmail(value)
          }
          
            />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
              Phone Number
            </Text>
            <TextInput
              style={{
                height: 45,
                marginLeft: 0,
                backgroundColor: 'white',
                borderBottomColor: '#FFFFFF',
                flex: 1,
              }}
              placeholder="+970 ([00]) [0000] [000] "
              keyboardType="numeric"
       
              underlineColorAndroid="transparent"
              onChangeText={
            (value) => setTextInputNum(value)
          }
            />
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
              Password
            </Text>
            <TextInput
              style={{
                height: 45,
                marginLeft: 0,
                backgroundColor: 'white',
                borderBottomColor: '#FFFFFF',
                flex: 1,
              }}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
               onChangeText={
            (value) => setTextInputpass(value)
          }
            />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
              ConfirmPasswords
            </Text>
            <TextInput
              style={{
                height: 45,
                marginLeft: 0,
                backgroundColor: 'white',
                borderBottomColor: '#FFFFFF',
                flex: 1,
              }}
              placeholder="confirm Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
        
            />
          </View>
          <TouchableHighlight  style={{ fontWeight: 'bold', fontSize: 35 }}>
            <Button onPress={checkTextInput} title="Sign up" color="red" />
          </TouchableHighlight>
          <Button
            title="already have an account"
            color="red"
            onPress={() => navigate('Login')}
          />
        </View>
      </View>
    </ScrollView>
  );
}


export default class Intro extends Component {
  
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">

       
        <Stack.Screen name="Nt Guide" component={Int} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
        
      </Stack.Navigator>
    );
  }
}

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
 
  introImageStyle: {
    width: 300,
    height:320,
       
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  fontStyle:'italic',

  },
  introTitleStyle: {
  
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    fontStyle:'italic',
    fontSize:36,
  },
});

const slides = [
  {
    key: 's1',
    text: 'Welcom To our App',
    title: 'Nablus Tour Guide',
    image: require('./Images/1.webp'),
 
    backgroundColor: '#90ee90',
  },
  {
    key: 's2',
    title: 'Tour Booking',
    text: 'Book youre Tour within Nabluc City',
    image:require('./Images/Tour.webp'),

    backgroundColor: '#febe29',
  },
  
  {
    key: 's4',
    title: 'Hotels Booking',
    text: ' Best prices for booking Hotels in Nablus',
    image: 
      require('./Images/Hotels.webp'),
    
    backgroundColor: '#9995ff',
  },
  {
    key: 's5',
    title: 'Guides for you ',
    text: 'Choose Youre Guide ',
    image: require('./Images/Gt.webp'),
    backgroundColor: '#ffa07a',
  },
  {
    key: 's6',
    title: 'Discover New Places',
    text: '',
    image:require('./Images/discover.webp'),
       
   
    backgroundColor: '#febe29',
  },
];