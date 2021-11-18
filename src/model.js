import { Box, Button, Typography, DialogContent } from "@material-ui/core";
import React, { useState } from "react";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
function Model(props) {
    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [address, setAddress] = useState();
    const [editId, setEditId] = useState("");
    const [tableData, setTableData] = useState([]);
    const [lists, updateList] = useState(tableData);


    const clearState = () => {
        setFirstName('')
        setEmail('')
        setContact('')
        setAddress('')
    }

    const list = {
        firstName,
        email,
        contact,
        address,

    }
    console.log("id", editId);
    const handleSubmit = () => {

        if (editId !== "") {

            let arr = tableData
            arr[editId] = {
                firstName: firstName,
                email: email,
                contact: contact,
                address: address,
            }
            console.log("tabledata", tableData);
            console.log("array", arr)
            setTableData(arr);
            clearState();
        } else {
            let data = tableData.push(list);
            clearState();
        }


    }

const showTable = () => {
    
} 
    const editData = (i) => {

        const items = tableData.find((element, index) => {
            return index === i;

        })

        if (items) {
            setEditId(i);
        }
        setFirstName(items.firstName)
        setEmail(items.email)
        setContact(items.contact)
        setAddress(items.address)
    }

    const delData = (i) => {

        let items = tableData.filter((element, index) => {
            return index !== i;
        })
        setTableData(items);
    }

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth={'md'}
                open={props.show}
                onClose={props.ToggleModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent >
                    <h2 style={{ marginLeft: 400 }}>Form</h2>

                    <Grid container>
                        <Grid item xs={12} style={{ margin: 10, padding: 5 }}>
                            <TextField name="first_name" style={{ width: 400 }} placeholder="User Name" id="outlined-size-normal" value={firstName} onChange={e => setFirstName(e.target.value)} variant="filled" />
                            <TextField placeholder="Email" name="email" style={{ marginLeft: 50, width: 400 }} value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" variant="filled" />
                        </Grid>

                        <Grid item xs={12} style={{ margin: 10, padding: 5 }}>
                            <TextField name="contact" placeholder="Contact" style={{ width: 400 }} value={contact} onChange={e => setContact(e.target.value)} id="outlined-basic" variant="filled" />
                            <TextField name="address" placeholder="Address" style={{ marginLeft: 50, width: 400 }} value={address} onChange={e => setAddress(e.target.value)} id="outlined-basic" variant="filled" />
                        </Grid>

                        <Grid item xs={12} style={{ marginLeft: 400, padding: 8 }}>
                            <Button variant="contained" color="secondary" onClick={() => { handleSubmit() }} >{editId !== "" ? "EDIT" : "Submit"} </Button>
                        </Grid>
                    </Grid>
                    {/* */}
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">User Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Contact</TableCell>
                                    <TableCell align="right">Address</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.length && tableData.map((item, i) => {
                                    return (
                                        <TableRow>
                                            <TableCell align="right" >{item.firstName}</TableCell>
                                            <TableCell align="right">{item.email}</TableCell>
                                            <TableCell align="right">{item.contact}</TableCell>
                                            <TableCell align="right">{item.address}</TableCell>
                                            <TableCell align="center">
                                                <Button variant="contained" onClick={() => editData(i)} >Edit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button variant="contained" onClick={() => delData(i)} >Delete</Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>

            </Dialog>
        </div>
    )
}

export default Model;