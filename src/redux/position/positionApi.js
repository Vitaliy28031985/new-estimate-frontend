import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = process.env.REACT_APP_API_URL;

export const positionApi = createApi({
  reducerPath: 'positionApi',
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
  tagTypes: ['Position'],
  endpoints: builder => ({
    addPosition: builder.mutation({
      query: param => ({
        url: `position/${param.idProj}/${param.idEst}`,
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