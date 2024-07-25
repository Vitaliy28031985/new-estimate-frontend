import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiUrl = process.env.REACT_APP_API_URL;
export const priceApi = createApi({
    reducerPath: 'priceApi',
    baseQuery: fetchBaseQuery({
      baseUrl: `${apiUrl}`,
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

  