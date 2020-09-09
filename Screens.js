import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "./context";

export const SignIn = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate("CreateAccount")}
      />
    </View>
  );
};

export const CreateAccount = () => {
  const { signUp } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Create Account Screen</Text>
      <Button title="Sign In" onPress={() => {}} />
      <Button title="Create Account" onPress={() => signUp()} />
    </View>
  );
};

export const Profile = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

export const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Details"
        onPress={() => navigation.push("Details", { name: "React Native" })}
      />
    </View>
  );
};

export const Search = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search Screen</Text>
      <Button title="Search 2" onPress={() => {}} />
      <Button
        title="Details"
        onPress={() => {
          navigation.navigate("Details", {
            name: "React",
          });
        }}
      />
    </View>
  );
};

export const Details = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Search 2" onPress={() => navigation.navigate("Search")} />
      {route.params.name && <Text>{route.params.name}</Text>}
    </View>
  );
};

export const Search2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search2 Screen</Text>
      <Button title="Search 2" onPress={() => {}} />
    </View>
  );
};

export const Splash = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading</Text>
    </View>
  );
};

export default SignIn;
