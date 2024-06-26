import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useAppContext } from "../contexts/AppContext";
import { useTheme } from "../contexts/ThemeContext";
import ControlFooter from "./ControlFooter";

export default function Control() {
  const app = useAppContext();
  const { themeData } = useTheme();

  const handlePrev = () => {
    app.prev();
  };
  const handleNext = () => {
    app.next();
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePrev} style={[styles.button, { backgroundColor: themeData.color }]}>
          <Text style={{ color: themeData.textColor}}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={[styles.button, { backgroundColor: themeData.color }]}>
          <Text style={{ color: themeData.textColor}} >Next</Text>
        </TouchableOpacity>
      </View>
      <ControlFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  }
});
