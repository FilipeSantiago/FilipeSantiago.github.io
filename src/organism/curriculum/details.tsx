import React from "react";
import { Grid, Typography, Link } from '@mui/material';
import { Details as DetailsModel } from "@crc_services/curriculumService"

type Propreties = {
    details: DetailsModel[]
}

const DetailsSection = (section: DetailsModel) => (
    <Grid container justifyContent="center">
        <Typography sx={{ "textTransform": "uppercase", "fontWeight": 500, "fontSize": "19px" }}>
            * {section.title} *
        </Typography>

        <Grid container direction="column" >
            {section.items?.map(item => (
                <Grid container item justifyContent="center" sx={{ "marginTop": "4px" }}>
                    {
                        item.link == null ?
                        <Typography>
                                {item.title}
                        </Typography>:
                        <Link href={item.link} underline="always" color="#000">
                            <Typography>
                                {item.title}
                            </Typography>
                        </Link>
                    }
                </Grid>
            ))}
        </Grid>
    </Grid>
);

const Details = (props: Propreties) => {

    return (
        <Grid container direction="column" spacing={3}>
            {
                props.details.map(x => (
                    <Grid item>
                        <DetailsSection {...x} />
                    </Grid>
                ))
            }
        </Grid>
    )
};

export default Details;
