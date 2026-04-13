import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const HomeScreen = () => {
    const [calories, setCalories] = React.useState(0);

    return (
        <View>
            <Text>Calorie Tracker</Text>
            <TextInput
                placeholder="Enter calories"
                keyboardType="numeric"
                onChangeText={text => setCalories(parseInt(text))}
            />
            <Text>Total calories: {calories}</Text>
            <Button title="Submit" onPress={() => alert(`Calories recorded: ${calories}`)} />
        </View>
    );
};

export default HomeScreen;