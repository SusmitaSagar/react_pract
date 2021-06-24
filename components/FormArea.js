import React, { useState } from "react";
import {  Fab, Paper, TextField } from "@material-ui/core";

function FormArea({addNote}) {
    const [note, setNote] = useState({
        title:"",
        content:"",
    }); //takes argument and return
    function clickHandler(){
      addNote(note); //title and note are empty after submitting 
      setNote({
        title:"",
      content:"",

      })
    }
function changeHandler(event){
   const {name, value} = event.target
   setNote(preValues =>{
     return{
       ...preValues,
       [name]: value,
     }
   })
}
  
  return (
    <Paper style={{ margin: "10px 10%", padding: "25px" }}>
      <form>
        <TextField 
         onChange={changeHandler}
         name="title"
         value={note.title} 
          label="Title"
           fullwidth autoComplete="off" />
          <br></br>
         <TextField
         onChange={changeHandler}
         name="content" 
         value={note.content}
          label="Content"
          multiline
          rows={4}
          fullwidth
          autoComplete="off"
        />
        <Fab onClick={clickHandler} style={{marginTop:"60px", left: "70px" }}></Fab>
      </form>
    </Paper>
  );
}

export default FormArea;
