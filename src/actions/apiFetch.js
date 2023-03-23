import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const itemsApi = createApi({
    reducerPath: "itemsApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b'}),
    endpoints: (builder) => ({
        getAllItems: builder.query({
            query: () => "/"
        }) 
    })
})

export const { useGetAllItemsQuery } = itemsApi