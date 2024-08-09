import {configureStore} from '@reduxjs/toolkit' 
import { rtkQuery } from './slice';

export const store = configureStore({
    reducer : {
        [rtkQuery.reducerPath]: rtkQuery.reducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rtkQuery.middleware),
});

           