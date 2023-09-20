import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingsSlice';

export const store = configureStore({
    reducer: {
        greeting: greetingReducer,
    },
});