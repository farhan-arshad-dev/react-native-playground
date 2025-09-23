import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

export default function AuthScreen() {
    // This component will automatically adjust its height, position, or bottom padding 
    // based on the keyboard height to remain visible while the virtual keyboard is displayed.
    // Without `KeyboardAvoidingView` keyboard overlaps the screen view.
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View>
                <Text>Create Account</Text>
                <TextInput
                    label="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="example@example.com" />
            </View>
        </KeyboardAvoidingView>
    );
}
