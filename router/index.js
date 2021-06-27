import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import { HomePage } from "../Views/HomePage"
import { ProductsList } from "../Views/ProductsList"


const Stack = createStackNavigator()

const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ProductsList" component={ProductsList} options={{
          ...TransitionPresets.SlideFromRightIOS,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Router
