// screens/LecturerDashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from "../styles";

export default function LecturerDashboardScreen({ navigation }) {
    return (
        <View style={[styles.container, localStyles.centeredContainer]}>
            <Text style={styles.title}>Lecturer Dashboard</Text>
            <CustomButton
                title="Take Attendance"
                onPress={() => navigation.navigate('TakeAttendance')}
            />
            <CustomButton
                title="View Attendance"
                onPress={() => navigation.navigate('ViewAttendance', { userType: 'lecturer' })}
            />
            <CustomButton
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <CustomButton
                title="Logout"
                onPress={() => {
                    // Implement logout functionality
                    navigation.replace('Login');
                }}
            />
        </View>
    );
}

const localStyles = StyleSheet.create({
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});