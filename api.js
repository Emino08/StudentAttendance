// // api.js
// import axios from 'axios';
//
// const API_URL = 'http://your-api-url.com/api/';
//
// const api = axios.create({
//     baseURL: API_URL,
// });
//
// export const setAuthToken = (token) => {
//     if (token) {
//         api.defaults.headers.common['Authorization'] = `Token ${token}`;
//     } else {
//         delete api.defaults.headers.common['Authorization'];
//     }
// };
//
// export const login = (username, password) => api.post('login/', { username, password });
// export const logout = () => api.post('logout/');
//
// export const getYears = () => api.get('years/');
// export const createYear = (year) => api.post('years/', year);
// export const updateYear = (id, year) => api.put(`years/${id}/`, year);
// export const deleteYear = (id) => api.delete(`years/${id}/`);
//
// export const getPrograms = () => api.get('programs/');
// export const createProgram = (program) => api.post('programs/', program);
// export const updateProgram = (id, program) => api.put(`programs/${id}/`, program);
// export const deleteProgram = (id) => api.delete(`programs/${id}/`);
//
// export const getModules = () => api.get('modules/');
// export const createModule = (module) => api.post('modules/', module);
// export const updateModule = (id, module) => api.put(`modules/${id}/`, module);
// export const deleteModule = (id) => api.delete(`modules/${id}/`);
//
// export const getStudents = () => api.get('students/');
// export const getLecturers = () => api.get('lecturers/');
//
// export const markStudentAttendance = (attendanceData) => api.post('student-attendance/mark_attendance/', attendanceData);
// export const markLecturerAttendance = (attendanceData) => api.post('lecturer-attendance/mark_attendance/', attendanceData);

// api.js
import axios from 'axios';

const API_URL = 'http://your-api-url.com/api/';

const api = axios.create({
    baseURL: API_URL,
});

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Token ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export const login = async (username, password) => {
    // Dummy login response
    return {
        data: {
            token: 'dummy_token',
            user_id: 1,
            email: 'user@example.com',
            role: 'admin',
        },
    };
};

export const logout = async () => {
    // Dummy logout response
    return { data: { detail: 'Successfully logged out.' } };
};


export const deleteStudent = async (id) => {
    // Dummy delete student response
    return { data: {} };

}

export const updateStudent = async (id, student) => {
    // Dummy update student response
    return {
        data: {
            id,
            user: { first_name: student.user.first_name, last_name: student.user.last_name },
            student_id: student.student_id,
            program: student.program,
            year: student.year,
        },
        }
    }

export const createStudent = async (student) => {


    // Dummy create student response
    return {
        data: {
            id: 3,
            user: { first_name: student.user.first_name, last_name: student.user.last_name },
            student_id: student.student_id,
            program: student.program,
            year: student.year,
        },
    };


}
export const getYears = async () => {
    // Dummy years response
    return {
        data: [
            { id: 1, year: 2022, is_current: true },
            { id: 2, year: 2023, is_current: false },
            { id: 3, year: 2024, is_current: false },
        ],
    };
};

export const createYear = async (year) => {
    // Dummy create year response
    return {
        data: { id: 4, year: year.year, is_current: year.is_current },
    };
};

export const updateYear = async (id, year) => {
    // Dummy update year response
    return {
        data: { id, year: year.year, is_current: year.is_current },
    };
};

export const deleteYear = async (id) => {
    // Dummy delete year response
    return { data: {} };
};

export const getPrograms = async () => {
    // Dummy programs response
    return {
        data: [
            { id: 1, name: 'Computer Science', description: 'Bachelor of Science in Computer Science' },
            { id: 2, name: 'Business Administration', description: 'Bachelor of Business Administration' },
        ],
    };
};

export const createProgram = async (program) => {
    // Dummy create program response
    return {
        data: { id: 3, name: program.name, description: program.description },
    };
};

export const updateProgram = async (id, program) => {
    // Dummy update program response
    return {
        data: { id, name: program.name, description: program.description },
    };
};

export const deleteProgram = async (id) => {
    // Dummy delete program response
    return { data: {} };
};

export const getAttendance = async (student_id, year_id) => {
    // Dummy attendance response
    return {
        data: [
            {
                id: 1,
                student: student_id,
                module: 1,
                year: year_id,
                date: '2023-01-01',
                status: 'present',
            },
            {
                id: 2,
                student: student_id,
                module: 2,
                year: year_id,
                date: '2023-01-02',
                status: 'absent',
            },
        ],
    };
}

export const getModules = async () => {
    // Dummy modules response
    return {
        data: [
            { id: 1, name: 'Introduction to Programming', description: 'Fundamentals of programming', program: 1, year: 1 },
            { id: 2, name: 'Database Systems', description: 'Relational database design and management', program: 1, year: 2 },
            { id: 3, name: 'Marketing Principles', description: 'Principles of marketing', program: 2, year: 1 },
        ],
    };
};

export const updateLecturer = async (id, lecturer) => {
    // Dummy update lecturer response
    return {
        data: {
            id,
            user: { first_name: lecturer.user.first_name, last_name: lecturer.user.last_name },
            staff_id: lecturer.staff_id,
        },
    };
};


export const deleteLecturer = async (id) => {
    // Dummy delete lecturer response
    return { data: {} };
};


export const createLecturer = async (lecturer) => {
    // Dummy create lecturer response
    return {
        data: {
            id: 3,
            user: { first_name: lecturer.user.first_name, last_name: lecturer.user.last_name },
            staff_id: lecturer.staff_id,
        },
    };
};



