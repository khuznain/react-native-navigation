import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
        <Button title="Sign Up" onPress={() => "Alert ! this is working.."} />
      </View>
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <View>
        <Text>FeedScreen</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      console.log(navigation);
      return {
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            style={{ paddingLeft: 10 }}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: { screen: DashboardStackNavigator }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
console.log("working..");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
