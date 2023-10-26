import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data/data'

export const Slice = createSlice({
    name: 'ecommerce',
    initialState : {
        numberHeart : 0,
        numberCart : 0,
        donnes : data,
        arrayCart : [],
        newData : data,
        auth : false,
        firstName : '',
        secondName : '',
        email : '',
        password : '',
        showAlert : false 
    },
    reducers : {

        handleHeart(state){
            state.numberHeart += 1
        },

        // function Add a product in the array
        handleAddCart(state, action){
            let product = action.payload;
            state.arrayCart.push(product)
            state.numberCart += 1
            const findProduct = state.arrayCart.find(item => item.id === action.payload)
            if(findProduct){
                console.log('You are already choose that!')
            }
        },

        // function for filter an product from the array
        handleFilter(state, action){
            const articleId = action.payload
            state.arrayCart = state.arrayCart.filter(item => item.id !== articleId)
            state.numberCart -= 1
        },

        // Function for handling the select
        handleSelect(state, action){
            const selectValue = document.querySelector('select').value
            if(selectValue === 'all'){
                state.newData = data
            }else if(selectValue === 'Clothes'){

                const filterCategory = data.filter(item => item.category === 'Clothes')
                state.newData = filterCategory

            }else if(selectValue === 'Media'){

                const filterCategory = data.filter(item => item.category === 'Media')
                state.newData = filterCategory

            }else if(selectValue === 'Foods'){

                const filterCategory = data.filter(item => item.category === 'Foods')
                state.newData = filterCategory
                
            }else if(selectValue === 'Others'){

                const filterCategory = data.filter(item => item.category === 'Others')
                state.newData = filterCategory
                
            }
        },

        // function for handle the first name
        handleFirstName(state, action){
            return {
                ...state ,
                firstName : action.payload
            }
        },

        // function for handle the second name
        handleSecondName(state, action){
            return {
                ...state ,
                secondName : action.payload
            }
        },

        // function for handle the email
        handleEmail(state, action){
            return {
                ...state ,
                email : action.payload
            }
        },

        // function for handle the password
        handlePassword(state, action){
            return {
                ...state ,
                password : action.payload
            }
        },

        // function for handle the submit button
        handleSubmit(state, action){
            if(state.firstName === '' || state.secondName === '' || state.email === '' || state.password === ''){
                state.showAlert = true
            }else{
                state.auth = true
                state.showAlert = false
            }
        },

        handleLogOut(state, action){
            state.auth = false
            state.firstName = ''
            state.secondName = ''
            state.email = ''
            state.password = ''
        }
    }
})

            // state.numberHeart += 1;

export const actions = Slice.actions