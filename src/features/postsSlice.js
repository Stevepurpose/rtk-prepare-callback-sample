import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState=[]
 
const postsSlice=createSlice({
name:"posts",
initialState,
reducers:{
postAdded:{
reducer(state,action){
state.push(action.payload)
},

//modify action payload with prepare callback before passing to reducer function
prepare(title,content,author){
    return{
        payload:{
            id:nanoid(),
            title,
            content,
            author
        }
    }

}

}
}
})

export const{postAdded}=postsSlice.actions
export default postsSlice.reducer