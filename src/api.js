import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

function Api() {
    return(
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
              <Grid item xs={12} style={{ margin: 10, padding: 5 }}>
                <TextField name="title" type="text"  id="outlined-basic" placeholder="Enter Title" variant="outlined" />
              </Grid>
              <Grid item xs={12} style={{ margin: 10, padding: 5 }}>
                <TextField name="body" placeholder="Enter body"
                   id="outlined-basic"  variant="outlined" />
              </Grid>
              <Grid item xs={12} style={{ marginLeft: 80, padding: 8 }}>
                <Button variant="contained"  color="secondary">Submit</Button>
              </Grid>
            </Grid>
        </>
    )
}

export default Api;