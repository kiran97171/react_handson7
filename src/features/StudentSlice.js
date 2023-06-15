import { createSlice } from "@reduxjs/toolkit";

export const StudentSlice = createSlice({
    name:"studentDataApp",
    initialState:
        [
            {
                "id": 0,
                "Name": "Kiran",
                "Age": "24",
                "Course": "MERN",
                "Batch": "June"
            },
            {
                "id": 1,
                "Name": "Shiv",
                "Age": "25",
                "Course": "MERN",
                "Batch": "March"
            },
            {
                "id": 2,
                "Name": "Sham",
                "Age": "26",
                "Course": "MERN",
                "Batch": "April"
            },
            {
                "id": 3,
                "Name": "Ram",
                "Age": "22",
                "Course": "MERN",
                "Batch": "September"
            },
            {
                "id": 4,
                "Name": "Vikas",
                "Age": 23,
                "Course": "MERN",
                "Batch": "June"
            },
            {
                "id": 5,
                "Name": "Shivam",
                "Age": 24,
                "Course": "MERN",
                "Batch": "September"
            },
        ],
    reducers:{
        studentAdded:(state,action)=>{
            state.push(action.payload)
        },
        studentUpdated:(state,action)=>{
            const {id,Name,Age,Course,Batch}=action.payload;
            const existingStudent=state.find(student=>student.id===id);
            existingStudent.Name=Name;
            existingStudent.Age=Age;
            existingStudent.Course=Course;
            existingStudent.Batch=Batch;
        }
    }
})

export const {studentAdded} =StudentSlice.actions
export const {studentUpdated} =StudentSlice.actions

export default StudentSlice.reducer