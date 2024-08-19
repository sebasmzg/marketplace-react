import { Alert, AlertColor } from '@mui/material';
import React from 'react';
import { Snackbar } from '@mui/material'; // Import the correct component

export type ContextProps = {
    getError: (message:string) => void,
}

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const initialNotificationState = {
        message: "",
        open: false,
        severity: undefined as AlertColor | undefined,
    };

    const [notification, setNotification] = React.useState(initialNotificationState);

    const getError = (message:string) => {
        setNotification({
            severity: "error",
            open: true,
            message: "An error occurred",
        });
    };

    const handleClose = () => {
        setNotification({
            ...notification,
            open: false,
        });
    };

    const value = {
        getError
    };

    return (
        <NotificationContext.Provider value={value}>
            <Snackbar open={notification.open} onClose={handleClose} autoHideDuration={4000}>
                <Alert severity={notification.severity} onClose={handleClose}>
                    {notification.message}
                </Alert> 
            </Snackbar>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = (): ((message: string) => void) => {
    const context = React.useContext(NotificationContext);
    if(!context){
        throw new Error("useNotification must be used within a NotificationProvider");

    }
    return context.getError;
}
    
    