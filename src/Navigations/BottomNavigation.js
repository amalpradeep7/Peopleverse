import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/Homepage';
import App from '../screens/Category';
import AboutUs from '../screens/About_us';
import Settings  from '../screens/Settings';


const Tab = createBottomTabNavigator();

function MyTabs() {

  return (


    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage}  options={{headerShown:false}}  />
      <Tab.Screen name="Category" component={App }  options={{headerShown:false}} />
      <Tab.Screen name= "About" component={AboutUs}  options={{headerShown:false}} />
      <Tab.Screen name= "Settings" component={Settings}  options={{headerShown:false}} />






    </Tab.Navigator>
  );
}
export default MyTabs;