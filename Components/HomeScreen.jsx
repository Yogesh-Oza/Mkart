import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:8080/employee";

const HomeScreen = () => {
  let [employees, setemployees] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios.get(url).then((res) => {
        console.log(res.data);
        setemployees(res.data);
      });
    };
    getData();
  }, []);


  goToNextPage=() => {
    
  }

  return (
    <View>
      <View>
        <label>Firstname</label>
        <input type="text"></input>
        <Text>Employee Details</Text>
        {employees.map((employee, index) => 
        (
          <View key={index}>
            <Text>ID: {employee.id}</Text>
            <Text>Firstname: {employee.firstname}</Text>
            <Text>Lastname: {employee.lastname}</Text>
            <Text>Email: {employee.email}</Text>
            <Text>------------</Text>
          </View>
        ))}
        <Button title="Submit" onPress={goToNextPage}></Button>
      </View>
    </View>
  );
};

export default HomeScreen;
