import { createReducer, on } from "@ngrx/store"
import { findAll, load } from "./products.actions"

const products: any[] = [];

const initialState = {
    products
}

export const productsReducer = createReducer(
    initialState,
    on(load, (state) => ({ products: [...state.products] })),
    on(findAll, (state, { products }) => ({ products: [...products] })),

)