import React, {useState,Component} from 'react';
import { Button,Image,Text, StyleSheet,Alert,SafeAreaView,View ,ScrollView,TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppIntroSlider from 'react-native-app-intro-slider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GuidesP from './Guides'
import { useNavigation } from '@react-navigation/native';


function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Text
      title="Back"
      color="black"
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
          paddingBottom: 80,
          paddingTop:30,
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
        <TouchableOpacity>
        <Button style={styles.followButton} onPress={() => Alert.alert('Book Youre Tour')} 
          title="Book"/>
           <MyBackButton    color="#fd9c6d"/>
           </TouchableOpacity>
      </View>
      
    );
  };
  

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
        
          <View style={{   flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fd9c6d',
    alignItems: 'center',
    width: '100%',}}>
        <Text style={{color: 'black',fontSize: 40}}> Nablus Tour Guide</Text>
    <Image style={{height:380,width:430}}source={ require('./Images/NablusView.jpg')}/>
        <Text style={{   color: 'black',
    fontSize: 20,
    marginTop: 8}}>The way Of Discovering Nablus City</Text>

      
          
           <TouchableOpacity>
          <Button
          
            style={styles.followButton}
              title="Show Tours again"
              onPress={() => setShowRealApp(false)}
         
          
            />
            <MyBackButton style={{color:"#fd9c6d"}} />
        </TouchableOpacity>
      </View>
        
        </SafeAreaView>
      ) : (
         
            <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          showButton={true}
        />
   
      )}
    </>

  );
}
function Tours() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Hotels() {
  return (
      <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >

          </ScrollView>
          
  );
}




const Tab = createMaterialTopTabNavigator();


export default class Profile extends Component {
  
  render() {
    return (

    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
      activeTintColor: 'red', 
    inactiveTintColor: 'grey', 
    showIcon: true,
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="Tours"
        component={Int}
          options={{
          tabBarLabel: 'Tours',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="walk" color={color} size={26} />
          ),
        }}
       
      />
      <Tab.Screen
        name="Hotels"
        component={Hotels}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bed" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Guides"
        component={GuidesP}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }}
      />
          <Tab.Screen
        name="Map"
        component={Hotels}
          options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />
       
    </Tab.Navigator>


  );
  }
}
const styles = StyleSheet.create({
  container: {
    top:"40",
    flex: 1,
    backgroundColor: '#fd5e53',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
 
  introImageStyle: {
    width: 430,
    height:350,
       
  },
  introTextStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 30,
fontStyle:'italic',

  },
  introTitleStyle: {
  
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    fontStyle:'italic',
    fontSize:36,
  },
 followButton: {
    marginTop:10,
    height:35,
    width:190,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "black",
  },

    buttonContainer: {
    margin: 20
  },
});
const slides = [
  {
    key: 's1',
    text: 'This route departs from the town of Sebastia, where the ancient Roman city is located. To Nablus, 10 km long; And a period of 2 to 3 hours, for the tourists to enjoy seeing her old town and its historic buildings',
    title: 'Ibrahim al-Khalil path in Nablus ',
    image: require('./Images/element0.jpg'),
 
    backgroundColor:'#feca85',
  },
  {
    key: 's2',
    title: 'Path of the old city of Nablus',
    text: 'The neighborhoods of the old city in the city of Nablus are distinguished by their charm, their special architectural character, and inherited from the ancient civilizations that succeeded in the city. ',
    image:require("./Images/oldcity.jpg"),

    backgroundColor:'#feca85',
  },
  {
    key: 's3',
    title: 'Sebastia to Nablus ',
    text: 'After leaving the shrine, the path continues its way through the peaks by passing through the fields and farms of the heights towards Mount Ebal or the “Curses” mountain, which is located on the northern side of Nablus, opposite Mount Gerizim, “Jabal Al-Grace”.',
    image: require('./Images/element3.jpg'),
   
    backgroundColor:'#feca85',
  },
  {
    key: 's4',
    title: 'Awarta to Douma',
    text: 'From Awarta the path continues outside the village, following a ridge with wide views of the surrounding countryside hills.Halfway between Awarta and Aqraba is a mountain called Mount Urma, which means a heap of wheat. ',
    image: 
      require("./Images/element4.jpg"),
    
    backgroundColor:'#feca85',
  },
  {
    key: 's5',
    title: 'Douma to Kafr Malik',
    text: 'After leaving Douma, the path heads through Wadi Deba (Wadi Al Hainas) and through many beautiful olive groves towards Al Mughayir',
    image: require('./Images/element5.jpg'),
    backgroundColor:'#feca85',
  },
  {
    key: 's6',
    title: 'Kafr Malik to Al-Auja',
    text: 'Following a small road from Kafr Malik, the path winds you towards a hill filled with remains of Roman tombs and reservoirs and then takes you towards the Ain Samia Valley.',
    image:require('./Images/element6.jpg'),
       
   
    backgroundColor: '#feca85',
  },
];
