import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                BISEB
            </Text>
            <StatusBar style="auto"/>
            <Link href='/profile' style={{ color: 'blue'}}>Go to Profile</Link>
        </View>
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
