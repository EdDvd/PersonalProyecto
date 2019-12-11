import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 1,bg1:'white',bg2:'white',bg3:'white',bg4:'white',bg5:'white',};
   
  }

  
  muestras=(color)=>{
this.setState({bg2:color})
  }

  changeColor(color){
  switch(this.state.count)
            {
              case 1:
              {
                this.setState({bg1:color})
                this.setState({count:this.state.count+1})
                break
              }
              case 2:
              {
                this.setState({bg2:color})
                this.setState({count:this.state.count+1})
                break
              }
              case 3:
              {
                this.setState({bg3:color})
                this.setState({count:this.state.count+1})
                break
              }
              case 4:
              {
                this.setState({bg4:color})
                this.setState({count:this.state.count+1})
                break
              }
              case 5:
              {
                this.setState({bg5:color})
                this.setState({count:1})
                break
              }
            }
}

 render() {
   return (
     <View style={styles.container}>
      <Text style={styles.header}>Paleta</Text>
      
      <View style={styles.muestra}>
      <TouchableOpacity style={{backgroundColor:this.state.bg1,height:50,width:50,marginRight:5}}><Text> </Text></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:this.state.bg2,height:50,width:50,marginRight:5}}><Text> </Text></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:this.state.bg3,height:50,width:50,marginRight:5}}><Text> </Text></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:this.state.bg4,height:50,width:50,marginRight:5}}><Text> </Text></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:this.state.bg5,height:50,width:50,marginRight:5}}><Text> </Text></TouchableOpacity>
      </View>

      <View style={styles.line}><TouchableOpacity style={{backgroundColor:'#B40404', height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3}}   
          onPress={()=>{
            this.changeColor('#B40404');
          }
          }><Text> </Text></TouchableOpacity>
      <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#FF0000'}}      
         onPress={()=>{
            this.changeColor('#FF0000');
          }}
         ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#FA5858'}}   
          onPress={()=>{
            this.changeColor('#FA5858');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#FE2E64'}}   
          onPress={()=>{
            this.changeColor('#FE2E64');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#FA5882'}}   
          onPress={()=>{
            this.changeColor('#FA5882');
          }}
          ><Text> </Text></TouchableOpacity></View>

          <View style={styles.line}><TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#AEB404'}}   
          onPress={()=>{
            this.changeColor('#AEB404');
          }}
          ><Text> </Text></TouchableOpacity>
      <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#FFFF00'}}      
          onPress={()=>{
            this.changeColor('#FFFF00');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#F7FE2E'}}   
          onPress={()=>{
            this.changeColor('#F7FE2E');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#F3F781'}}   
          onPress={()=>{
            this.changeColor('#F3F781');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#FFBF00'}}   
          onPress={()=>{
            this.changeColor('#FFBF00');
          }}
          ><Text> </Text></TouchableOpacity></View>

<View style={styles.line}><TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#31B404'}} 
 onPress={()=>{
            this.changeColor('#31B404');
          }}
 ><Text> </Text></TouchableOpacity>
      <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#01DF01'}}      
          onPress={()=>{
            this.changeColor('#01DF01');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#40FF00'}}   
          onPress={()=>{
            this.changeColor('#40FF00');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#81F781'}}   
          onPress={()=>{
            this.changeColor('#81F781');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#58FAAC'}}   
          onPress={()=>{
            this.changeColor('#58FAAC');
          }}
          ><Text> </Text></TouchableOpacity></View>

          <View style={styles.line}><TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#2EFEF7'}}   
          onPress={()=>{
            this.changeColor('#2EFEF7');
          }}
          ><Text> </Text></TouchableOpacity>
      <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#00BFFF'}}      
          onPress={()=>{
            this.changeColor('#00BFFF');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#0174DF'}}   
          onPress={()=>{
            this.changeColor('#0174DF');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#7401DF'}}   
          onPress={()=>{
            this.changeColor('#7401DF');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#A901DB'}}   
          onPress={()=>{
            this.changeColor('#A901DB');
          }}
          ><Text> </Text></TouchableOpacity></View>

          <View style={styles.line}><TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#FFFFFF'}}   
          onPress={()=>{
            this.changeColor('#FFFFFF');
          }}
          ><Text> </Text></TouchableOpacity>
      <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#D8D8D8'}}      
          onPress={()=>{
            this.changeColor('#D8D8D8');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#848484'}}   
          onPress={()=>{
            this.changeColor('#848484');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#585858'}}   
          onPress={()=>{
            this.changeColor('#585858');
          }}
          ><Text> </Text></TouchableOpacity>
          <TouchableOpacity style={{height:40, width:40,marginRight:10, marginBottom:5, borderColor:'white',borderWidth:3, backgroundColor:'#000000'}}   
          onPress={()=>{
            this.changeColor('#000000');
          }}
          ><Text> </Text></TouchableOpacity></View>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center', 
   },
   header: {
         
   fontSize:30,
   color:'#fff',
   marginTop:50,
   marginBottom:50,
   },

   line: {
     flex:1,
     flexDirection:'row',
     
     
   },

  

   muestra: {
     flex:1,
     flexDirection:'row',
     marginBottom:10
    
        
   }


  })
