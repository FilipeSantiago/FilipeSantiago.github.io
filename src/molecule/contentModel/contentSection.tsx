import { Grid, Typography } from '@mui/material';


export class SectionModel {
    text!: string
    quote!: string
    quotePerson!: string
};


const ContentSection = (props: SectionModel) => {

    return (
        <>
            <Grid item container sx={{ "padding": "40px 15px 15px 15px" }}>
                <Typography sx={{ "fontSize": "18px" }}>
                    <div dangerouslySetInnerHTML={{ "__html": props.text }} />
                </Typography>
            </Grid>
            <Grid container justifyContent={"center"} sx={{ "padding": "5px 15px 0px 15px" }}>
                <Typography sx={{ "fontSize": "21px" }}>"{props.quote}"</Typography>
            </Grid>
            <Grid container justifyContent={"center"} sx={{ "padding": "0px 15px 15px 15px" }}>
                <Typography sx={{ "fontSize": "17px" }}>- {props.quotePerson}</Typography>
            </Grid>
        </>
    )
};


export default ContentSection;
