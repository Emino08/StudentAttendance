// screens/YearManagementScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Alert } from 'react-native';
import { getYears, createYear, updateYear, deleteYear } from '../api';
import CustomButton from '../components/CustomButton';
import styles from "../styles";

export default function YearManagementScreen() {
    const [years, setYears] = useState([]);
    const [newYear, setNewYear] = useState('');

    useEffect(() => {
        fetchYears();
    }, []);

    const fetchYears = async () => {
        try {
            const response = await getYears();
            setYears(response.data);
        } catch (error) {
            console.error('Failed to fetch years', error);
            Alert.alert('Error', 'Failed to fetch years. Please try again.');
        }
    };

    const handleCreateYear = async () => {
        try {
            await createYear({ year: parseInt(newYear), is_current: false });
            setNewYear('');
            fetchYears();
        } catch (error) {
            console.error('Failed to create year', error);
            Alert.alert('Error', 'Failed to create year. Please try again.');
        }
    };

    const handleUpdateYear = async (id, updatedYear) => {
        try {
            await updateYear(id, updatedYear);
            fetchYears();
        } catch (error) {
            console.error('Failed to update year', error);
            Alert.alert('Error', 'Failed to update year. Please try again.');
        }
    };

    const handleDeleteYear = async (id) => {
        try {
            await deleteYear(id);
            fetchYears();
        } catch (error) {
            console.error('Failed to delete year', error);
            Alert.alert('Error', 'Failed to delete year. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Year Management</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="New Year"
                    value={newYear}
                    onChangeText={setNewYear}
                    keyboardType="numeric"
                    placeholderTextColor="gray"
                />
                <CustomButton title="Add Year" onPress={handleCreateYear} />
            </View>
            <FlatList
                data={years}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.year}</Text>
                        <CustomButton title="Set Current" onPress={() => handleUpdateYear(item.id, { ...item, is_current: true })} />
                        <CustomButton title="Delete" onPress={() => handleDeleteYear(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}

// // screens/YearManagementScreen.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TextInput, Alert } from 'react-native';
// import { getYears, createYear, updateYear, deleteYear } from '../api';
// import CustomButton from '../components/CustomButton';
// import styles from "../styles";
//
// export default function YearManagementScreen() {
//     const [years, setYears] = useState([]);
//     const [newYear, setNewYear] = useState('');
//
//     useEffect(() => {
//         fetchYears();
//     }, []);
//
//     const fetchYears = async () => {
//         try {
//             const response = await getYears();
//             setYears(response.data);
//         } catch (error) {
//             console.error('Failed to fetch years', error);
//             Alert.alert('Error', 'Failed to fetch years. Please try again.');
//         }
//     };
//
//     const handleCreateYear = async () => {
//         try {
//             await createYear({ year: parseInt(newYear), is_current: false });
//             setNewYear('');
//             fetchYears();
//         } catch (error) {
//             console.error('Failed to create year', error);
//             Alert.alert('Error', 'Failed to create year. Please try again.');
//         }
//     };
//
//     const handleUpdateYear = async (id, updatedYear) => {
//         try {
//             await updateYear(id, updatedYear);
//             fetchYears();
//         } catch (error) {
//             console.error('Failed to update year', error);
//             Alert.alert('Error', 'Failed to update year. Please try again.');
//         }
//     };
//
//     const handleDeleteYear = async (id) => {
//         try {
//             await deleteYear(id);
//             fetchYears();
//         } catch (error) {
//             console.error('Failed to delete year', error);
//             Alert.alert('Error', 'Failed to delete year. Please try again.');
//         }
//     };
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Year Management</Text>
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="New Year"
//                     value={newYear}
//                     onChangeText={setNewYear}
//                     keyboardType="numeric"
//                     placeholderTextColor="gray"
//                 />
//                 <CustomButton title="Add Year" onPress={handleCreateYear} />
//             </View>
//             <FlatList
//                 data={years}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.itemContainer}>
//                         <Text style={styles.itemName}>{item.year}</Text>
//                         <CustomButton title="Set Current" onPress={() => handleUpdateYear(item.id, { ...item, is_current: true })} />
//                         <CustomButton title="Delete" onPress={() => handleDeleteYear(item.id)} />
//                     </View>
//                 )}
//             />
//         </View>
//     );
// }