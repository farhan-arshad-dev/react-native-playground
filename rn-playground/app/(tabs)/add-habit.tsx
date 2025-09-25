import { DATABASE_ID, databases, HABITS_COLLECTION_ID } from "@/lib/appwrite";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ID } from "react-native-appwrite";
import { Button, SegmentedButtons, Text, TextInput, useTheme } from "react-native-paper";

const FREQUENCIES = ['daily', 'weekly', 'monthly'];
type Frequency = (typeof FREQUENCIES)[number]       // type Frequency = "daily" | "weekly" | "monthly";

// A common pattern is to represent each distinct screen or page of your application with a separate file.
export default function AddHabitScreen() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [frequency, setFrequency] = useState<string>("daily");

    const [error, setError] = useState<string>("");

    const { user } = useAuth();     // returns object cuz AuthContext is the object type
    const router = useRouter();
    const theme = useTheme();

    const handleSubmit = async () => {
        if (!user) return;

        try {
            await databases.createDocument({
                databaseId: DATABASE_ID,
                collectionId: HABITS_COLLECTION_ID,
                documentId: ID.unique(),
                data: {
                    user_id: user.$id,
                    title: title,
                    description: description,
                    frequency: frequency,
                    streak_count: 0,
                    last_completed: new Date().toISOString(),
                    $createdAt: new Date().toISOString(),
                }
            })
            router.back();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
                return;
            }
            setError("There was an error while creating a habit")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput label="Title" mode="outlined" style={styles.input}
                onChangeText={setTitle}
            />
            <TextInput label="Descriptiopn" mode="outlined" style={styles.input}
                onChangeText={setDescription}
            />
            <View style={styles.frequencyContainer}>
                <SegmentedButtons
                    value={frequency}
                    onValueChange={(value) => setFrequency(value as Frequency)}
                    buttons={FREQUENCIES.map((freq) => (
                        {
                            value: freq,
                            label: freq.charAt(0).toUpperCase() + freq.slice(1)
                        }
                    ))}
                />
            </View>
            <Button
                mode="contained"
                disabled={!title || !description}
                onPress={handleSubmit}
            >Add Habit
            </Button>
            {error &&
                (<Text style={{ color: theme.colors.error }}>
                    {error}
                </Text>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
        justifyContent: "center"
    },
    input: {
        marginBottom: 16
    },

    frequencyContainer: {
        marginBottom: 16
    }
})
