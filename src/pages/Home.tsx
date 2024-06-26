import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import Timeline from "../components/Timeline";

import { useAppContext } from "../contexts/AppContextProvider";
import FormInput from "../components/FormInput";

export default function Home() {
  const { themeData, toggleTheme } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Home - Music Player</Text>
      <Timeline />
      
      <TouchableOpacity onPress={toggleTheme} style={[styles.button]}>
          <Text  >Trocar Tema</Text>
      </TouchableOpacity>

      <FormInput
          label="Username"
          value={username}
          placeholder="Username"
          onChangeText={setUsername}
      />

      <FormInput
          label="Password"
          value={password}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  }
});
