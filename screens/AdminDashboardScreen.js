// screens/AdminDashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from "../styles";

export default function AdminDashboardScreen({ navigation }) {
    return (
        <View style={[styles.container, localStyles.centeredContainer]}>
            <Text style={styles.title}>Admin Dashboard</Text>
            <CustomButton
                title="Manage Lecturers"
                onPress={() => navigation.navigate('ManageLecturers')}
            />
            <CustomButton
                title="Manage Students"
                onPress={() => navigation.navigate('ManageStudents')}
            />
            <CustomButton
                title="View Attendance"
                onPress={() => navigation.navigate('ViewAttendance', { userType: 'admin' })}
            />
            <CustomButton
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <CustomButton
                title="Logout"
                onPress={() => navigation.replace('Login')}
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