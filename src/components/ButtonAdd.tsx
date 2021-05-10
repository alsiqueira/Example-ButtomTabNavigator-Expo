import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
interface IRequest {
  size: number;
  color: string;
  focused: boolean;
}

const ButtonAdd: React.FC<IRequest> = ({ focused, size, color }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: focused ? "#ff1300" : "#f0938c" },
      ]}
    >
      <Feather name="plus" size={size} color={focused ? color : "#f1e0df"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,

    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
export default ButtonAdd;
