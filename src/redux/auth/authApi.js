import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = process.env.REACT_APP_API_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}auth`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    current: builder.query({
      query: () => `/current`,
      providesTags: ['User'],
    }),
    login: builder.mutation({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    signup: builder.mutation({
      query: body => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
    addAllow: builder.mutation({
      query: ({ id, newData }) => ({
        url: `/add/${id}`,
        method: 'PATCH',
        body: newData,
      }),
      invalidatesTags: ['User'],
    }),
    deleteAllow: builder.mutation({
      query: ({id, newData }) => ({
        url: `/delete/${id}`,
        method: 'PATCH',
        body: newData, 
      
      }),
      invalidatesTags: ['User'],
    }),
    addAllowUser: builder.mutation({
      query: data => ({
        url: `/allow`,
        method: 'PATCH',
        body: data, 
      }),
      invalidatesTags: ['User'],
    }),
    updateAllowUser: builder.mutation({
      query: data => ({
        url: `/update/${data.id}`,
        method: 'PATCH',
        body: {
          email: data.email,
          allowLevel: data.allowLevel,
          lookAt: data.lookAt,
          lookAtTotals: data.lookAtTotals
        }, 
      }),
      invalidatesTags: ['User'],
    }),
    getUsers: builder.query({
      query: () => `/`,
      providesTags: ['User'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useCurrentQuery, useGetUsersQuery,
   useLoginMutation, useSignupMutation,
    useAddAllowMutation, useDeleteAllowMutation, useLogoutMutation, useAddAllowUserMutation,
    useUpdateAllowUserMutation
  } = authApi;

  //    /allow  patch