import { StyleSheet } from "react-native";

export const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flex: "1",
      backgroundColor: theme.colors.background,
      alignItems: "center",
      color: "white",
    },
    title: {
      marginTop: "20%",
    },
    textInput: {
      top: "5%",
      marginBottom: "10%",
      justifyContent: "center",
      borderColor: "gray",
      width: "80%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
    segmentedButtonInput: {
      top: "5%",
      width: "80%",
    },
  });
