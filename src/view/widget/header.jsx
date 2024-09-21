import React from "react";
import IconMenu from "@mui/icons-material/Menu"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

export const Header = () => {
    return (
        <div className="header">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <IconMenu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {window.languageText.appName}
                    </Typography>
                    <Button color="inherit">{window.languageText.settings}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
