import React from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";
import {Stack} from "@mui/material";
import {TextField} from "@mui/material";

const AsyncHttpMethods = () => {
     
    useEffect (() => {

    } ,[]);


    return(
        <div>
            <h1>Https Methods And MAterial UI</h1>
            <Stack spacing={2} direction="column">
            <Button variant="text">Text</Button><br/><br/>
            <Button variant="contained">Contained</Button><br/><br/>
            <Button variant="outlined">Outlined</Button><br/><br/>

            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </Stack>


        </div>
    );

}

export default AsyncHttpMethods;