import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkQuery = createApi({
  reducerPath: "rtkQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://devapi.myorthopedicproblem.com/v1",
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("mop_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRtk: builder.query({
      query: ({ limit, page, search }) =>
        search === ""
          ? `/provider/patient?limit=${limit}&page=${page}&sortBy=createdAt:desc`
          : `/provider/patient?limit=${limit}&page=${page}&sortBy=createdAt:desc&name=${search}`,
    }),
    getRefferal: builder.query({
      query: ({ limit, page, search, type }) =>
        type === "" && search === ""
          ? `/referral/list?limit=${limit}&page=${page}`
          : search === "" && type !== ""
          ? `/referral/list?limit=${limit}&page=${page}&type=${type}`
          : search !== ""
          ? `/referral/list?limit=${limit}&page=${page}&search=${search}`
          : `/referral/list?limit=${limit}&page=${page}&search=${search}&type=${type}`,
    }),
  }),
});

export const { useGetRtkQuery, useGetRefferalQuery } = rtkQuery;
