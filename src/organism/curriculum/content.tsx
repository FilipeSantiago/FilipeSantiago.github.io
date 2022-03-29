import React from "react";
import { Grid, Typography } from '@mui/material';
import { Content as ContentModel } from "@crc_services/curriculumService"

type Propreties = {
    contents: ContentModel[]
}

const ContentSection = (content: ContentModel) => (

    <Grid container spacing={1} direction={"column"}>
        <Grid item>
            <Typography sx={{ "textTransform": "uppercase", "fontWeight": 500, "fontSize": "19px" }}>
                {content.title}
            </Typography>
        </Grid>

        {
            content.items !== undefined && content.items.length > 0 ?
                content.items.map(x => (
                    <Grid item container spacing={1} sx={{ "marginLeft": "15px", "marginTop": "5px" }}>
                        <Grid>
                            <Grid item>
                                <Typography sx={{ "fontWeight": 700 }}>
                                    {x.title}
                                </Typography>
                                <Typography sx={{ "fontWeight": 600, "color": "#999", "fontStyle": "italic", "fontSize": "14px" }}>
                                    {x.duration}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item container spacing={1} direction="column">
                            {x.highlights?.map(highlight => (
                                <Grid item sx={{ "marginLeft": "10px", "marginTop": "4px" }}>
                                    {highlight}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))
                :
                <Grid item container spacing={1} sx={{ "marginLeft": "15px", "marginTop": "10px" }}>
                    <div dangerouslySetInnerHTML={{ "__html": (content.description as string) }} />
                </Grid>
        }

    </Grid>
);

const Content = (props: Propreties) => {

    return (
        <Grid container direction="column" spacing={3}>
            {
                props.contents.map(json => (
                    <Grid item>
                        <ContentSection {...json} />
                    </Grid>
                ))
            }
        </Grid>
    )
};


export default Content;
