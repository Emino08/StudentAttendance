// screens/ManageStudentsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, Alert } from 'react-native';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../api';
import CustomButton from '../components/CustomButton';
import Toast from 'react-native-toast-message';
import styles from "../styles";

export default function ManageStudentsScreen() {
    const [students, setStudents] = useState([]);
    const [newStudentName, setNewStudentName] = useState('');
    const [newStudentEmail, setNewStudentEmail] = useState('');
    const [newStudentProgram, setNewStudentProgram] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await getStudents();
            setStudents(response.data);
        } catch (error) {
            console.error('Failed to fetch students', error);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Failed to fetch students. Please try again.'
            });
        }
    };

    const handleCreateStudent = async () => {
        try {
            await createStudent({ name: newStudentName, email: newStudentEmail, program: newStudentProgram });
            setNewStudentName('');
            setNewStudentEmail('');
            setNewStudentProgram('');
            fetchStudents();
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'Student created successfully.'
            });
        } catch (error) {
            console.error('Failed to create student', error);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Failed to create student. Please try again.'
            });
        }
    };

    const handleUpdateStudent = async (id, updatedStudent) => {
        try {
            await updateStudent(id, updatedStudent);
            fetchStudents();
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'Student updated successfully.'
            });
        } catch (error) {
            console.error('Failed to update student', error);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Failed to update student. Please try again.'
            });
        }
    };

    const handleDeleteStudent = async (id) => {
        try {
            await deleteStudent(id);
            fetchStudents();
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'Student deleted successfully.'
            });
        } catch (error) {
            console.error('Failed to delete student', error);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Failed to delete student. Please try again.'
            });
        }
    };

    return (
        <View style={[styles.container, localStyles.centeredContainer]}>
            <Text style={styles.title}>Manage Students</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Student Name"
                    value={newStudentName}
                    onChangeText={setNewStudentName}
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Student Email"
                    value={newStudentEmail}
                    onChangeText={setNewStudentEmail}
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Program"
                    value={newStudentProgram}
                    onChangeText={setNewStudentProgram}
                    placeholderTextColor="gray"
                />
                <CustomButton title="Add Student" onPress={handleCreateStudent} />
            </View>
            <FlatList
                data={students}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemEmail}>{item.email}</Text>
                        <Text style={styles.itemProgram}>{item.program}</Text>
                        <CustomButton title="Edit" onPress={() => {
                            // Implement edit functionality
                            Alert.alert('Edit', 'Edit functionality to be implemented');
                        }} />
                        <CustomButton title="Delete" onPress={() => handleDeleteStudent(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}

const localStyles = StyleSheet.create({
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemEmail: {
        fontSize: 14,
        color: 'gray',
    },
    itemProgram: {
        fontSize: 14,
        color: 'blue',
    },
});