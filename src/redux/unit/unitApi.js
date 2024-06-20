import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const unitsApi = createApi({
    reducerPath: 'unitsApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:4000/api/',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      },
    }),
    tagTypes: ['Unit'],
    endpoints: builder => ({
      getUnit: builder.query({
        query: () => `units/`,
        providesTags: ['Unit'],
      }),
   
      addUnit: builder.mutation({
        query: newUnits => ({
          url: `units/`,
          method: 'POST',
          body: newUnits,
        }),
        invalidatesTags: ['Unit'],
      }),
      updateUnit: builder.mutation({
        query: ({ id, newData }) => ({
          url: `units/${id}`,
          method: 'PATCH',
          body: newData,  
        }),
        invalidatesTags: ['Unit'],
      }),
      deleteUnit: builder.mutation({
        query: id => ({
          url: `units/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Unit'],
      }),
     
    }),
  });

  export const {
    useGetUnitQuery,
    useAddUnitMutation,
    useDeleteUnitMutation,
    useUpdateUnitMutation
  } = unitsApi;

  