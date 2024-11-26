import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import * as React from "react";
import { Appbar } from "react-native-paper";

type TopbarProps = {
  title: string;
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>;
};

const Topbar = ({ title, navigation }: TopbarProps) => (
  <Appbar.Header>
    <Appbar.BackAction
      onPress={() => {
        navigation.goBack();
      }}
    />
    <Appbar.Content title={title} />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
);

export default Topbar;
