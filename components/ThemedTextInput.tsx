import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function ThemedTextInput(props: TextInputProps) {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const borderColor = useThemeColor({}, "tint");

  return (
    <TextInput
      placeholderTextColor={useThemeColor({}, "text") + "99"} // faded version
      {...props}
      style={[
        styles.input,
        {
          backgroundColor,
          color: textColor,
          borderColor,
        },
        props.style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
});
