import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
    reducerPath: 'projectsApi',
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
    tagTypes: ['Project'],
    endpoints: builder => ({
      getProjects: builder.query({
        query: () => `projects`,
        providesTags: ['Project'],
      }),
      getProjectById: builder.query({
        query: id => `projects/${id}`, 
        providesTags: (result, error, id) => [{ type: 'Project', id }],
      }),
      addProjects: builder.mutation({
        query: newProjects => ({
          url: `projects`,
          method: 'POST',
          body: newProjects,
        }),
        invalidatesTags: ['Project'],
      }),
      addDiscount: builder.mutation({
        query: data => ({
          url: `projects/discount/${data.id}`,
          method: 'POST',
          body: {discount: data.discount},
        }),
        invalidatesTags: ['Project'],
      }),
      addLow: builder.mutation({
        query: data => ({
          url: `projects/lowEstimates/${data.id}`,
          method: 'POST',
          body: {discount: data.discount},
        }),
        invalidatesTags: ['Project'],
      }),
      updateProject: builder.mutation({
        query: ({ id, newData }) => ({
          url: `projects/${id}`,
          method: 'PATCH',
          body: newData,  
        }),
        invalidatesTags: ['Project'],
      }),
      deleteProject: builder.mutation({
        query: id => ({
          url: `projects/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Project'],
      }),
     
    }),
  });

  export const {
    useGetProjectsQuery,
    useGetProjectByIdQuery,
    useAddProjectsMutation,
    useDeleteProjectMutation,
    useUpdateProjectMutation,
    useAddDiscountMutation,
    useAddLowMutation
  } = projectsApi;

  // /discount/${data.id}