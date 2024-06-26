import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TextInputProps,
  } from "react-native";
  import React, { useState } from "react";
  
  type FormInput = {
    label?: string;
  } & TextInputProps;
  
  export default function FormInput({ label, ...rest }: FormInput) {
    const [focus, setFocus] = useState(false);
  
    return (
      <View style={[styles.container, focus && styles.focusContainer]}>
        {label && (
          <Text style={[styles.label, focus && styles.focus]}>{label}</Text>
        )}
        <TextInput
          {...rest}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      
      padding: 4,
      width: "100%",
      borderBottomColor: "grey",
      borderBottomWidth: 1,
    },
    label: {
      fontSize: 12,
    },
    focus: {
      color: "blue",
    },
    focusContainer: {
      borderBottomColor: "black",
    },
  });
  