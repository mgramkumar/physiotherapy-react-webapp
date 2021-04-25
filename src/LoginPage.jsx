import React from 'react';
import {TextField, Button, Container} from '@material-ui/core';
import { useFormik } from 'formik';

export default function LoginPage() {
    const style = {
        container: {
            "maxWidth":"450px",
            "height":"250px",
        },
        input: {
            "display": 'flex',
            "width": "350px",
        }, 
        button: {
            "display": 'flex',
            "width": "350px",
        }
    }

    const isValidEmail = (email) => {
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return !!email && typeof email === 'string'
          && email.match(emailRegex)
        }

    const validate = values => {
        const errors = {};
        {/* email */}
        if (values.email.length == 0 || isValidEmail(values.email)) {
            errors.email= "Enter valid Email";
        }
        {/* password */} 
        if (!values.password.length == 0) {
            errors.phone="Enter a password"
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: { email:"", password:""},
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
      });

    return (
        <div className="page" style= {style.container} align="center">
            <form onSubmit={formik.onSubmit}>
                <h2> Login </h2>
                <br/>
                <TextField id="email" placeholder="Email Id"  style={style.input} onChange={formik.handleChange}
         value={formik.values.email}/>
                <br/>
                <TextField id="password" type="password" placeholder="Password" style={style.input} onChange={formik.handleChange}
         value={formik.values.password}/>
                <br/>
                <br/>
                <button type="submit" variant="contained" color="primary" style={style.button}> Log In </button>

            </form>
        </div>
    )
}
