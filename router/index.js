import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { HomePage } from "../Views/HomePage"


const Stack = createStackNavigator()
const Router = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


export default Router
