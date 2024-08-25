// // screens/ManageLecturersScreen.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TextInput, StyleSheet, Alert } from 'react-native';
// import { getLecturers, createLecturer, updateLecturer, deleteLecturer } from '../api';
// import CustomButton from '../components/CustomButton';
// import Toast from 'react-native-toast-message';
// import styles from "../styles";
//
// export default function ManageLecturersScreen() {
//     const [lecturers, setLecturers] = useState([]);
//     const [newLecturerName, setNewLecturerName] = useState('');
//     const [newLecturerEmail, setNewLecturerEmail] = useState('');
//
//     useEffect(() => {
//         fetchLecturers();
//     }, []);
//
//     const fetchLecturers = async () => {
//         try {
//             const response = await getLecturers();
//             setLecturers(response.data);
//         } catch (error) {
//             console.error('Failed to fetch lecturers', error);
//             Toast.show({
//                 type: 'error',
//                 text1: 'Error',
//                 text2: 'Failed to fetch lecturers. Please try again.'
//             });
//         }
//     };
//
//     const handleCreateLecturer = async () => {
//         try {
//             await createLecturer({ name: newLecturerName, email: newLecturerEmail });
//             setNewLecturerName('');
//             setNewLecturerEmail('');
//             fetchLecturers();
//             Toast.show({
//                 type: 'success',
//                 text1: 'Success',
//                 text2: 'Lecturer created successfully.'
//             });
//         } catch (error) {
//             console.error('Failed to create lecturer', error);
//             Toast.show({
//                 type: 'error',
//                 text1: 'Error',
//                 text2: 'Failed to create lecturer. Please try again.'
//             });
//         }
//     };
//
//     const handleUpdateLecturer = async (id, updatedLecturer) => {
//         try {
//             await updateLecturer(id, updatedLecturer);
//             fetchLecturers();
//             Toast.show({
//                 type: 'success',
//                 text1: 'Success',
//                 text2: 'Lecturer updated successfully.'
//             });
//         } catch (error) {
//             console.error('Failed to update lecturer', error);
//             Toast.show({
//                 type: 'error',
//                 text1: 'Error',
//                 text2: 'Failed to update lecturer. Please try again.'
//             });
//         }
//     };
//
//     const handleDeleteLecturer = async (id) => {
//         try {
//             await deleteLecturer(id);
//             fetchLecturers();
//             Toast.show({
//                 type: 'success',
//                 text1: 'Success',
//                 text2: 'Lecturer deleted successfully.'
//             });
//         } catch (error) {
//             console.error('Failed to delete lecturer', error);
//             Toast.show({
//                 type: 'error',
//                 text1: 'Error',
//                 text2: 'Failed to delete lecturer. Please try again.'
//             });
//         }
//     };
//
//     return (
//         <View style={[styles.container, localStyles.centeredContainer]}>
//             <Text style={styles.title}>Manage Lecturers</Text>
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Lecturer Name"
//                     value={newLecturerName}
//                     onChangeText={setNewLecturerName}
//                     placeholderTextColor="gray"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Lecturer Email"
//                     value={newLecturerEmail}
//                     onChangeText={setNewLecturerEmail}
//                     placeholderTextColor="gray"
//                     keyboardType="email-address"
//                 />
//                 <CustomButton title="Add Lecturer" onPress={handleCreateLecturer} />
//             </View>
//             <FlatList
//                 data={lecturers}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.itemContainer}>
//                         <Text style={styles.itemName}>{item.name}</Text>
//                         <Text style={styles.itemEmail}>{item.email}</Text>
//                         <CustomButton title="Edit" onPress={() => {
//                             // Implement edit functionality
//                             Alert.alert('Edit', 'Edit functionality to be implemented');
//                         }} />
//                         <CustomButton title="Delete" onPress={() => handleDeleteLecturer(item.id)} />
//                     </View>
//                 )}
//             />
//         </View>
//     );
// }
//
// const localStyles = StyleSheet.create({
//     centeredContainer: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     itemEmail: {
//         fontSize: 14,
//         color: 'gray',
//     },
// });

// screens/LecturerManagementScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Alert } from 'react-native';
import { getLecturers, createLecturer, updateLecturer, deleteLecturer } from '../api';
import CustomButton from '../components/CustomButton';
import styles from "../styles";

export default function LecturerManagementScreen() {
    const [lecturers, setLecturers] = useState([]);
    const [newLecturer, setNewLecturer] = useState({ first_name: '', last_name: '', staff_id: '' });

    useEffect(() => {
        fetchLecturers();
    }, []);

    const fetchLecturers = async () => {
        try {
            const response = await getLecturers();
            setLecturers(response.data);
        } catch (error) {
            console.error('Failed to fetch lecturers', error);
            Alert.alert('Error', 'Failed to fetch lecturers. Please try again.');
        }
    };

    const handleCreateLecturer = async () => {
        try {
            await createLecturer(newLecturer);
            setNewLecturer({ first_name: '', last_name: '', staff_id: '' });
            fetchLecturers();
        } catch (error) {
            console.error('Failed to create lecturer', error);
            Alert.alert('Error', 'Failed to create lecturer. Please try again.');
        }
    };

    const handleUpdateLecturer = async (id, updatedLecturer) => {
        try {
            await updateLecturer(id, updatedLecturer);
            fetchLecturers();
        } catch (error) {
            console.error('Failed to update lecturer', error);
            Alert.alert('Error', 'Failed to update lecturer. Please try again.');
        }
    };

    const handleDeleteLecturer = async (id) => {
        try {
            await deleteLecturer(id);
            fetchLecturers();
        } catch (error) {
            console.error('Failed to delete lecturer', error);
            Alert.alert('Error', 'Failed to delete lecturer. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lecturer Management</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={newLecturer.first_name}
                    onChangeText={(text) => setNewLecturer({...newLecturer, first_name: text})}
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={newLecturer.last_name}
                    onChangeText={(text) => setNewLecturer({...newLecturer, last_name: text})}
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Staff ID"
                    value={newLecturer.staff_id}
                    onChangeText={(text) => setNewLecturer({...newLecturer, staff_id: text})}
                    placeholderTextColor="gray"
                />
                <CustomButton title="Add Lecturer" onPress={handleCreateLecturer} />
            </View>
            <FlatList
                data={lecturers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{`${item.user.first_name} ${item.user.last_name}`}</Text>
                        <Text style={styles.itemDetails}>{`Staff ID: ${item.staff_id}`}</Text>
                        <CustomButton title="Update" onPress={() => handleUpdateLecturer(item.id, item)} />
                        <CustomButton title="Delete" onPress={() => handleDeleteLecturer(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}
