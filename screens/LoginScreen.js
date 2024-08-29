import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import styles from '../styles';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useAuth();

    const handleLogin = async () => {
        const success = await login(email, password);
        // if (success) {
        //     // console.log('Login successful, user role:', user.role);
        //     // Redirect to the appropriate screen based on the user role
        //     if (user.role === 'admin') {
        //         navigation.replace('AdminDashboard'); // Replace with admin-specific screen
        //     } else if (user.role === 'lecturer') {
        //         navigation.replace('LecturerDashboard'); // Replace with lecturer-specific screen
        //     } else if (user.role === 'student') {
        //         navigation.replace('StudentDashboard'); // Replace with student-specific screen
        //     } else {
        //         Alert.alert('Login Failed', 'User role not recognized.');
        //     }
        // } else {
        //     Alert.alert('Login Failed', 'Please check your credentials and try again.');
        // }
    };

    return (
        <View style={[styles.container, localStyles.centeredContainer]}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="gray"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="gray"
            />
            <CustomButton title="Login" onPress={handleLogin} />
        </View>
    );
}

const localStyles = StyleSheet.create({
    centeredContainer: {
        justifyContent: 'center',
    },
});

// screens/LoginScreen.js
// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Alert } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { login, setAuthToken } from '../api';
// import { setAuth } from '../store';
// import styles from '../styles';
// import CustomButton from '../components/CustomButton';
//
// export default function LoginScreen({ navigation }) {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const dispatch = useDispatch();
//
//     const handleLogin = async () => {
//         try {
//             const response = await login(username, password);
//             dispatch(setAuth(response.data));
//             setAuthToken(response.data.token);
//             navigation.replace('Dashboard');
//         } catch (error) {
//             Alert.alert('Login Failed', 'Please check your credentials and try again.');
//         }
//     };
//
//     return (
//         <View style={[styles.container, localStyles.centeredContainer]}>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Username"
//                 value={username}
//                 onChangeText={setUsername}
//                 placeholderTextColor="gray"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//                 placeholderTextColor="gray"
//             />
//             <CustomButton title="Login" onPress={handleLogin} />
//         </View>
//     );
// }
//
// const localStyles = StyleSheet.create({
//     centeredContainer: {
//         justifyContent: 'center',
//     },
// });