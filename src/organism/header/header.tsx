import { Grid, Hidden, Paper, Typography } from '@mui/material';
import { LocationOn, PhoneAndroid, Email } from '@mui/icons-material';
import React from 'react'


const styles = {
    color: {
        "color": "#fff"
    },
    header: {
        "color": "#fff",
        "fontSize": "30px",
        "fontWeight": "900",
        "textShadow": "2px 2px 4px rgba(0, 0, 0, 0.5);"
    },
    subHeader: {
        "color": "#fff",
        "fontWeight": "700",
        "fontSize": "20px",
        "textShadow": "2px 2px 4px rgba(0, 0, 0, 0.5);"
    },
    subItemsContainer: {
        "paddingTop": "40px"
    },
    subItems: {
        "color": "#fff",
        "paddingTop": "10px",
        "textShadow": "2px 2px 4px rgba(0, 0, 0, 0.5);"
    },
    diagonalDivisor: {
        "top": "200px",
        "position": 'absolute' as 'absolute',
        "zIndex": "1",
        "borderStyle": "solid",
        "borderWidth": "400px 150px 0 100px",
        "borderColor": "rgba(223, 50, 50, 0) transparent transparent #1b829c"
    },
    imageContainer: {
        "backgroundImage": `url(${window.location.origin + '/assets/me.png'})`,
        "backgroundSize": "cover",
        "height": "100%",
        "width": "100%",
        "zIndex": "10"
    },
    
    // Xs Styles 
    subItemsFont_xs: {
        "fontSize": "14px"
    },
    subHeader_xs: {
        "color": "#fff",
        "fontWeight": "700",
        "fontSize": "17px",
        "textShadow": "2px 2px 4px rgba(0, 0, 0, 0.5);"
    },
    subItemsContainer_xs: {
        "paddingTop": "20px"
    },
    mobilePhoto: {
        "display": "flex",
        "height": "50px",
        "zIndex": "50"
    },
    centeredPhoto: {
        "width": "110px",
        "height": "110px",
        "display": "flex",
        "zIndex": "50",
        "margin": "auto",
        "border": "3px solid #1b829c",
        "borderRadius": "50%",
        "backgroundImage": `url(${window.location.origin + '/assets/me.png'})`,
        "backgroundSize": "cover"
    },
    profilePhotoMobile: {
        "width": "150px",
        "paddingLeft": "0",
        "zIndex": "50",
        "maxWidth": "80%",
        "margin": "auto",
        "alignSelf": "center"
    }
};

type AdditionalInfo = {
    emoji: any,
    text: string
}

type HeaderContent = {
    name: string,
    profission: string,
    photo?: string,
    additionalInfo: AdditionalInfo[],
    type?: string
}


const Content = (info: HeaderContent) => {

    let subHeaderStyle = info.type === "xs" ? styles.subHeader_xs : styles.subHeader;
    let subItemsFontStyle = info.type === "xs" ? styles.subItemsFont_xs : {};
    let subItemsContainerStyle = info.type === "xs" ? styles.subItemsContainer_xs : styles.subItemsContainer;

    return (
        <Grid container direction={"column"} sx={{ "padding": "60px 40px 40px 40px" }}>
            <Grid item container direction="column">
                <Typography sx={styles.header}>
                    {info.name}
                </Typography>
                <Typography sx={subHeaderStyle}>
                    {info.profission}
                </Typography>
            </Grid>
            <Grid item sx={subItemsContainerStyle}>
                {info.additionalInfo.map(addInfo => (
                    <Grid item container direction={"row"} sx={styles.subItems} spacing={1}>
                        <Grid item>
                            {addInfo.emoji}
                        </Grid>
                        <Grid item>
                            <Typography sx={subItemsFontStyle}>
                                {addInfo.text}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

const HeaderCellphone = (info: HeaderContent) => {
    return (
        <>
            <Grid sx={styles.mobilePhoto}>
                <Grid sx={styles.centeredPhoto}>
                </Grid>
            </Grid>
            < Paper sx={{ "backgroundColor": "#1b829c", "height": "100%" }}>
                <Content name={info.name} profission={info.profission} additionalInfo={info.additionalInfo} type={"xs"} />
            </Paper>
        </>
    )
};

const HeaderDefault = (info: HeaderContent) => {
    return (
        <Grid container sx={{ "height": "400px" }}>
            <Grid item xl={8} lg={8} md={7} sx={{ "height": "100%", "zIndex": "10" }}>
                <Paper elevation={0} square={true} sx={{ "backgroundColor": "#1b829c", "height": "100%" }}>
                    <Content name={info.name} profission={info.profission} additionalInfo={info.additionalInfo} />
                </Paper>
            </Grid>
            <Grid item xl={4} lg={4} md={5} sx={styles.imageContainer}>
                <div style={styles.diagonalDivisor} />
            </Grid>
        </Grid>
    )
};

const Header = () => {

    let info = {
        name: "Filipe Santiago",
        profission: "Data Scientist & Developer",
        additionalInfo: [
            {
                emoji: <Email />,
                text: "fsantiago.dev@gmail.com"
            },
            {
                emoji: <LocationOn />,
                text: "Niterói, Brasil"
            }
        ]
    }

    return (
        <>
            <Hidden only={["xl", "lg", "md",]}>
                <HeaderCellphone name={info.name} profission={info.profission} additionalInfo={info.additionalInfo} />
            </Hidden>

            <Hidden only={["xs", "sm"]}>
                <HeaderDefault name={info.name} profission={info.profission} additionalInfo={info.additionalInfo} />
            </Hidden>
        </>
    )
}

export default Header;