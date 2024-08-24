// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import CustomButton from '../components/CustomButton';
import styles from "../styles";

export default function ProfileScreen({ navigation }) {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigation.replace('Login');
    };

    return (
        <View style={[styles.container, localStyles.centeredContainer]}>
            <Text style={styles.title}>Profile</Text>
            <Text style={localStyles.info}>Email: {user.email}</Text>
            <Text style={localStyles.info}>Role: {user.role}</Text>
            <CustomButton title="Logout" onPress={handleLogout} />
        </View>
    );
}

const localStyles = StyleSheet.create({
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
    },
});