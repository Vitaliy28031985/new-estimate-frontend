import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const priceApi = createApi({
    reducerPath: 'priceApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://31.131.25.30:4000/api/',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      },
    }),
    tagTypes: ['Price'],
    endpoints: builder => ({
      getPrice: builder.query({
        query: () => `price`,
        providesTags: ['Price'],
      }),
      addPrice: builder.mutation({
        query: newPrice => ({
          url: 'price',
          method: 'POST',
          body: newPrice,
        }),
        invalidatesTags: ['Price'],
      }),
      deletePrice: builder.mutation({
        query: id => ({
          url: `price/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Price'],
      }),
      updatePrice: builder.mutation({
        query: ({ id, newData }) => ({
          url: `price/${id}`,
          method: 'PUT',
          body: newData,  
        }),
        invalidatesTags: ['Price'],
      }),
      
    }),
  });

  export const {
    useGetPriceQuery,
    useAddPriceMutation,
    useDeletePriceMutation,
    useUpdatePriceMutation
    
  } = priceApi;

  