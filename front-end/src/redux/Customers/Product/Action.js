import axios from 'axios';

import {
    FIND_PRODUCTS_BY_CATEGORY_REQUEST,
    FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
    FIND_PRODUCTS_BY_CATEGORY_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    SEARCH_PRODUCT_REQUEST,
    SEARCH_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAILURE,
    GET_SALE_PRODUCT_REQUEST,
    GET_SALE_PRODUCT_SUCCESS,
    GET_SALE_PRODUCT_FAILURE,
    GET_NEW_PRODUCT_REQUEST,
    GET_NEW_PRODUCT_SUCCESS,
    GET_NEW_PRODUCT_FAILURE,
    GET_BEST_PRODUCT_REQUEST,
    GET_BEST_PRODUCT_SUCCESS,
    GET_BEST_PRODUCT_FAILURE,
} from './ActionType';
import api, { API_BASE_URL } from '../../../config/api';

export const findProducts = (reqData) => async (dispatch) => {
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;

    try {
        dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });

        const { data } = await api.get(
            `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
        );

        console.log('get product by category - ', data);
        dispatch({
            type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const findProductById = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

        const { data } = await api.get(`/api/products/id/${reqData.productId}`);

        console.log('products by  id : ', data);
        dispatch({
            type: FIND_PRODUCT_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FIND_PRODUCT_BY_ID_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const searchProduct = (keyword) => async (dispatch) => {
    try {
        dispatch({ type: SEARCH_PRODUCT_REQUEST });

        const { data } = await api.get(`/api/products/search`, {
            params: {
                q: keyword,
            },
        });

        console.log('products by  id : ', data);
        dispatch({
            type: SEARCH_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SEARCH_PRODUCT_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const createProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST });

        const { data } = await api.post(`${API_BASE_URL}/api/admin/products/`, product.data);

        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: data,
        });

        console.log('created product ', data);
    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const updateProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });

        const { data } = await api.put(`${API_BASE_URL}/api/admin/products/${product.productId}`, product);

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const deleteProduct = (productId) => async (dispatch) => {
    console.log('delete product action', productId);
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        let { data } = await api.delete(`/api/admin/products/${productId}/delete`);

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data,
        });

        console.log('product delte ', data);
    } catch (error) {
        console.log('catch error ', error);
        dispatch({
            type: DELETE_PRODUCT_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getSaleProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_SALE_PRODUCT_REQUEST });

        const { data } = await axios.get(`${API_BASE_URL}/products/sale`);

        dispatch({
            type: GET_SALE_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_SALE_PRODUCT_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getNewProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_NEW_PRODUCT_REQUEST });

        const { data } = await axios.get(`${API_BASE_URL}/products/newest`);

        dispatch({
            type: GET_NEW_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_NEW_PRODUCT_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getBestProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_BEST_PRODUCT_REQUEST });

        const { data } = await axios.get(`${API_BASE_URL}/products/best`);

        dispatch({
            type: GET_BEST_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_BEST_PRODUCT_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
