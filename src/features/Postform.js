import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'

const Postform = () => {

let dispatch=useDispatch()

const[title,setTitle]=useState("")
const[content,setContent]=useState("")
const[author,setAuthor]=useState("")

const addTitle=e=>setTitle(e.target.value)
const addContent=e=>setContent(e.target.value)
const addAuthor=e=>setAuthor(e.target.value)


 const onSavePost=(e)=>{
    e.preventDefault()
    if(title && content && author){
     dispatch(postAdded(title,content,author))
     setTitle("")
     setAuthor("")
     setContent("")
 }
 }

  return (
<div>
<form>
<input type="text"    onChange={addTitle} value={title} placeholder='enter title'/>
<textarea type="text"   onChange={addContent}   value={content} placeholder='content'/>
<input type="text"    onChange={addAuthor}  value={author} placeholder='author'/>
<button  onClick={onSavePost}>save post</button>
</form>


</div>

 
  )
}

export default Postform