
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import LecturerDashboardScreen from './screens/LecturerDashboardScreen';
import StudentDashboardScreen from './screens/StudentDashboardScreen';
import ManageLecturersScreen from './screens/ManageLecturersScreen';
import ManageStudentsScreen from './screens/ManageStudentsScreen';
import ViewAttendanceScreen from './screens/ViewAttendanceScreen';
import TakeAttendanceScreen from './screens/TakeAttendanceScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    const { user, loading } = useAuth();

    if (loading) {
        return null; // or a loading screen
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        {user.role === 'admin' && (
                            <Stack.Screen name="Dashboard" component={AdminDashboardScreen} />
                        )}
                        {user.role === 'lecturer' && (
                            <Stack.Screen name="Dashboard" component={LecturerDashboardScreen} />
                        )}
                        {user.role === 'student' && (
                            <Stack.Screen name="Dashboard" component={StudentDashboardScreen} />
                        )}
                        <Stack.Screen name="ManageLecturers" component={ManageLecturersScreen} />
                        <Stack.Screen name="ManageStudents" component={ManageStudentsScreen} />
                        <Stack.Screen name="ViewAttendance" component={ViewAttendanceScreen} />
                        <Stack.Screen name="TakeAttendance" component={TakeAttendanceScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                    </>
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <AuthProvider>
            <AppNavigator />
        </AuthProvider>
    );
}
// import React from 'react';
// // import type {PropsWithChildren} from 'react';
// // import {
// //   SafeAreaView,
// //   ScrollView,
// //   StatusBar,
// //   StyleSheet,
// //   Text,
// //   useColorScheme,
// //   View,
// // } from 'react-native';
// //
// // import {
// //   Colors,
// //   DebugInstructions,
// //   Header,
// //   LearnMoreLinks,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';
// //
// // type SectionProps = PropsWithChildren<{
// //   title: string;
// // }>;
// //
// // function Section({children, title}: SectionProps): React.JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // }
// //
// // function App(): React.JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';
// //
// //   const backgroundStyle = {
// //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// //   };
// //
// //   return (
// //     <SafeAreaView style={backgroundStyle}>
// //       <StatusBar
// //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
// //         backgroundColor={backgroundStyle.backgroundColor}
// //       />
// //       <ScrollView
// //         contentInsetAdjustmentBehavior="automatic"
// //         style={backgroundStyle}>
// //         <Header />
// //         <View
// //           style={{
// //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// //           }}>
// //           <Section title="Step One">
// //             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
// //             screen and then come back to see your edits.
// //           </Section>
// //           <Section title="See Your Changes">
// //             <ReloadInstructions />
// //           </Section>
// //           <Section title="Debug">
// //             <DebugInstructions />
// //           </Section>
// //           <Section title="Learn More">
// //             Read the docs to discover what to do next:
// //           </Section>
// //           {/*<LearnMoreLinks />*/}
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }
// //
// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });
// //
// // export default App;
// // React Native Frontend for Student Attendance System
//
// // App.js
// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import { Provider } from 'react-redux';
// // import { store } from './store';
// // import LoginScreen from './screens/LoginScreen';
// // import DashboardScreen from './screens/DashboardScreen';
// // import AttendanceScreen from './screens/AttendanceScreen';
// // import YearManagementScreen from './screens/YearManagementScreen';
// // import ProgramManagementScreen from './screens/ProgramManagementScreen';
// // import ModuleManagementScreen from './screens/ModuleManagementScreen';
// //
// // const Stack = createStackNavigator();
// //
// // export default function App() {
// //   return (
// //       <Provider store={store}>
// //         <NavigationContainer>
// //           <Stack.Navigator initialRouteName="Login">
// //             <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
// //             <Stack.Screen name="Dashboard" component={DashboardScreen} />
// //             <Stack.Screen name="Attendance" component={AttendanceScreen} />
// //             <Stack.Screen name="YearManagement" component={YearManagementScreen} />
// //             <Stack.Screen name="ProgramManagement" component={ProgramManagementScreen} />
// //             <Stack.Screen name="ModuleManagement" component={ModuleManagementScreen} />
// //           </Stack.Navigator>
// //         </NavigationContainer>
// //       </Provider>
// //   );
// // }
//
// // App.js (updated with a loading state and auth check)
// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import { store, setAuth } from './store';
// import { setAuthToken } from './api';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import LoginScreen from './screens/LoginScreen';
// import DashboardScreen from './screens/DashboardScreen';
// import AttendanceScreen from './screens/AttendanceScreen';
// import YearManagementScreen from './screens/YearManagementScreen';
// import ProgramManagementScreen from './screens/ProgramManagementScreen';
// import ModuleManagementScreen from './screens/ModuleManagementScreen';
//
// const Stack = createStackNavigator();
//
// function MainNavigator() {
//     const [isLoading, setIsLoading] = useState(true);
//     const token = useSelector(state => state?.auth?.token);
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         const bootstrapAsync = async () => {
//             let userToken;
//             try {
//                 userToken = await AsyncStorage.getItem('userToken');
//                 if (userToken) {
//                     setAuthToken(userToken);
//                     dispatch(setAuth({ token: userToken, user: JSON.parse(await AsyncStorage.getItem('user') as string) }));
//                 }
//             } catch (e) {
//                 // Restoring token failed
//             }
//             setIsLoading(false);
//         };
//
//         bootstrapAsync();
//     }, [dispatch]);
//
//     if (isLoading) {
//         // We haven't finished checking for the token yet
//         return null;
//     }
//
//     return (
//         <Stack.Navigator>
//             {token == null ? (
//                 <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//             ) : (
//                 <>
//                     <Stack.Screen name="Dashboard" component={DashboardScreen} />
//                     <Stack.Screen name="Attendance" component={AttendanceScreen} />
//                     <Stack.Screen name="YearManagement" component={YearManagementScreen} />
//                     <Stack.Screen name="ProgramManagement" component={ProgramManagementScreen} />
//                     <Stack.Screen name="ModuleManagement" component={ModuleManagementScreen} />
//                 </>
//             )}
//         </Stack.Navigator>
//     );
// }
//
// export default function App() {
//     return (
//         <Provider store={store}>
//             <NavigationContainer>
//                 <MainNavigator />
//             </NavigationContainer>
//         </Provider>
//     );
// }