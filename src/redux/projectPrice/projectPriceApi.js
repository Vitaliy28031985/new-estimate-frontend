import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectPriceApi = createApi({
    reducerPath: 'projectPriceApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:4000/api/project/price',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      },
    }),
    tagTypes: ['Project'],
    endpoints: builder => ({
      addProjectPrice: builder.mutation({
         query:({id, newPrice}) => ({
          url: `/${id}`,
          method: 'POST',
          body: newPrice,
        }),
     
        invalidatesTags: ['Project'],
      }),
      deleteProjectPrice: builder.mutation({
        query: ({ idPro, idPrice }) => ({
          url: `/${idPro}/${idPrice}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Project'],
      }),
      updateProjectPrice: builder.mutation({
        query: ({ idPro, idPrice, newData }) => ({
          url: `/${idPro}/${idPrice}`,
          method: 'PATCH',
          body: newData,  
        }),
        invalidatesTags: ['Project'],
      }),
      
    }),
  });

  export const {
    useAddProjectPriceMutation,
    useDeleteProjectPriceMutation,
    useUpdateProjectPriceMutation
    
  } = projectPriceApi;