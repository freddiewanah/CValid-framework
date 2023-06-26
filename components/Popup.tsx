import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



export default function Popup(props: { title: any; children: any; openPopup: any; setOpenPopup: any; }) {

    const { title, children, openPopup, setOpenPopup } = props;

    return (
        <Dialog open={openPopup} maxWidth="md" className="dialogWrapper">
            <DialogTitle className="dialogTitle">
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Button sx={{padding: '0px'}}
                        onClick={()=>{setOpenPopup(false)}}>

                        <CloseIcon sx={{color: "#1dd3f8"}}/>
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}