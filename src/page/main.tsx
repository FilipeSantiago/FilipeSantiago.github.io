import { Grid, Button, Paper, Dialog, Hidden, DialogContent, DialogTitle, DialogActions, Divider, Typography } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react'
import Header from '@curriculum/organism/header'
import Timeline from '@curriculum/organism/timeline';
import Curriculum from '@curriculum/organism/curriculum'
import { useReactToPrint } from 'react-to-print';
import useMainService, { Main as MainData } from "@crc_services/mainService"
import { Timeline as TimelineIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import ContentSection from "@curriculum/molecule/contentModel"
import SectionTitle from '@curriculum/molecule/sectionTitle';
import { useTranslation } from 'react-i18next';


const Main = () => {

    const [curriculumOpen, setCurriculumOpen] = useState(false);
    const [mainData, setMainData] = useState(new MainData());
    const { getMainPageData } = useMainService();
    const { t } = useTranslation();

    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getMainPageData().then((response: MainData) => setMainData(response));
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            <Dialog open={curriculumOpen} fullWidth maxWidth="md" onClose={() => setCurriculumOpen(false)}>
                <DialogTitle>
                    Curriculum
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <div ref={componentRef}>
                        <Curriculum />
                    </div>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button variant='contained' onClick={handlePrint}>
                        {"printCurriculum"}
                    </Button>
                </DialogActions>
            </Dialog>

            <div style={{ "position": "absolute", "top": 0, "height": "33vh", "width": "100%", "zIndex": "0 ", "backgroundSize": "cover", "backgroundImage": `url(${window.location.origin + '/assets/tech.jpg'})` }}>

            </div>

            <Grid container justifyContent={"center"} sx={{ "marginTop": "200px" }}>
                <Grid item container xl={6} lg={11} md={11} sm={11} xs={11} direction={"column"} spacing={6}>
                    <Grid item xs>
                        <Header />
                    </Grid>

                    <Grid item xs>
                        <Paper>
                            <Grid container>
                                <ContentSection text={mainData.about} quote={mainData.aboutQuote} quotePerson={mainData.aboutQuotePerson} />
                                <Grid item container justifyContent={"center"} sx={{ "padding": "15px" }}>
                                    <Hidden only={["xs", "sm"]}>
                                        <Button variant="outlined" onClick={() => setCurriculumOpen(true)}>
                                            {t("printCurriculum")}
                                        </Button>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs >

                        <Grid container justifyContent={"center"} sx={{ "paddingBottom": "15px" }}>
                            <SectionTitle icon={TimelineIcon} title={"TIMELINE"} iconColor="#2196f3" />
                        </Grid>
                        <Timeline />
                    </Grid>


                    <Grid item xs>
                        <Grid container justifyContent={"center"} sx={{ "paddingBottom": "10px" }}>
                            <SectionTitle icon={FavoriteIcon} title={"HOBBIES"} iconColor="#f32121" />
                        </Grid>
                        <Paper>
                            <ContentSection text={mainData.hobbies} quote={mainData.hobbiesQuote} quotePerson={mainData.hobbiesQuotePerson} />
                        </Paper>
                    </Grid>

                    <Grid item xs>
                        <Grid item container justifyContent={"center"} sx={{ "padding": "15px" }}>
                            <Typography>
                                Filipe Santiago - 2022
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Main;