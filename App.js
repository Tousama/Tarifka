import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import Categories from "./src/pages/Categories";
import Detail from "./src/pages/Detail";
import Meals from "./src/pages/Meals";

const Stack = createNativeStackNavigator();

const App = () => {
  if (Platform.OS === "android") {
    const notch = StatusBar.currentHeight > 24;
  }
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackTitleVisible: true}}>
        <Stack.Screen name="Categories" component={Categories} options={{headerTitleStyle: {color: "#EBB530", fontSize: 20}, headerTitleAlign: "center", header: (props) =>
        (
          <View style={{ height: 75, alignItems: "center", justifyContent: "center",}}>
            <StatusBar/>
            <Text style={{fontSize: 36, color: "#EBB530", fontWeight: "700"}}>Categories</Text>
          </View>
        ),}}/>
        <Stack.Screen name="Meals" component={Meals}  options={{headerTitleStyle: {color: "#EBB530", fontSize: 20}, headerTitleAlign: "center", header: (props) =>
        (
          <View style={{ height: 75, alignItems: "center", justifyContent: "center",}}>
            <StatusBar/>
            <Text style={{fontSize: 36, color: "#EBB530", fontWeight: "700"}}>Meals</Text>
          </View>
        ),}}/>
        <Stack.Screen name="Detail" component={Detail}  options={{headerTitleStyle: {color: "#EBB530", fontSize: 20}, headerTitleAlign: "center", header: (props) =>
        (
          <View style={{ height: 75, alignItems: "center", justifyContent: "center",}}>
            <StatusBar/>
            <Text style={{fontSize: 36, color: "#EBB530", fontWeight: "700"}}>Detail</Text>
          </View>
        ),}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;