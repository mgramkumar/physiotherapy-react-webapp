import React, {useState} from 'react';
import {Modal, makeStyles, TableCell, TableRow, TableContainer, TableHead, TableBody, Table} from '@material-ui/core';
import RegisterPatient from './RegisterPatient';

export default function PatientDetails() {
    const [open, setOpen] = useState(false);
    
    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
        table: {
            minWidth: 650,
          },
      }));

      function rand() {
        return Math.round(Math.random() * 20) - 10;
      }

      function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }
  
    const handleOpen = () => {
      setOpen(true);
    };

    const rows = [
        createData('Jade', 'chennai', 1234567890, 20, 'sdf@asdcom')
      ];

      function createData(name, address, phone, age, email) {
        return { name, address, phone, age, email };
      }
  
    const handleClose = () => {
      setOpen(false);
    };
    const style = useStyles();
    const [modalStyle] = useState(getModalStyle);

    return (
        
        <div className="page">
              <TableContainer component={style.paper}>
                <Table stickyHeader className={style.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Adress</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.address}</TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br/>
              <button type="button" onClick={handleOpen}>Register Patient</button>
                <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                        <div style={modalStyle} className={style.paper}>
                    <RegisterPatient/>
                    </div>
                </Modal> 
        </div>
    )
}
