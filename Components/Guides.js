import React, {useState }from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,Button
} from 'react-native';

const FP =()=>{
  return(
    <Text>hello</Text>);
}
export default class Guides extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, name: "Mohammad Khalil",   position:"Tour Guide",image:require('./Images/person1.png'),details:"gfdfvbbvcxvgbhjkl;lkjhgfdfghjkllkjhgfdsdfghjkllkijhgfdsdfghjk"},
        {id:1, name: "Mais Mazen",   position:"Tour Guide",image:require("./Images/person2.png"),details:"gfdfvbbvcx"},
        {id:2, name: "Lara Khamis",  position:"Tour Guide", image:require("./Images/person3.png"),details:"gfdfvbbvcx"} ,
        {id:3, name: "Abdallah Moen", position:"Tour Guide", image:require("./Images/person4.png"),details:"gfdfvbbvcx"} ,
        {id:4, name: "Saeed Bashar", position:"Tour Guide",   image:require("./Images/person5.jpg"),details:"gfdfvbbvcx"} ,
        {id:5, name: "Neda'a Fahmi",   position:"Tour Guide", image:require("./Images/person5.jpg"),details:"gfdfvbbvcx"} ,
      ]
    };
  }
  clickEventListener(item) {
    Alert.alert(item.name)
  }
     onPressLearnMore = () => {
    //For generating alert on buttton click
    alert('Hello');
  }
   clickEven(item) {
     return(
  <Text>Hello</Text>
     )
  }

  render() {
     
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardHeader}>
               
                </View>
                <Image style={styles.userImage} source={item.image}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                    <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Book</Text>  
                    </TouchableOpacity>
                            <TouchableOpacity style={styles.followButton} onPress={()=> this.FP}>
                            
                      <Text style={styles.followButtonText}>Details</Text>  
                     </TouchableOpacity>
                
           
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"white",
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
    buttonContainer: {
    margin: 20
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:190,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  icon:{
    height: 20,
    width: 20, 
  }
});    