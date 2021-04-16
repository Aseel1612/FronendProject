import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       name:'',
      numc: '',
      cvv: '',
      exp:'',
     
    };
  }
  
  onLogin() {
    var cardno =  /^(?:5[1-5][0-9]{14})$/;//start with 51-55 16 digit Validate a MasterCard
    var cv =/^\d{3}$/;
    var regVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var today, someday;

  
    const { numc, cvv,exp,name } = this.state;

       if(!name.trim()){ alert('Please enter your Name on the card');return;}
if(numc.trim()){ alert('Please enter your card number');return;}
       if(!cvv.trim()){ alert('Please enter your card cvv');return;}
       if(!exp.trim()){ alert('Please enter your card expire date');return;}
   
        
   if(!cvv.trim().match(cv)){
       alert('invalid cvv');  
        return;}
      if(!numc.trim().match(regVisa)){
        alert('invalid cridit number');
        return ;
        
      }
  }

   // Alert.alert('Credentials', ${username} + ${password});
  

  render() {

    return (
      <View style={styles.container}>
      <Text style={styles.tx}>Holders Name</Text>
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={'Holder Name'}
          style={styles.input}
        />
        <Text style={styles.tx}>cridit card Number</Text>
        <TextInput
          value={this.state.cnum}
          onChangeText={(cnum) => this.setState({ cnum })}
          placeholder={'xxx xxxx xxxx xxxx'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Text style={styles.tx}>CVV/CVC</Text>
           <TextInput
          value={this.state.cvv}
          onChangeText={(cvv) => this.setState({ cvv })}
          placeholder={'XXX'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Text style={styles.tx}>Expirity Date</Text>
           <TextInput
          value={this.state.exp}
          onChangeText={(exp) => this.setState({ exp })}
          placeholder={'MM/YY'}
          secureTextEntry={false}
          style={styles.input}
          
        />
           <DatePicker
          style={styles.datePickerStyle}
          date={this.exp} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        <Button
          title={'Book'}
          style={styles.but}
          onPress={this.onLogin.bind(this)}
          color='#000080'
       
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEFA',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    backgroundColor: '#ADD8E6',
    borderWidth: 1,

    borderColor: '#ADD8E6',
    marginBottom: 10,
  },
  tx: { padding: 10,
       width: 200,
    height: 44,
    color:'#000080',


  },
  but:{ 
    
    color:'pink',


  },
});