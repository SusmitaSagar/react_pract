import { Paper } from '@material-ui/core'
import React from 'react'

function Note() {
    return (
        <Paper style={{
            minWidth:"300px",
            minHeight:"150px",
            padding: "10px",
            margin:"20px",
            display:"inline-flex",
             }} elevation={10}>

            <div> 
            <h1>Title</h1>
            <p>content</p>
            </div>
        </Paper>
    )
}
//inserting in div made title and contemt in different line
export default Note
