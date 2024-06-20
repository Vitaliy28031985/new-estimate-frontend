import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const positionApi = createApi({
  reducerPath: 'positionApi',
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
  tagTypes: ['Position'],
  endpoints: builder => ({
    addPosition: builder.mutation({
      query: param => ({
        url: `position/${param.idPos}/${param.idEst}`,
        method: 'POST',
        body: {position: param.position},
      }),
  
      invalidatesTags: ['Position'],
    }) ,
    updatePosition: builder.mutation({
     
      query: ([prjId, estId, posId, newData ]) => ({
        url: `position/${prjId}/${estId}/${posId}`,
        method: 'PATCH',
        body: newData, 
      
      }),
      invalidatesTags: ['Position'],
    }),
    deletePosition: builder.mutation({
      query: param => ({
        url: `position/${param.idPro}/${param.idEst}/${param.idPos}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Position'],
    }),


  }),
});

export const {
  useAddPositionMutation,
  useUpdatePositionMutation,
  useDeletePositionMutation

} = positionApi;