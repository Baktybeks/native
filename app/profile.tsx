import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { View, Text, StyleSheet } from 'react-native';

const Profile =() => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                Profile
            </Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export default Profile

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
