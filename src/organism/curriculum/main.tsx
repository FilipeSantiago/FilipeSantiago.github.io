import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material';
import Details from './details'
import CrcContent from './content'
import useCurriculumService, { Content, Details as DataDetails } from "@crc_services/curriculumService"
import { Profile } from "@crc_types/profile"
import './main.css'

function Main() {

    const [content, setContent] = useState([new Content()]);
    const [details, setDetails] = useState([new DataDetails()]);
    const [header, setHeader] = useState(new Profile());
    const { getCurriculumContent, getCurriculumDetails, getCurriculumHeader } = useCurriculumService();

    useEffect(() => {
        getCurriculumContent().then((response: Content[]) => setContent(response));
        getCurriculumDetails().then((response: DataDetails[]) => setDetails(response));
        getCurriculumHeader().then((response: Profile) => setHeader(response));
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Grid container spacing={4}>
            <Grid item container justifyContent={"center"}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={8}>
                    <Grid container >
                        <Typography variant="h5">
                            {header.name}
                        </Typography>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography>
                                {header.profission}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item xs={4}>
                    <Details details={details} />
                </Grid>
                <Grid item xs={7}>
                    <CrcContent contents={content} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Main;
