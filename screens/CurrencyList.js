import React from 'react';
import { View, Text,Button, FlatList,StyleSheet, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import CurrencyDetail from './CurrencyDetail';
import { createAppContainer } from 'react-navigation';

class CurrencyList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource : [],
    }
  }


  FlatListItemSeparator = () => {
    return (
      <View style={{
         height: .5,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
    }}
    />
    );
    }


    _onPress(item) {
      this.props.navigation.navigate('Detail', {
        itemId: item.id
      });
    }



  renderItem=(data)=>
<TouchableOpacity style={styles.list} onPress={() => this._onPress(data.item)}>
<Text style={styles.lightText}>{data.item.currency}</Text>
<Text style={styles.lightText}>{data.item.value}</Text>
</TouchableOpacity>


  componentDidMount(){
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then(response => response.json())
    .then((response)=> {
    currArr = [];
      for (let [key, value] of Object.entries(response.rates)) {
        currArr.push({currency:`${key}`, value:`${value}`, id:`${key}`});
      }
      console.log(currArr);

      this.setState({
       loading: false,
       dataSource: currArr
      })
      
    })
    .catch(error=> {dataSource = [];console.log(error);}) 
    }


    render(){

      console.log('Rendering List');
      const { navigation } = this.props;
      if(this.state.loading){
       return( 
         <View style={styles.loader}> 
           <ActivityIndicator size="large" color="#0c9"/>
         </View>
     )}
     return(
      <View style={styles.container}>
       
        <Text>Currency Prices relative to USD base</Text>
      
      <FlatList
         data= {this.state.dataSource}
         ItemSeparatorComponent = {this.FlatListItemSeparator}
         renderItem= {item=> this.renderItem(item)}
      />
     </View>
     )}
     }

     const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff"
       },
      loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
       },
      list:{
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
       }
    });


    export default CurrencyList;


