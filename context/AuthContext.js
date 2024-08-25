// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
// import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored user data on app start
        checkStoredUser();
    }, []);

    const checkStoredUser = async () => {
        try {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error('Failed to get stored user', error);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        // Dummy authentication
        const dummyUsers = [
            { id: 1, email: 'admin@example.com', password: 'admin123', role: 'admin' },
            { id: 2, email: 'lecturer@example.com', password: 'lecturer123', role: 'lecturer' },
            { id: 3, email: 'student@example.com', password: 'student123', role: 'student' },
        ];

        console.log('Attempting login with:', { email, password });
        const user = dummyUsers.find(u => u.email === email && u.password === password);

        if (user) {
            console.log('User found:', user);
            const { password, ...userWithoutPassword } = user;
            await AsyncStorage.setItem('user', JSON.stringify(userWithoutPassword));
            setUser(userWithoutPassword);
            return true;
        }
        console.log('Login failed: No matching user found');
        return false;
    };

    const logout = async () => {
        await AsyncStorage.removeItem('user');
        setUser(null);
    };

    // const authenticateWithFingerprint = async () => {
    //     const hasHardware = await LocalAuthentication.hasHardwareAsync();
    //     if (!hasHardware) {
    //         throw new Error('Device does not support fingerprint authentication');
    //     }
    //
    //     const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    //     if (!isEnrolled) {
    //         throw new Error('No fingerprints enrolled on this device');
    //     }
    //
    //     const result = await LocalAuthentication.authenticateAsync({
    //         promptMessage: 'Authenticate with fingerprint',
    //         fallbackLabel: 'Use password',
    //     });
    //
    //     return result.success;
    // };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);