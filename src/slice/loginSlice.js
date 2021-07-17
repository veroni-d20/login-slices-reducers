import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name:"loginStatus",
    initialState:{
        user:null,
        message:'',
        isError:'',
        isButtonDisabled:''
    },
    reducers:{
        login:(state,action) => {
            state.user = action.payload;
            state.message = "Logged in successfully";
            state.isError = false
        },
        logout:(state) => {
            state.user = null;
        },
        loginFailed:(state,action) =>{
            state.message = "Incorrect username or password";
            state.isError = action.payload
        },
        setIsButtonDisabled:(state,action)=>{
            state.isButtonDisabled= action.payload
        }
    },
});

export const {login,logout,loginFailed,setIsButtonDisabled} = loginSlice.actions;
//export const selectUser = (state) => state.user.user;
export default loginSlice.reducer;