import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    greeting: '',
};

export const getGreeting = createAsyncThunk(
    'greetings/random',
    async () => {
        const response = await fetch('http://localhost:3000/greetings/random');
        const data = await response.json();
        console.log(data)
        return data;
    }
);

export const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGreeting.fulfilled, (state, action) => {
            console.log(action)
            state.greeting = action.payload.text;
        });
    },
});

export default greetingSlice.reducer;