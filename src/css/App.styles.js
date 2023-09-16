import { StyleSheet } from "react-native";

export const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },
  });
