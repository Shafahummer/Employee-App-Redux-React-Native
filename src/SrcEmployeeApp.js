import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {connect} from "react-redux";
import {Card,Icon} from "native-base";

function mapStateToProps(state){
    return{
        data:state
    }
}

function mapDispatchToProps(dispatch){
    return {
        goodPerfomance:id=>dispatch({
            type:"GOOD_PERFOMANCE",
            id:id
        }),
    
        badPerfomance:id=>dispatch({
            type:"BAD_PERFOMANCE",
            id:id
        })
    }
}

 class SrcEmployeeApp extends React.Component {
     render(){
        return (
            <FlatList
            data={Object.values(this.props.data)}
            renderItem={ ({item})=>(
                <Card style={styles.container}>
                    <View style={styles.idContainer}>
                        <Text style={styles.idText}>
                            {item.empid}
                        </Text>
                    </View>
                    <View style={styles.nameAndSalaryContainer}>
                        <Text style={styles.nameText}>
                            Name: {item.empName}
                        </Text>
                        <Text style={styles.salrayText}>
                            Salary: {item.empSalary.toFixed(2)}
                        </Text>
                    </View>
                    <View style={styles.perfmanceIconContainer}>
                        <TouchableOpacity
                        
                        onPress={()=>{
                            this.props.badPerfomance(item.empid)
                        }}>
                            <Icon
                            ios="ios-thumbs-down"
                            android="md-thumbs-down"
                            style={styles.badPerfomance}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                        
                        onPress={()=>{
                            this.props.goodPerfomance(item.empid)
                        }}>
                            <Icon
                            ios="ios-thumbs-up"
                            android="md-thumbs-up"
                            style={styles.goodPerfomance}
                            />
                        </TouchableOpacity>
                    </View>
                </Card>
             ) }
            keyExtractor={item=>item.empid.toString()}
            >
                
            </FlatList>
          );
     }
  
}
export default connect(mapStateToProps,mapDispatchToProps)(SrcEmployeeApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row"
  },
  idContainer:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      padding:20
  },
  idText:{
      fontSize:18,
      color:"#000"
  },
  nameAndSalaryContainer:{
      flex:4,
      padding:20
  },
  nameText:{
      fontSize:16,
      color:"#000"
  },
  badPerfomance:{
      color:"red"
  },
  goodPerfomance:{
      color:"green"
  },
  perfmanceIconContainer:{
      flex:2,
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center"
  },
  salrayText:{
      fontSize:16,
      color:"#000"
  }
});
