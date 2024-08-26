import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { getProfile, updateProfile } from '../api';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "../styles";

export default function ProfileScreen() {
    const [profile, setProfile] = useState(null);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await getProfile();
            setProfile(response.data);
        } catch (error) {
            console.error('Failed to fetch profile', error);
            Alert.alert('Error', 'Failed to fetch profile. Please try again.');
        }
    };

    const handleUpdateProfile = async () => {
        try {
            const updatedProfile = {
                ...profile,
                old_password: oldPassword,
                new_password: newPassword,
            };
            await updateProfile(updatedProfile);
            Alert.alert('Success', 'Profile updated successfully.');
            setOldPassword('');
            setNewPassword('');
        } catch (error) {
            console.error('Failed to update profile', error);
            Alert.alert('Error', 'Failed to update profile. Please try again.');
        }
    };

    if (!profile) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={profile.username}
                    onChangeText={(text) => setProfile({...profile, username: text})}
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={profile.email}
                    onChangeText={(text) => setProfile({...profile, email: text})}
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={profile.first_name}
                    onChangeText={(text) => setProfile({...profile, first_name: text})}
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={profile.last_name}
                    onChangeText={(text) => setProfile({...profile, last_name: text})}
                    placeholderTextColor="gray"
                />
                {/*<View style={localStyles.passwordContainer}>*/}
                    <TextInput
                        style={[styles.input]}
                        placeholder="Old Password"
                        value={oldPassword}
                        onChangeText={setOldPassword}
                        secureTextEntry={!showOldPassword}
                        placeholderTextColor="gray"
                    />
                {/*    <TouchableOpacity onPress={() => setShowOldPassword(!showOldPassword)} style={localStyles.iconContainer}>*/}
                {/*        <Icon name={showOldPassword ? 'eye-off' : 'eye'} size={24} color="gray" />*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}
                {/*<View style={localStyles.passwordContainer}>*/}
                    <TextInput
                        style={[styles.input]}
                        placeholder="New Password"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={!showNewPassword}
                        placeholderTextColor="gray"
                    />
                    {/*<TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)} style={localStyles.iconContainer}>*/}
                    {/*    <Icon name={showNewPassword ? 'eye-off' : 'eye'} size={24} color="gray" />*/}
                    {/*</TouchableOpacity>*/}
                {/*</View>*/}
                <CustomButton title="Update Profile" onPress={handleUpdateProfile} />
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    passwordInput: {
        flex: 1,
        borderRadius: 5,
    },
    iconContainer: {
        paddingHorizontal: 10,
    },
});

// // screens/ProfileScreen.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Alert } from 'react-native';
// import { getProfile, updateProfile } from '../api';
// import CustomButton from '../components/CustomButton';
// import styles from "../styles";
//
// export default function ProfileScreen() {
//     const [profile, setProfile] = useState(null);
//
//     useEffect(() => {
//         fetchProfile();
//     }, []);
//
//     const fetchProfile = async () => {
//         try {
//             const response = await getProfile();
//             setProfile(response.data);
//         } catch (error) {
//             console.error('Failed to fetch profile', error);
//             Alert.alert('Error', 'Failed to fetch profile. Please try again.');
//         }
//     };
//
//     const handleUpdateProfile = async () => {
//         try {
//             await updateProfile(profile);
//             Alert.alert('Success', 'Profile updated successfully.');
//         } catch (error) {
//             console.error('Failed to update profile', error);
//             Alert.alert('Error', 'Failed to update profile. Please try again.');
//         }
//     };
//
//     if (!profile) {
//         return <Text>Loading...</Text>;
//     }
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Profile</Text>
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Username"
//                     value={profile.username}
//                     onChangeText={(text) => setProfile({...profile, username: text})}
//                     placeholderTextColor="gray"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Email"
//                     value={profile.email}
//                     onChangeText={(text) => setProfile({...profile, email: text})}
//                     placeholderTextColor="gray"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="First Name"
//                     value={profile.first_name}
//                     onChangeText={(text) => setProfile({...profile, first_name: text})}
//                     placeholderTextColor="gray"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Last Name"
//                     value={profile.last_name}
//                     onChangeText={(text) => setProfile({...profile, last_name: text})}
//                     placeholderTextColor="gray"
//                 />
//                 <CustomButton title="Update Profile" onPress={handleUpdateProfile} />
//             </View>
//         </View>
//     );
// }

// // screens/ProfileScreen.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { useAuth } from '../context/AuthContext';
// import CustomButton from '../components/CustomButton';
// import styles from "../styles";
//
// export default function ProfileScreen({ navigation }) {
//     const { user, logout } = useAuth();
//
//     const handleLogout = async () => {
//         await logout();
//         navigation.replace('Login');
//     };
//
//     return (
//         <View style={[styles.container, localStyles.centeredContainer]}>
//             <Text style={styles.title}>Profile</Text>
//             <Text style={localStyles?.info}>Email: {user?.email}</Text>
//             <Text style={localStyles?.info}>Role: {user?.role}</Text>
//             <CustomButton title="Logout" onPress={handleLogout} />
//         </View>
//     );
// }
//
// const localStyles = StyleSheet.create({
//     centeredContainer: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     info: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
// });