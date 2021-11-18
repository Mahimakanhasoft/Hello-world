import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Home from "../home";


function From() {

    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [address, setAddress] = useState();

    const clearState = () => {
        setFirstName('')
        setEmail('')
        setContact('')
        setAddress('')
    }

    const handleSubmit = (e) => {
        console.log({ firstName, email, contact, address });
        clearState();
    }

    return (
        <>
         <Home />
            <Box style={{ backgroundColor: "lightcyan", borderRadius: 20, marginLeft: 400, marginTop: 50, padding: 30, width: 300 }} >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
                    <Grid item xs={12} style={{ margin: 10, padding: 5 }}>
                        <TextField name="first_name" value={firstName} id="outlined-basic" onChange={e => setFirstName(e.target.value)} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} style={{ margin: 10, padding: 5 }}>
                        <TextField name="email" value={email} id="outlined-basic" variant="outlined" onChange={e => setEmail(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} style={{ margin: 10, padding: 5 }}>
                        <TextField name="contact" value={contact} id="outlined-basic" variant="outlined" onChange={e => setContact(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} style={{ margin: 10, padding: 5 }}>
                        <TextField name="address" value={address} id="outlined-basic" variant="outlined" onChange={e => setAddress(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} style={{ marginLeft: 80, padding: 8 }}>
                        <Button variant="contained" color="secondary" onClick={e => { handleSubmit(e) }} >Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}



export default From;