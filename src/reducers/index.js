import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { itemsApi } from "../actions/apiFetch"

export const store = configureStore({
    reducer: {
        [itemsApi.reducerPath]: itemsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemsApi.middleware)
})
