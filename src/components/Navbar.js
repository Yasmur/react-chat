// import React, {useContext} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import  Grid from "@mui/material/Grid";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
// import {Context} from "../index";
// import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    // const {auth} = useContext(Context)
    // const [user] = useAuthState(auth)
const user = true;
    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent={"flex-end"}>
                    {user ?
                        <Button  variant={"contained"}>Выйти</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"contained"}>Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
// onClick={() => auth.signOut()}
export default Navbar;