export const saveAttendance = async (attendanceData) => {
    // Dummy save attendance response
    return { data: { message: 'Attendance saved successfully.' } };
};



export const createModule = async (module) => {
    // Dummy create module response
    return {
        data: {
            id: 4,
            name: module.name,
            description: module.description,
            program: module.program,
            year: module.year,
        },
    };
};

export const updateModule = async (id, module) => {
    // Dummy update module response
    return {
        data: {
            id,
            name: module.name,
            description: module.description,
            program: module.program,
            year: module.year,
        },
    };
};

export const deleteModule = async (id) => {
    // Dummy delete module response
    return { data: {} };
};

export const getStudents = async () => {
    // Dummy students response
    return {
        data: [
            {
                id: 1,
                user: { first_name: 'John', last_name: 'Doe' },
                student_id: 'S001',
                program: 1,
                year: 2,
            },
            {
                id: 2,
                user: { first_name: 'Jane', last_name: 'Smith' },
                student_id: 'S002',
                program: 1,
                year: 1,
            },
        ],
    };
};

export const getLecturers = async () => {
    // Dummy lecturers response
    return {
        data: [
            {
                id: 1,
                user: { first_name: 'Professor', last_name: 'Oak' },
                staff_id: 'L001',
            },
            {
                id: 2,
                user: { first_name: 'Dr.', last_name: 'Elm' },
                staff_id: 'L002',
            },
        ],
    };
};

export const markStudentAttendance = async (attendanceData) => {
    // Dummy mark student attendance response
    return {
        data: {
            id: 1,
            student: attendanceData.student,
            module: attendanceData.module,
            year: attendanceData.year,
            date: attendanceData.date,
            status: attendanceData.status,
        },
    };
};

export const markLecturerAttendance = async (attendanceData) => {
    // Dummy mark lecturer attendance response
    return {
        data: {
            id: 1,
            lecturer: attendanceData.lecturer,
            module: attendanceData.module,
            year: attendanceData.year,
            date: attendanceData.date,
            status: attendanceData.status,
        },
    };

};

// New functions for lecturer management
// export const getLecturers = async () => {
//     return {
//         data: [
//             { id: 1, user: { first_name: 'John', last_name: 'Doe' }, staff_id: 'L001' },
//             { id: 2, user: { first_name: 'Jane', last_name: 'Smith' }, staff_id: 'L002' },
//         ],
//     };
// };

// export const createLecturer = async (lecturer) => {
//     return {
//         data: {
//             id: 3,
//             user: { first_name: lecturer.first_name, last_name: lecturer.last_name },
//             staff_id: lecturer.staff_id,
//         },
//     };
// };

// export const updateLecturer = async (id, lecturer) => {
//     return {
//         data: {
//             id,
//             user: { first_name: lecturer.first_name, last_name: lecturer.last_name },
//             staff_id: lecturer.staff_id,
//         },
//     };
// };

// export const deleteLecturer = async (id) => {
//     return { data: {} };
// };

// Function for profile
export const getProfile = async () => {
    return {
        data: {
            id: 1,
            username: 'johndoe',
            email: 'johndoe@example.com',
            first_name: 'John',
            last_name: 'Doe',
            role: 'lecturer',
        },
    };
};

export const updateProfile = async (profile) => {
    return {
        data: {
            id: 1,
            username: profile.username,
            email: profile.email,
            first_name: profile.first_name,
            last_name: profile.last_name,
            role: 'lecturer',
        },
    };
};

// Functions for student attendance view
export const getStudentAttendance = async (studentId) => {
    return {
        data: [
            { id: 1, module: 'Mathematics', present: 10, absent: 2 },
            { id: 2, module: 'Physics', present: 8, absent: 4 },
        ],
    };
};

export const getStudentAttendanceDetails = async (studentId, moduleId) => {
    return {
        data: [
            { id: 1, date: '2023-08-01', status: 'present' },
            { id: 2, date: '2023-08-02', status: 'absent' },
            { id: 3, date: '2023-08-03', status: 'present' },
        ],
    };
};

// Functions for lecturer attendance view
export const getLecturerModules = async (lecturerId) => {
    return {
        data: [
            { id: 1, name: 'Mathematics' },
            { id: 2, name: 'Physics' },
        ],
    };
};

export const getLecturerAttendance = async (lecturerId, moduleId) => {
    return {
        data: [
            { id: 1, student: 'Alice Johnson', present: 10, absent: 2 },
            { id: 2, student: 'Bob Smith', present: 8, absent: 4 },
        ],
    };
};

export const getLecturerAttendanceDetails = async (lecturerId, moduleId, studentId) => {
    return {
        data: [
            { id: 1, date: '2023-08-01', status: 'present' },
            { id: 2, date: '2023-08-02', status: 'absent' },
            { id: 3, date: '2023-08-03', status: 'present' },
        ],
    };
};

// Function for lecturer to take attendance
export const takeAttendance = async (moduleId, attendanceData) => {
    return {
        data: { message: 'Attendance saved successfully' },
    };
};

// Function to get programs (for lecturer view attendance)
// export const getPrograms = async () => {
//     return {
//         data: [
//             { id: 1, name: 'Computer Science' },
//             { id: 2, name: 'Electrical Engineering' },
//         ],
//     };
// };

// Function to get modules by program (for lecturer view attendance)
export const getModulesByProgram = async (programId) => {
    return {
        data: [
            { id: 1, name: 'Introduction to Programming' },
            { id: 2, name: 'Data Structures' },
        ],
    };
};
