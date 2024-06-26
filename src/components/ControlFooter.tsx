// src/components/ControlFooter.tsx
import { StyleSheet, Text } from "react-native";
import { useAppContext } from "../contexts/AppContext";
import { useTheme } from "../contexts/ThemeContext";

export default function ControlFooter() {
  const app = useAppContext();
  const { themeData } = useTheme();

  return (
    <Text style={[styles.text, { color: themeData.textColor }]}>
      {app.musicTime} remaining on Track {app.track}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 16,
    fontSize: 12,
  },
});
