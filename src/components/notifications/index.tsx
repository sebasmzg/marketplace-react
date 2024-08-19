import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";
import React from "react";

type NotificationsProps = {
    open: boolean,
    message: string,
    severity: AlertColor | undefined,
    handleClose: ()=>void
};

export const Notifications: React.FC<NotificationsProps> = ({open,
    message,
    severity,
    handleClose
})=>{
    return (
        <Snackbar 
            anchorOrigin={{vertical:"top",horizontal:"center"}}
            autoHideDuration={4000}
            open={open}
        >
            <Alert onClose={handleClose} severity={severity}>
                <Typography>{message}</Typography>
            </Alert>
        </Snackbar>
    )
}