import React, { useState, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context";
import {
  SignIn,
  CreateAccount,
  Profile,
  Home,
  Search,
  Details,
  Search2,
  Splash,
} from "./Screens";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Searchtack = createStackNavigator();

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

const SearchtackScreen = () => (
  <Searchtack.Navigator>
    <Searchtack.Screen name="Search" component={Search} />
    <Searchtack.Screen name="Search2" component={Search2} />
  </Searchtack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchtackScreen} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();

const AuthStackScreens = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "CreateAccount" }}
    />
  </AuthStack.Navigator>
);

const AppStackScreens = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

const AppStack = createStackNavigator();

const AppFlow = ({ userToken }) => (
  <AppStack.Navigator>
    {userToken ? (
      <AppStack.Screen
        name="App"
        component={AppStackScreens}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <AppStack.Screen
        name="Auth"
        component={AuthStackScreens}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </AppStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <AppFlow userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
