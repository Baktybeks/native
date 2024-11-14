import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { View, Text, StyleSheet } from 'react-native';
import { Slot, Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{headerShown: false}}/>
            <Slot/>
        </Stack>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'red'
    }
});
