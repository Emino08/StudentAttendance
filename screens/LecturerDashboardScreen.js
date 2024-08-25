// screens/LecturerDashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from "../styles";
import {logout} from "../api";

export default function LecturerDashboardScreen({ navigation }) {
    const handleLogout = async () => {
        await logout(); // Perform logout
        navigation.navigate('LoginScreen'); // Navigate to login screen
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lecturer Dashboard</Text>
            <CustomButton
                title="Take Attendance"
                onPress={() => navigation.navigate('LecturerTakeAttendanceScreen')}
                // onPress={() => navigation.navigate('TakeAttendance')}
            />
            <CustomButton
                title="View Attendance"
                onPress={() => navigation.navigate('LecturerViewAttendanceScreen', { userType: 'lecturer' })}
            />
            <CustomButton
                title="Profile"
                onPress={() => navigation.navigate('ProfileScreen')}
            />
            <CustomButton
                title="Logout"
                onPress={handleLogout}
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