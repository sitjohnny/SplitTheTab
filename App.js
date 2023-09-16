import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { PaperProvider } from "react-native-paper";
import App from "./src/App";
import { theme } from "./theme";

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
