import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import AllDataScreen from '../screens/AllDataScreen';
import DepositScreen from '../screens/DepositScreen';
import WithdrawScreen from '../screens/WithdrawScreen';
import colors from '../util/colors';

type DrawerAppStackParams = {
    Home: undefined;
    CreateAccount: undefined;
    Deposit: undefined;
    Withdraw: undefined;
    AllData: undefined;
};

const Drawer = createDrawerNavigator<DrawerAppStackParams>();
const AppRoute = () => {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            screenOptions={{
                drawerActiveTintColor: colors.colorPrimaryDark ,
                headerTintColor: colors.colorPrimaryDark 
            }}>
            <Drawer.Screen name="Home"
                component={HomeScreen} 
                options={{
                    drawerLabel: 'Home', 
                    title: 'Home',
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            name = "home"
                            size = {size}
                            color = {focused ? colors.colorPrimaryDark : colors.inactiveColor}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="CreateAccount" 
                component={CreateAccountScreen} 
                options={{
                    drawerLabel: 'Create Account', 
                    title: 'Create Account',
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            name = "plus-square"
                            size = {size}
                            color = {focused ? colors.colorPrimaryDark : colors.inactiveColor}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="Deposit" 
                component={DepositScreen} 
                options={{
                    drawerLabel: 'Deposit', 
                    title: 'Deposit',
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            name = "money"
                            size = {size}
                            color = {focused ? colors.colorPrimaryDark : colors.inactiveColor}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="Withdraw" 
                component={WithdrawScreen} 
                options={{
                    drawerLabel: 'Withdraw', 
                    title: 'Withdraw',
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            name = "dollar"
                            size = {size}
                            color = {focused ? colors.colorPrimaryDark : colors.inactiveColor}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="AllData" 
                component={AllDataScreen} 
                options={{
                    drawerLabel: 'All Data', 
                    title: 'All Data',
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            name = "bank"
                            size = {size}
                            color = {focused ? colors.colorPrimaryDark : colors.inactiveColor}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
};
 
export default AppRoute;