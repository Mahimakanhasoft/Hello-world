
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import React from "react";
import Home from "../home";

function List() {
    return(
        <>
        {/* < Home /> */}
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
                        <TableRow>
                            <TableCell align="right" ></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="center">
                                <Button variant="contained" >Edit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="contained" >Delete</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </>
    )
    
}

export default List;