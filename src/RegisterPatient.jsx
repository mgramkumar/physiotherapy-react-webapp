import React from 'react';
import {TextField, Container, makeStyles} from '@material-ui/core';
import { useFormik } from 'formik';
 
export default function RegisterPatient() {
    
      
    const validate = values => {
        const errors = {};
        {/* phone number */}
        if (values.phone?.toString().length !== 10) {
            errors.phone= "must be 10 characters";
        } else if (!values.phone) {
            errors.phone="Required"
        }
        {/* name */}
        if (values.phone?.toString().length !== 10) {
            errors.phone= "must be 10 characters";
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: { name:"", address:"", gender:"", phone:"", email: "" },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
      });
    return (
        <div>
            <h2 align="center"> Register Patient </h2>
            <Container maxWidth="sm">
                <form autoComplete="off" align="center" onSubmit={formik.onSubmit}>
                    <TextField variant="outlined" id="name" label="Name" fullWidth  onChange={formik.handleChange}
         value={formik.values.name}/>
                    <br/><br/>
                    <TextField variant="outlined" id="address" label="Address" fullWidth  onChange={formik.handleChange}
         value={formik.values.address}/>
                    <br/><br/>
                    <TextField variant="outlined" required id="phone" label="Phone Number" fullWidth  onChange={formik.handleChange}
         value={formik.values.phone}/>
          {formik.errors.phone ? <div className="red">{formik.errors.phone}</div> : null}
                    <br/><br/>
                    <TextField variant="outlined" id="gender" label="Gender" fullWidth  onChange={formik.handleChange}
         value={formik.values.gender}/>
                    <br/><br/>
                    <TextField variant="outlined" required id="email" label="Email" fullWidth  onChange={formik.handleChange}
         value={formik.values.email}/>
                    <br/><br/>
                    <button type="submit" disabled={!formik.isValid}>Submit</button>
                </form>
            </Container>
        </div>
    )
}
