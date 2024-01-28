import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Form } from '../screens/Form/Form';
import { Home } from '../screens/Home/Home'

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='Home'
        options={{
          headerShown: false,
        }}
        component={Home}
      />

      <Screen
        name='Formulario'
        options={{
          headerShown: false          
        }}
        component={Form}
      />

    </Navigator>
  )
}