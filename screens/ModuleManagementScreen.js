// screens/ModuleManagementScreen.js (continued)
import CustomButton from "../components/CustomButton";
import {useEffect, useState} from "react";
import {createModule, deleteModule, getPrograms, getYears, updateModule} from "../api";
import {Alert, FlatList, TextInput, Text, View} from "react-native";
import styles from '../styles';
import {Picker} from '@react-native-picker/picker';
import {getModules} from "../api";

export default function ModuleManagementScreen() {
    const [modules, setModules] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [years, setYears] = useState([]);
    const [newModuleName, setNewModuleName] = useState('');
    const [newModuleDescription, setNewModuleDescription] = useState('');
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(() => {
        fetchModules();
        fetchPrograms();
        fetchYears();
    }, []);

    const fetchModules = async () => {
        try {
            const response = await getModules();
            setModules(response.data);
        } catch (error) {
            console.error('Failed to fetch modules', error);
            Alert.alert('Error', 'Failed to fetch modules. Please try again.');
        }
    };

    const fetchPrograms = async () => {
        try {
            const response = await getPrograms();
            setPrograms(response.data);
        } catch (error) {
            console.error('Failed to fetch programs', error);
            Alert.alert('Error', 'Failed to fetch programs. Please try again.');
        }
    };

    const fetchYears = async () => {
        try {
            const response = await getYears();
            setYears(response.data);
        } catch (error) {
            console.error('Failed to fetch years', error);
            Alert.alert('Error', 'Failed to fetch years. Please try again.');
        }
    };

    const handleCreateModule = async () => {
        try {
            await createModule({
                name: newModuleName,
                description: newModuleDescription,
                program: selectedProgram,
                year: selectedYear,
            });
            setNewModuleName('');
            setNewModuleDescription('');
            setSelectedProgram('');
            setSelectedYear('');
            fetchModules();
        } catch (error) {
            console.error('Failed to create module', error);
            Alert.alert('Error', 'Failed to create module. Please try again.');
        }
    };

    const handleUpdateModule = async (id, updatedModule) => {
        try {
            await updateModule(id, updatedModule);
            fetchModules();
        } catch (error) {
            console.error('Failed to update module', error);
            Alert.alert('Error', 'Failed to update module. Please try again.');
        }
    };

    const handleDeleteModule = async (id) => {
        try {
            await deleteModule(id);
            fetchModules();
        } catch (error) {
            console.error('Failed to delete module', error);
            Alert.alert('Error', 'Failed to delete module. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Module Management</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Module Name"
                    value={newModuleName}
                    onChangeText={setNewModuleName}
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Module Description"
                    value={newModuleDescription}
                    onChangeText={setNewModuleDescription}
                    multiline
                    placeholderTextColor={"gray"}
                />
                <Picker
                    selectedValue={selectedProgram}
                    onValueChange={(itemValue) => setSelectedProgram(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Program" value="" />
                    {programs.map((program) => (
                        <Picker.Item key={program.id} label={program.name} value={program.id} />
                    ))}
                </Picker>
                <Picker
                    selectedValue={selectedYear}
                    onValueChange={(itemValue) => setSelectedYear(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Year" value="" />
                    {years.map((year) => (
                        <Picker.Item key={year.id} label={year.year.toString()} value={year.id} />
                    ))}
                </Picker>
                <CustomButton title="Add Module" onPress={handleCreateModule} />
            </View>
            <FlatList
                data={modules}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.moduleItem}>
                        <Text style={styles.moduleName}>{item.name}</Text>
                        <Text style={styles.moduleDescription}>{item.description}</Text>
                        <CustomButton title="Edit" onPress={() => {/* Implement edit functionality */}} />
                        <CustomButton title="Delete" onPress={() => handleDeleteModule(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}
