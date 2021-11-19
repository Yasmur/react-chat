// import React, {useContext} from 'react';

import Button from "@mui/material/Button";
import  Grid from "@mui/material/Grid";
import  Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import {Context} from "../index";
// import firebase from "firebase";


const Login = () => {
    // const {auth} = useContext(Context)

    // const login = async () => {
    //     const provider = new firebase.auth.GoogleAuthProvider()
    //     const {user} = await auth.signInWithPopup(provider)
    //     console.log(user)
    // }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width:400, background: 'lightgray'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box p={5}>
                        <Button variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
// onClick={login} 
export default Login;