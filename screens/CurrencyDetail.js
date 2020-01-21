import React from 'react';
import { View, Text } from 'react-native';


class CurrencyDetail extends React.Component {

  constructor() {
    super();
    this.detailstate = {};
  }


  componentDidMount(){
    
    }




    render() {

      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID')

      fetch("https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol="+itemId+"&to_symbol=USD&interval=60min&apikey=ICULZ6VBLKG2RCX4")
    .then(response => response.json())
    .then((response)=> {
      console.log(response);
    })
    .catch(error=> {console.log(error);}) 


      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>ItemId: {JSON.stringify(itemId)}</Text>
        </View>
      );
    }
  }

  
  export default CurrencyDetail;