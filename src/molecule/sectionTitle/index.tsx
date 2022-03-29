import React from 'react';
import { Paper, Typography } from '@mui/material';


type SectionTitle = {
    icon: any,
    title: string,
    iconColor: string
}

const SectionTitle = (title: SectionTitle) => {

    return (
        <>
            <Paper elevation={3}>
                <title.icon style={{ "fontSize": '45px', "padding": "2px 3px 0 3px", color: title.iconColor }} />
            </Paper>
            <Typography sx={{ "fontSize": "30px", "paddingLeft": "10px" }}>{title.title}</Typography>
        </>

    )
}

export default SectionTitle;