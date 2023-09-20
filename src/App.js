import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  Text,
  useTheme,
  withTheme,
  TextInput,
  Divider,
  SegmentedButtons,
  SafeAreaView,
} from "react-native-paper";
import { makeStyles } from "./css/App.styles";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export function App() {
  const theme = useTheme();
  const [checkAmount, setCheckAmount] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [taxPercentage, setTaxPercentage] = useState("8.875");
  const [tipPercentage, setTipPercentage] = useState("15");

  const styles = makeStyles(theme);

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.title} variant="displayMedium">
          Split The Tab
        </Text>
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          label="Pre-tax Amount"
          value={checkAmount}
          onChangeText={(value) => setCheckAmount(value)}
          placeholder="$0.00"
        />
        <Divider bold={true} />
        <TextInput
          keyboardType="number-pad"
          style={styles.textInput}
          label="Number of People"
          value={numPeople}
          onChangeText={(value) => setNumPeople(value)}
          placeholder="0"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          label="Tax Percentage"
          value={taxPercentage}
          onChangeText={(value) => setTaxPercentage(value)}
        />

        <SegmentedButtons
          value={tipPercentage}
          onValueChange={setTipPercentage}
          style={styles.segmentedButtonInput}
          buttons={[
            {
              value: "12.5",
              label: "12.5%",
            },
            {
              value: "15",
              label: "15%",
            },
            { value: "18", label: "18%" },
            { value: "", label: "Custom" },
          ]}
        />

        {tipPercentage !== "12.5" ||
        tipPercentage !== "15" ||
        tipPercentage !== "18" ? (
          <TextInput
            keyboardType="numeric"
            style={styles.textInput}
            label="Tip Percentage"
            value={tipPercentage}
            onChangeText={(value) => setTipPercentage(value)}
          />
        ) : null}
        {/* <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Hi
      </Button> */}
        <StatusBar style="auto" />
      </View>
    </DismissKeyboard>
  );
}

export default withTheme(App);
