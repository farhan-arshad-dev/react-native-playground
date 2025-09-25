import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function AuthScreen() {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>("");

    const theme = useTheme(); // custome hook by react-native-paper
    const router = useRouter();

    const { signIn, signUp } = useAuth(); // get custome created hook

    const handleAuth = async () => {
        if (!email || !password) {
            setError("Please fill in al fields");
            return;
        }

        if (password.length < 6) {
            setError("Passwords must be at least 6 charcters long.");
            return;
        }
        setError(null);

        if (isSignUp) {
            const error = await signUp(email, password);
            if (error) {
                setError(error);
                return;
            }
        } else {
            const error = await signIn(email, password);
            if (error) {
                setError(error);
                return;
            }
            router.replace("/");    // redirect to home page.
        }
    }

    const handleSwitchMode = () => {
        setIsSignUp((prev) => !prev);
    }
    // This component will automatically adjust its height, position, or bottom padding 
    // based on the keyboard height to remain visible while the virtual keyboard is displayed.
    // Without `KeyboardAvoidingView` keyboard overlaps the screen view.
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.content}>
            <View>
                <Text style={styles.title}>{isSignUp ? "Create Account" : "Welcome Back"}</Text>
                <TextInput
                    label="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="example@example.com"
                    mode="outlined"
                    style={styles.input}
                    onChangeText={setEmail}
                />

                <TextInput
                    label="Password"
                    autoCapitalize="none"
                    secureTextEntry
                    mode="outlined"
                    style={styles.input}
                    onChangeText={setPassword}
                />

                {error &&
                    (<Text style={{ color: theme.colors.error }}>
                        {error}
                    </Text>)
                }
                <Button mode="contained" style={styles.button} onPress={handleAuth}>
                    {isSignUp ? "Sign Up" : "Sig In"}
                </Button>

                <Button mode="text" onPress={handleSwitchMode} style={styles.switchModeButton}>
                    {isSignUp ?
                        "Already have an account? Sign In" :
                        "Don't have an account? Sign Up"}
                </Button>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 16,
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        marginBottom: 24,
        fontSize: 24
    },
    input: {
        marginBottom: 16
    },
    button: {
        marginTop: 8,
    },
    switchModeButton: {
        marginTop: 16,
    }
})
