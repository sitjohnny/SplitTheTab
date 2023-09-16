import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { makeStyles } from "./css/App.styles";

export default function App() {
  const theme = useTheme();

  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>
        Open up App.js to start working on your app!
      </Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Hi
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}
