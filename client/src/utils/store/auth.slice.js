import {createSlice} from "@reduxjs/toolkit"


const AuthSlice = createSlice({
    name: 'authSlice',
    initialState: {},
    reducers: {
        getUserDeatils : function(state, action){
            state = action.payload
        },
        setUserDetails : function(state, action){
            return state
        }
    },
})

export const { getUserDeatils, setUserDetails} = AuthSlice.actions
export default AuthSlice.reducer