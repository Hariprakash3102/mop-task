import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkQuery = createApi({
    reducerPath: 'rtkQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://devapi.myorthopedicproblem.com/v1',
        prepareHeaders: (headers) => {
            const token = sessionStorage.getItem("mop_token");
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getRtk: builder.query({
            query: ({ limit, page }) => `/provider/patient?limit=${limit}&page=${page}&sortBy=createdAt:desc`,
        }),
        getRefferal: builder.query({
            query: ({ limit, page }) => `/referral/list?limit=${limit}&page=${page}`,
        })
    }),
});

export const { useGetRtkQuery,useGetRefferalQuery } = rtkQuery; 