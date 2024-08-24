// // screens/DashboardScreen.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../api';
// import { clearAuth } from '../store';
// import CustomButton from '../components/CustomButton';
// import styles from "../styles";
//
// export default function DashboardScreen({ navigation }) {
//     const user = useSelector(state => state.auth.user);
//     const dispatch = useDispatch();
//
//     const handleLogout = async () => {
//         try {
//             await logout();
//             dispatch(clearAuth());
//             navigation.replace('Login');
//         } catch (error) {
//             console.error('Logout failed', error);
//         }
//     };
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.welcome}>Welcome, {user?.first_name}!</Text>
//             <CustomButton title="Take Attendance" onPress={() => navigation.navigate('Attendance')} />
//             <CustomButton title="Manage Years" onPress={() => navigation.navigate('YearManagement')} />
//             <CustomButton title="Manage Programs" onPress={() => navigation.navigate('ProgramManagement')} />
//             <CustomButton title="Manage Modules" onPress={() => navigation.navigate('ModuleManagement')} />
//             <CustomButton title="Logout" onPress={handleLogout} style={styles.logoutButton} />
//         </View>
//     );
// }
// screens/AdminDashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from "../styles";
import {clearAuth} from "../store";
import {logout} from "../api";
import {useDispatch, useSelector} from "react-redux";

export default function AdminDashboardScreen({ navigation }) {

        const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await logout();
            dispatch(clearAuth());
            navigation.replace('Login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };
    return (
        <View style={[styles.container, localStyles.centeredContainer]}>
            <Text style={styles.title}>Admin Dashboard</Text>
            <CustomButton title="Take Attendance" onPress={() => navigation.navigate('Attendance')} />
            <CustomButton title="Manage Years" onPress={() => navigation.navigate('YearManagement')} />
            <CustomButton title="Manage Programs" onPress={() => navigation.navigate('ProgramManagement')} />
            <CustomButton title="Manage Modules" onPress={() => navigation.navigate('ModuleManagement')} />
            <CustomButton title="Logout" onPress={handleLogout} style={styles.logoutButton} />
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