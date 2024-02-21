import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './BottomNavigation';

const Stack = createStackNavigator();


function StackNavigation() {
  return (

    <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export { StackNavigation };

