import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    greeting: '',
};

export const getGreeting = createAsyncThunk(
    'greetings/random',
    async () => {
        const response = await fetch('S/greetings/random');
        const data = await response.json();
        return data;
    }
);

export const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGreeting.fulfilled, (state, action) => {
            state.greeting = action.payload.text;
        });
    },
});

export default greetingSlice.reducer;