import React from 'react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import SrcEmpolyeeApp from "./src/SrcEmployeeApp";

const initState={
  1:{
    empid:1,
    empName:"Employee One",
    empSalary:10000.0
  },
  2:{
    empid:2,
    empName:"Employee Two",
    empSalary:20000.0
  },
  3:{
    empid:3,
    empName:"Employee Three",
    empSalary:30000.0
  },
  4:{
    empid:4,
    empName:"Employee Four",
    empSalary:40000.0
  },
  5:{
    empid:5,
    empName:"Employee Five",
    empSalary:50000.0
  },
}

const reducer=(state=initState,action)=>{

  let initSalary
  let decrement
  let newSalary
  let employeeObject

  if(action.id){
    initSalary=state[action.id].empSalary;
    increment=(initSalary/100) * 20
  }

  switch(action.type){
    case "GOOD_PERFOMANCE":
      newSalary=initSalary+increment;
      employeeObject=state[action.id]
      employeeObject.empSalary=newSalary;
      return Object.assign({},state)

    case "BAD_PERFOMANCE":
      newSalary=initSalary-increment;
      employeeObject=state[action.id]
      employeeObject.empSalary=newSalary;
      return Object.assign({},state)
  }
  return state
}

const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <SrcEmpolyeeApp/>
      </Provider>
  );
}
