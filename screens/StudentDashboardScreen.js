// screens/StudentDashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from "../styles";

export default function StudentDashboardScreen({ navigation }) {
    return (
        <View style={[styles.container, localStyles.centeredContainer]}>
            <Text style={styles.title}>Student Dashboard</Text>
            <CustomButton
                title="View Attendance"
                onPress={() => navigation.navigate('ViewAttendance', { userType: 'student' })}
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