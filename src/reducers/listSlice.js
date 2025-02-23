import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initState = {
    list : [
        {
            id :1,
            name:"Ramki",
            username:"ramki",
            email:"ramki@gmail.com"
        },
        {
            id :2,
            name:"Sumithra",
            username:"sumithra",
            email:"sumi@gmail.com"
        },
        {
            id :3,
            name:"Chirona Zoe",
            username:"zoe",
            email:"zoe@gmail.com"
        },
    ]
}
const listSlice = createSlice({
    name:"list",
    initialState:initState,
    reducers : {
        getPostSuccess : (state, action) => {
            state.list = action.payload;
        } 
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                console.log('state',state);
                console.log('action',action);
            })
            
    }
});
export const {getPostSuccess} = listSlice.actions;
export default listSlice.reducer;
export const fetchPosts = createAsyncThunk("list/fetchPost", async () => {
    const response = await axios.get("https://dummyjson.com/users")
    console.log(response.data)
    return response?.data
})