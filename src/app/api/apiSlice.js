import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }), //in dev, this is the localhost, change when deployed
    tagTypes: ['Note', 'User'], //used for cached data
    endpoints: builder => ({}) //will attach here extended slices later
})