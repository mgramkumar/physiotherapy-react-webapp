import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function ContactUs() {
    const style = {
        input: {
            width : "300px"
        }
    }
    
    return (

        <div className="page" align="center" >
            <form>
                <h2>Contact Form</h2>
                <TextField id="name" label="Name" style={style.input} />
                <br/>
                <TextField id="email" label="Email" style={style.input} />
                <br/>
                <TextField id="comments" label="Comments" style={style.input} 
                    placeholder="Describe your suggestion" multiline/>
                <br/>
                <br/>
                <Button variant="contained" color="primary"> Submit </Button>
            </form> 
        </div>
    )
}
