import React from 'react';

import { Grid, Button, Hidden, Container, Typography, TextField } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import cartoonFooter from '../../assets/cartoonFooter.png'
import './Footer.css'
import styloriLogo from "../../assets/Stylorilogo.svg"
import { API_URL } from 'config'
import { SnackBar } from 'components/snackbarAlert/SnackBar'
const useStyles = makeStyles(theme => ({
    navTitle: {
        cursor: "pointer",
        padding: "7px 0px 6px 0px",
        "&:hover": {
            textDecoration: "underline"
        }
    },
    colorMain: {
        backgroundColor: "#b78231",

    },
    colorWhiteBackground: {
        backgroundColor: theme.palette.common.white,

    },
    colorWhite: {
        color: "white",
        fontSize: '12px',

    },
    colorBlue: {
        color: theme.palette.primary.main,
        fontSize: "11px",
        padding: "0px 0px 10px 0px"
    },
    paddingSpace: {
        padding: '1% 2%',
        [theme.breakpoints.down('sm')]: {
            padding: '0'
        },
    },
    buynowSearch: {
        color: theme.palette.primary.main,
        fontSize: '13px',
        // width: '100%',
        backgroundColor: "#b78231",

        height: '34px',
        border: '1px solid #232a46',
        borderRadius: '0',
        padding: '0px 3px',
    },

    searchButtonFooter: {
        border: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: '10px',
        borderRadius: '0',
        height: '36px',
        width: '100%',
        fontWeight: '400',
        lineHeight: '1.42857143',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '12px',
        },
    },
    spanSizeColor: {
        color: '#808080',
        fontSize: '12px'
    },

    colorWhiteBorder: {
        borderTop: `1px solid ${theme.palette.common.white}`
    },
    topConatinerfooter: {
        color: theme.palette.common.white,
        fontSize: '12px',
        lineHeight: "16px",
        backgroundColor: "#b78231",
        padding: '3% 0px 2% 0px',
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
        },
        [theme.breakpoints.up('sm')]: {
            width: "750px",
            fontSize: '12px',
        },
        [theme.breakpoints.up('md')]: {
            width: "970px",
            fontSize: '13px',
            lineHeight: "19px",
        },
        [theme.breakpoints.up('lg')]: {
            width: "1170px",
            fontSize: '13px',
            lineHeight: "19px",
        }
    },
    buttonConatiner: {
        width: "350px",
        flexGrow: 1
    },
    messageconatainer: {
        padding: "15px 15px 15px 15px",
        [theme.breakpoints.up('sm')]: {
            padding: "30px 15px 15px 15px"
        }
    },
    textFieldEmail : {
    width : "100%",
    backgroundColor : "#fff",
    textAlign : "center",

    }

}));


export default function Footer(props) {
    const silver = props.silver
    const [state, setState] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const [stateClassname, setStateClassname] = React.useState('snackBar')

    const classes = useStyles();
    const footerData = [
        {
            url: "aboutus",
            Title: "About Us"
        },
        {
            url: "/store",
            Title: "Store Locator"
        },
        {
            url: "/contactus",
            Title: "Contact"
        },
        {
            url: "/privacy",
            Title: "Privacy Policy"
        },

    ]
    const footerData1 = [
        {
            url: "/aboutus",
            Title: "About Us"
        },
        {
            url: "/careers",
            Title: "Careers"
        },
        {
            url: "/newsroom",
            Title: "News Room"
        },
        {
            url: "/advertising",
            Title: "Advertising"
        },
    ]
    const footerData2 = [
        {
            url: "/store",
            Title: "Store Locator"
        },
        {
            url: "/education",
            Title: "Education"
        },
        {
            url: "/sitemap",
            Title: "Sitemap"
        },
        {
            url: "/contactus",
            Title: "Contact"
        },
    ]
    const footerData3 = [
        {
            url: "/temple-work",
            Title: "Temple Work"
        },
        {
            url: "/termsconditions",
            Title: "Terms & Conditions"
        },
        {
            url: "/faqs",
            Title: "FAQ"
        },
        {
            url: "/return",
            Title: "30 Day Return"
        },
    ]
    const footerData4 = [
        {
            url: "/delivery",
            Title: "Delivery Info"
        },
        {
            url: "/privacy",
            Title: "Privacy Policy"
        },
        {
            url: "",
            Title: "360 ° Store View"
        },
        {
            url: "",
            Title: "Track Order"
        },
    ]
    const status = (response) => {

        if ((response.status >= 200 && response.status < 300) || response.status === 409) {
            if (response.status === 409) setStateClassname('snackBarError')
            else setStateClassname('snackBar')
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    const json = (response) => {
        return response.json()
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleChage = (e) => {
        setState(e.target.value)
        var element = document.getElementById('_button');
        var element_input = document.getElementById('_input');
        element_input.classList.remove('error');
        element.classList.remove('error');
    }
    const handleEmail = (e) => {

        var element = document.getElementById('_button');
        var element_input = document.getElementById('_input');
        element_input.classList.remove('error');
        element.classList.remove('error');
        var emailvld = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!document.getElementById("_input").value.length > 0) {
            element_input.classList.add('error');
            element.classList.add('error');
            return
        }
        else if (!Boolean(document.getElementById("_input").value.match(emailvld))) {
            element_input.classList.add('error');
            element.classList.add('error');
            return
        }

        else if (document.getElementById("_input").value.length > 0 && document.getElementById("_input").value.match(emailvld)) {
            fetch(`${API_URL}/addemailsubscription`, {

                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: state
                })
            })
                .then(status)
                .then(json).then(async val => {

                    setMessage(val.message)
                    setOpen(true)
                })

        }


    }
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: '20px', backgroundColor: "#b78231" }}
        >
            <Hidden only={['sm', 'xs']}>
                {/* <Grid className={"containlarge"}>
                   
                    <Grid container item style={{ padding: '15px 0px 15px 0px' }}>
                       
                        <Grid container item xs={4} className={classes.topConatinerfooter} >
                        <Grid container item className={classes.buttonConatiner} xs={7}>
                            <Grid item style={{ width: "260px" }}>
                                <input
                                    value={state}
                                    id="_input"
                                    style={{ width: "255px" }}
                                    type="email"
                                    onInvalid={(e) => { e.preventDefault() }}
                                    onChange={(e) => handleChage(e)}
                                    placeholder='Email address'
                                    className={`${classes.buynowSearch}`}
                                />
                            </Grid>
                            <Grid item>
                                <Button type="submit" id="_button" className={`${classes.searchButtonFooter}`} onClick={(e) => { return handleEmail(e) }}>Stay Informed</Button>
                            </Grid>
                        </Grid>
                        <Grid xs={5} item container style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: "10px" }} className="footer-icons">
                            <Grid item style={{ width: "100%", textAlign: "end" }}>
                                <a style={{ textDecoration: "none" }} target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '3px', }} className="fa">&#xf099;</i> </a>
                                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf09a;</i></a>
                                <a target="_blank" href="https://in.pinterest.com/stylori2015/">
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf231;</i></a>
                                <a target="_blank" href="https://instagram.com/stylorilove">
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf16d;</i></a>
                                <a target="_blank" href="https://www.youtube.com/c/stylori">
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf167;</i></a>
                            </Grid>
                        </Grid>

                    </Grid>
                    </Grid>
                </Grid>
  */}
 <Container >
 <Grid container item xs={12} style={{marginTop:20}}>
 <Grid container item xs={8} alignItems="center">
                            <Grid container item xs={12} style={{ color: 'white', fontSize: '13px' }}>
                                <Grid item xs={3}>
                                    {footerData1.map(data => {
                                        return (
                                            <>{localStorage.getItem("true") ? <Grid container className={classes.navTitle} onClick={() => { window.location.href = data.url }} href="#">
                                                {data.Title}
                                            </Grid> :
                                                <Grid container className={classes.navTitle} onClick={data.url == "/account-profile" ? "" : () => { window.location.href = data.url }} href="#">
                                                    {data.Title}
                                                </Grid>
                                            }</ >

                                        )
                                    })}
                                </Grid>
                                <Grid item xs={3}>
                                    {footerData2.map(data => {
                                        return (
                                            <Grid container className={classes.navTitle} onClick={() => { window.location.href = data.url }} href="#">
                                                {data.Title}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                                <Grid item xs={3}>
                                    {footerData3.map(data => {
                                        return (
                                            <Grid container className={classes.navTitle} onClick={() => { window.location.href = data.url }} href="#">
                                                {data.Title}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                                <Grid item xs={3}>
                                    {footerData4.map(data => {
                                        return (
                                            <Grid container className={classes.navTitle} onClick={() => { window.location.href = data.url }} href="#">
                                                {data.Title}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                            <Hidden smDown>
                <Grid container item = {4} style={{ display: 'flex', justifyContent: 'center', padding: "10px 0px" }} >
                    <Grid container className={classes.colorMain}>
                        <Grid item className={"imageClass"}>
                            < img src={"https://assets.stylori.com/images/static/footer.png"} style={{ width: "100%", height: "auto" }} />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.colorMain} item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'white', fontSize: '11px', padding: "8px 0px" }}>
                        {/* <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiIHZpZXdCb3g9Ii0zLjI3NyAtMy4wNjkgMzAgMzAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTMuMjc3IC0zLjA2OSAzMCAzMCINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZGVmcz4NCjwvZGVmcz4NCjxwYXRoIGZpbGw9IiM0MzRFNzciIGQ9Ik0xLjk1MywxNi43NzdjMC4zOTksMC43NTYtMC41NTQsMS4xOC0wLjg1NywwLjY4Yy0wLjMxOC0wLjUyOSwwLjQwMS0wLjczMywwLjQwMS0wLjczMw0KCWMtMC4zNjYtMC4zNDctMC44MTMtMC4wNTgtMC45NjcsMC4yMzFjLTAuMTU1LDAuMjg3LTAuNTAyLDEuMzkxLDAuNjExLDEuNzY5YzEuMTExLDAuMzc2LDIuMDQ1LTAuOCwyLjI0Ny0xLjQ3DQoJYzAuMTI5LTAuNDM0LDAuMzcxLTIuMDM1LDAuNTg0LTMuMDg2YzAuMjk4LTEuNDc1LDIuNDUxLTEuMjg2LDQuMTYxLTEuMzI2YzEuMjcyLTAuMDI5LDEuODQ2LDAuMzYzLDEuOTY2LDAuNDU5DQoJYzAuMDE2LDAuMDEyLDAuMDI5LDAuMDI5LDAuMDQyLDAuMDQzYzAuMDk2LDAuMTIsMC40ODgsMC42OTUsMC40NTgsMS45NjdjLTAuMDM3LDEuNzA5LDAuMTUxLDMuODYxLTEuMzI1LDQuMTYNCgljLTEuMDUsMC4yMTMtMi42NTEsMC40NTUtMy4wODYsMC41ODdjLTAuNjY3LDAuMTk5LTEuODQ0LDEuMTMyLTEuNDY3LDIuMjQzczEuNDc3LDAuNzY4LDEuNzY2LDAuNjExDQoJYzAuMjg5LTAuMTU1LDAuNTc5LTAuNiwwLjIzNi0wLjk2NWMwLDAtMC4yMDksMC43MTUtMC43MzYsMC4zOThjLTAuNTAyLTAuMzAxLTAuMDc3LTEuMjU3LDAuNjc4LTAuODU3DQoJYzAuNzU2LDAuNDA0LDAuNzMzLDEuMzA5LTAuMDQzLDEuNzM1Yy0wLjc5LDAuNDM1LTIuMDksMC4zMzQtMi40NTYtMS4zNjZjLTAuMzY0LTEuNjg5LDEuNTMzLTIuNjg5LDIuNzg4LTMuMDMzDQoJYzEuMTY1LTAuMzIyLDEuOTY1LTAuNTU3LDIuMjUxLTEuODY1YzAuMzEtMS40MjYsMC43MTEtMi4zNjMsMC4xNzYtMi44OTZjLTAuNTMyLTAuNTM1LTEuNTAzLTAuMTA3LTIuODk4LDAuMTc2DQoJYy0xLjMxMywwLjI2OS0xLjU0MiwxLjA4Mi0xLjg2MSwyLjI1Yy0wLjM0OCwxLjI1OC0xLjM0OSwzLjE1Mi0zLjAzNSwyLjc5MWMtMS43MDItMC4zNjctMS44MDEtMS42NjgtMS4zNjgtMi40NTcNCglDMC42NDUsMTYuMDQ1LDEuNTUzLDE2LjAyMywxLjk1MywxNi43NzciLz4NCjxwYXRoIGZpbGw9IiM0MzRFNzciIGQ9Ik01LjM4MywxOS42NjJsMC4wNDYsMC4wNDdsLTAuNDU1LDAuNDUzbC0wLjQ0LDAuNDQxbC0wLjA0NS0wLjA0NWMwLDAsMC4xODItMC4zNjEtMC4xMjctMC42NjhsLTAuNzkzLTAuNzk3DQoJYzAsMC0wLjM2Ni0wLjM2My0wLjcwMy0wLjE2bC0wLjA4Mi0wLjA4M2wwLjQzNy0wLjQ0bDAuNDU1LTAuNDU1bDAuMDg1LDAuMDg0Yy0wLjIwNCwwLjMzNiwwLjE2MSwwLjcwMSwwLjE2MSwwLjcwMWwwLjc5NCwwLjc5NQ0KCUM1LjAyNywxOS44NDYsNS4zODMsMTkuNjYyLDUuMzgzLDE5LjY2MiIvPg0KPHBhdGggZmlsbD0iIzQzNEU3NyIgZD0iTTE3LjA0MSwyMS40ODhjMC43NTctMC4zOTgsMS4xODIsMC41NTcsMC42OCwwLjg1N2MtMC41MjcsMC4zMTYtMC43MzQtMC4zOTgtMC43MzQtMC4zOTgNCgljLTAuMzQzLDAuMzY1LTAuMDU2LDAuODA5LDAuMjM0LDAuOTY1YzAuMjg5LDAuMTU2LDEuMzg5LDAuNSwxLjc2OC0wLjYxMmMwLjM3Ny0xLjExLTAuODAyLTIuMDQ0LTEuNDY4LTIuMjQyDQoJYy0wLjQzNS0wLjEzMi0yLjAzOC0wLjM3NC0zLjA4Ny0wLjU4N2MtMS40NzYtMC4yOTktMS4yODctMi40NTEtMS4zMjYtNC4xNmMtMC4wMjgtMS4yNzEsMC4zNjMtMS44NDYsMC40NTYtMS45NjgNCgljMC4wMTUtMC4wMTMsMC4wMy0wLjAzLDAuMDQ3LTAuMDQzYzAuMTE5LTAuMDk1LDAuNjkyLTAuNDg3LDEuOTY0LTAuNDU4YzEuNzExLDAuMDM5LDMuODYzLTAuMTQ4LDQuMTYxLDEuMzI2DQoJYzAuMjEyLDEuMDUsMC40NTUsMi42NTIsMC41ODYsMy4wODZjMC4yLDAuNjcsMS4xMzMsMS44NDYsMi4yNDUsMS40N2MxLjExMi0wLjM3OCwwLjc2Ny0xLjQ4MSwwLjYxMS0xLjc2OQ0KCWMtMC4xNTUtMC4yODktMC42LTAuNTc4LTAuOTY2LTAuMjMxYzAsMCwwLjcxOCwwLjIwNCwwLjQsMC43MzNjLTAuMzAzLDAuNS0xLjI1OCwwLjA3Ni0wLjg1Ny0wLjY4DQoJYzAuNC0wLjc1NCwxLjMwOC0wLjczMiwxLjczNCwwLjA0NWMwLjQzNSwwLjc4OSwwLjMzNSwyLjA5LTEuMzY2LDIuNDU3Yy0xLjY4NywwLjM2MS0yLjY5LTEuNTMzLTMuMDM2LTIuNzkxDQoJYy0wLjMxOS0xLjE2OC0wLjU1NS0xLjk2My0xLjg2Mi0yLjI1Yy0xLjMyOC0wLjI5MS0yLjM2NS0wLjcxMS0yLjktMC4xNzZjLTAuNTMxLDAuNTMzLTAuMjQ0LDEuNjQzLDAuMDM5LDMuMDM3DQoJYzAuMjY2LDEuMzExLDEuMjI0LDEuNDAyLDIuMzg5LDEuNzI1YzEuMjU3LDAuMzQ0LDMuMTU0LDEuMzQ0LDIuNzkxLDMuMDMzYy0wLjM2NiwxLjctMS42NjcsMS44MDEtMi40NTUsMS4zNjYNCglDMTYuMzEsMjIuNzk3LDE2LjI4NywyMS44OTMsMTcuMDQxLDIxLjQ4OCIvPg0KPHBhdGggZmlsbD0iIzQzNEU3NyIgZD0iTTYuNjY1LDEuOTUxYy0wLjc1NSwwLjQtMS4xOC0wLjU1My0wLjY3OC0wLjg1NWMwLjUyNy0wLjMxNiwwLjczNiwwLjQsMC43MzYsMC40DQoJYzAuMzQzLTAuMzY1LDAuMDUzLTAuODEzLTAuMjM2LTAuOTY5Yy0wLjI4OS0wLjE1NC0xLjM4OS0wLjUtMS43NjYsMC42MTJjLTAuMzc3LDEuMTEyLDAuOCwyLjA0NCwxLjQ2NywyLjI0NQ0KCWMwLjQzNSwwLjEzMiwyLjAzNywwLjM3MywzLjA4NiwwLjU4NEMxMC43NSw0LjI3LDEwLjU2Miw2LjQyMiwxMC42LDguMTMxYzAuMDI5LDEuMjcxLTAuMzYzLDEuODQ4LTAuNDU4LDEuOTY4DQoJYy0wLjAxNCwwLjAxMy0wLjAyNywwLjAzLTAuMDQzLDAuMDQyYy0wLjEyLDAuMDk2LTAuNjk0LDAuNDg4LTEuOTY2LDAuNDU5Yy0xLjcxLTAuMDM5LTMuODYzLDAuMTQ4LTQuMTYxLTEuMzI2DQoJYy0wLjIxMy0xLjA1LTAuNDU0LTIuNjUyLTAuNTg0LTMuMDlDMy4xODYsNS41MiwyLjI1Miw0LjM0MiwxLjE0MSw0LjcxOUMwLjAyOCw1LjA5NiwwLjM3NSw2LjE5NywwLjUzLDYuNDg2DQoJYzAuMTU1LDAuMjg5LDAuNjAxLDAuNTc4LDAuOTY3LDAuMjMyYzAsMC0wLjcxOS0wLjIwNS0wLjQwMS0wLjczNGMwLjMwMy0wLjUsMS4yNTctMC4wNzYsMC44NTcsMC42OA0KCWMtMC40LDAuNzU0LTEuMzA4LDAuNzM0LTEuNzM0LTAuMDQ1Yy0wLjQzMy0wLjc4OS0wLjMzNC0yLjA5LDEuMzY4LTIuNDU3YzEuNjg2LTAuMzYzLDIuNjg3LDEuNTM1LDMuMDM1LDIuNzkxDQoJYzAuMzE5LDEuMTY2LDAuNTU1LDEuOTUzLDEuODYxLDIuMjVDNy43OTEsOS41LDguODQ5LDkuOTE0LDkuMzgxLDkuMzgxYzAuNTM1LTAuNTM1LDAuMTQ0LTEuNTA4LTAuMTc2LTIuODk4DQoJQzguOTAyLDUuMTc2LDguMTE5LDQuOTM4LDYuOTU0LDQuNjE5QzUuNjk5LDQuMjczLDMuODAyLDMuMjcxLDQuMTY2LDEuNTg0YzAuMzY2LTEuNjk5LDEuNjY2LTEuNzk5LDIuNDU2LTEuMzY3DQoJQzcuMzk4LDAuNjQzLDcuNDIxLDEuNTUxLDYuNjY1LDEuOTUxIi8+DQo8cGF0aCBmaWxsPSIjNDM0RTc3IiBkPSJNMjEuNzU1LDYuNjY0Yy0wLjQtMC43NTYsMC41NTQtMS4xOCwwLjg1Ny0wLjY4YzAuMzE4LDAuNTMtMC40LDAuNzM0LTAuNCwwLjczNA0KCWMwLjM2NiwwLjM0NiwwLjgxMiwwLjA1NywwLjk2Ni0wLjIzMmMwLjE1Ni0wLjI4OSwwLjUwMS0xLjM5MS0wLjYxMS0xLjc2OHMtMi4wNDQsMC44MDEtMi4yNDUsMS40NjUNCgljLTAuMTMsMC40MzgtMC4zNzQsMi4wNC0wLjU4NiwzLjA5Yy0wLjI5NywxLjQ3NS0yLjQ1LDEuMjg2LTQuMTYxLDEuMzI2Yy0xLjI3MiwwLjAyOS0xLjg0NC0wLjM2My0xLjk2NC0wLjQ1OQ0KCWMtMC4wMTctMC4wMTItMC4wMzItMC4wMjktMC4wNDYtMC4wNDJjLTAuMDk0LTAuMTItMC40ODUtMC42OTYtMC40NTYtMS45NjhjMC4wMzktMS43MDktMC4xNTEtMy44NjEsMS4zMjUtNC4xNjINCgljMS4wNS0wLjIxMSwyLjY1Mi0wLjQ1MiwzLjA4OC0wLjU4NGMwLjY2NS0wLjIwMSwxLjg0NC0xLjEzMywxLjQ2Ny0yLjI0NWMtMC4zNzktMS4xMTItMS40NzktMC43NjctMS43NjgtMC42MTINCgljLTAuMjksMC4xNTYtMC41NzcsMC42MDQtMC4yMzQsMC45NjljMCwwLDAuMjA3LTAuNzE3LDAuNzM0LTAuNGMwLjUwMiwwLjMwMywwLjA3NywxLjI1Ny0wLjY4LDAuODU1DQoJYy0wLjc1NC0wLjQtMC43MzEtMS4zMDksMC4wNDgtMS43MzRjMC43ODgtMC40MzIsMi4wODktMC4zMzIsMi40NTUsMS4zNjdjMC4zNjMsMS42ODgtMS41MzQsMi42ODktMi43OTEsMy4wMzUNCgljLTEuMTY1LDAuMzE4LTEuOTM0LDAuNTY0LTIuMjQ3LDEuODYzYy0wLjMzMiwxLjM1NS0wLjcxMiwyLjM2My0wLjE4MSwyLjg5OGMwLjUzNSwwLjUzMywxLjUwNSwwLjEwNywyLjktMC4xNzgNCgljMS4zMTEtMC4yNjksMS41NDMtMS4wODQsMS44NjItMi4yNWMwLjM0Ni0xLjI1NiwxLjM0OS0zLjE1NCwzLjAzNi0yLjc5MWMxLjcwMSwwLjM2NywxLjgwMSwxLjY2OCwxLjM2NiwyLjQ1Nw0KCUMyMy4wNjQsNy4zOTgsMjIuMTU1LDcuNDE4LDIxLjc1NSw2LjY2NCIvPg0KPHBhdGggZmlsbD0iIzQzNEU3NyIgZD0iTTE4LjMyNSwzLjc4MUwxOC4yOCwzLjczNGwwLjQ1NS0wLjQ1NWwwLjQzOC0wLjQzOGwwLjA0OCwwLjA0NWMwLDAtMC4xODQsMC4zNTcsMC4xMjUsMC42NjZsMC43OTQsMC43OTMNCgljMCwwLDAuMzY1LDAuMzY3LDAuNzAxLDAuMTYybDAuMDg1LDAuMDg0bC0wLjQzOSwwLjQzOWwtMC40NTQsMC40NTVMMTkuOTQ4LDUuNGMwLjIwMi0wLjMzNi0wLjE2MS0wLjY5OS0wLjE2MS0wLjY5OWwtMC43OTUtMC43OTUNCglDMTguNjgzLDMuNTk5LDE4LjMyNSwzLjc4MSwxOC4zMjUsMy43ODEiLz4NCjxwYXRoIGZpbGw9IiM0MzRFNzciIGQ9Ik0xMS44NTgsNi4wOWMtMC43MTQsMC0xLjI5NSwwLjU4LTEuMjk1LDEuMjk3djEuMTk5YzAtMC43MTcsMC41ODEtMS4yOTcsMS4yOTUtMS4yOTcNCgljMC43MTksMCwxLjI5OCwwLjU4LDEuMjk4LDEuMjk3VjcuMzg3QzEzLjE1Niw2LjY3LDEyLjU3Nyw2LjA5LDExLjg1OCw2LjA5Ii8+DQo8cGF0aCBmaWxsPSIjNDM0RTc3IiBkPSJNMTEuODU4LDE3LjQzYzAuNzE5LDAsMS4yOTgtMC41OCwxLjI5OC0xLjI5NXYtMS4xOTljMCwwLjcxMy0wLjU3OSwxLjI5My0xLjI5OCwxLjI5Mw0KCWMtMC43MTQsMC0xLjI5NS0wLjU4LTEuMjk1LTEuMjkzdjEuMTk5QzEwLjU2MywxNi44NSwxMS4xNDUsMTcuNDMsMTEuODU4LDE3LjQzIi8+DQo8cGF0aCBmaWxsPSIjNDM0RTc3IiBkPSJNNi4xOSwxMS43NThjMCwwLjcxNywwLjU3OSwxLjI5NywxLjI5NSwxLjI5N2gxLjIwMWMtMC43MTgsMC0xLjI5OC0wLjU4LTEuMjk4LTEuMjk3DQoJYzAtMC43MTUsMC41OC0xLjI5NSwxLjI5OC0xLjI5NUg3LjQ4NUM2Ljc3LDEwLjQ2Myw2LjE5LDExLjA0Myw2LjE5LDExLjc1OCIvPg0KPHBhdGggZmlsbD0iIzQzNEU3NyIgZD0iTTE3LjUzMiwxMS43NThjMC0wLjcxNS0wLjU4Mi0xLjI5NS0xLjI5OS0xLjI5NWgtMS4yYzAuNzE4LDAsMS4yOTgsMC41OCwxLjI5OCwxLjI5NQ0KCWMwLDAuNzE3LTAuNTgsMS4yOTctMS4yOTgsMS4yOTdoMS4yQzE2Ljk1LDEzLjA1NSwxNy41MzIsMTIuNDc1LDE3LjUzMiwxMS43NTgiLz4NCjxwb2x5Z29uIGZpbGw9IiM0MzRFNzciIHBvaW50cz0iMTMuMDI2LDAgMTEuODU0LDAgMTAuNjg0LDAgMTAuMTU3LDAuNzQ4IDExLjg1NCwyLjQ0MyAxMy41NDksMC43NDggIi8+DQo8cG9seWdvbiBmaWxsPSIjNDM0RTc3IiBwb2ludHM9IjEzLjAyNiwyMC45OTYgMTEuODU0LDIwLjk5NiAxMC42ODQsMjAuOTk2IDEwLjE1NywyMS43NDYgMTEuODU0LDIzLjQ0MyAxMy41NDksMjEuNzQ2ICIvPg0KPHBvbHlnb24gZmlsbD0iIzQzNEU3NyIgcG9pbnRzPSIyMy4xODMsMTAuNTM3IDIyLjAxMSwxMC41MzcgMjAuODM4LDEwLjUzNyAyMC4zMTUsMTEuMjg3IDIyLjAxMSwxMi45ODIgMjMuNzA2LDExLjI4NyAiLz4NCjxwb2x5Z29uIGZpbGw9IiM0MzRFNzciIHBvaW50cz0iMi44NjcsMTAuNTM3IDEuNjk3LDEwLjUzNyAwLjUyNywxMC41MzcgMCwxMS4yODcgMS42OTcsMTIuOTgyIDMuMzk0LDExLjI4NyAiLz4NCjwvc3ZnPg0K" data-reactid="523"> */}
                        {/* </img> */}
                          ©  NAC Jewellers Pvt.Ltd. All rights reserved.
                    </Grid>
                </Grid>
            </Hidden>
                        </Grid>
 <Grid container item xs={4} >
    <Grid container item xs={12}>
    <Grid item xs={12} style={{  width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
     <TextField id="standard-basic" placeholder="Enter email id to receive updates on NAC"  className={classes.textFieldEmail} />
   
     </Grid>
     <Grid  item xs={12} style={{textAlign:'right'}}>
<Button variant="contained" color="secondary" style={{boxShadow:'rgba(20, 25, 25, 0.32) 6px 7px 6px'}}>
  Sign Up
</Button>
</Grid>
    </Grid>

    <Grid xs={12} item container style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: "10px" }} className="footer-icons">
                            <Grid item style={{ width: "100%", textAlign: "end" }}>
                                <a style={{ textDecoration: "none" }} target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '3px', }} className="fa">&#xf099;</i> </a>
                                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf09a;</i></a>
                                <a target="_blank" href="https://in.pinterest.com/stylori2015/">
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf231;</i></a>
                                <a target="_blank" href="https://instagram.com/stylorilove">
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf16d;</i></a>
                                <a target="_blank" href="https://www.youtube.com/c/stylori">
                                    <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '5%' }} className="fa ">&#xf167;</i></a>
                            </Grid>
                            </Grid>

 </Grid>

 </Grid>
            
 </Container>
            </Hidden>
            <Hidden only={['lg', 'xl', 'md']} >
                <Grid container item className={classes.topConatinerfooter} xs={12} >
                    <Grid container className={classes.messageconatainer}>
                        <Grid container style={{ display: 'flex', justifyContent: 'center', padding: "6px 0px 0px 0px" }}>
                            <Grid item >
                                <input
                                    value={state}
                                    id="_input"
                                    type="email"
                                    onInvalid={(e) => { e.preventDefault() }}
                                    // ref={this._inputRef}
                                    onChange={(e) => handleChage(e)}
                                    placeholder='Email address'
                                    className={`${classes.buynowSearch}`}
                                />
                            </Grid>
                            <Grid item >
                                <Button type="submit" id="_button" className={`${classes.searchButtonFooter}`} onClick={(e) => handleEmail(e)}>Stay Informed</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} className={`${classes.colorWhite} ${classes.colorMain}`} style={{ padding: '0px 15px 15px 15px', lineHeight: "16px" }}>
                        <Grid item xs={12} sm={12} className="footer-icons" style={{ paddingTop: "6px", display: 'flex', justifyContent: 'center' }}>
                            <a class="valuesallow" style={{ textDecoration: "none" }} target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
                                <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '3px', }} className="fa">&#xf099;</i> </a>
                            <a class="valuesallow" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '7%' }} className="fa ">&#xf09a;</i></a>
                            <a class="valuesallow" target="_blank" href="https://in.pinterest.com/stylori2015/">
                                <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '7%' }} className="fa ">&#xf231;</i></a>
                            <a class="valuesallow" target="_blank" href="https://instagram.com/stylorilove">
                                <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '7%' }} className="fa ">&#xf16d;</i></a>
                            <a class="valuesallow" target="_blank" href="https://www.youtube.com/c/stylori">
                                <i style={{ fontSize: '24px', color: '#434e77', paddingLeft: '7%' }} className="fa ">&#xf167;</i></a>
                        </Grid>
                    </Grid>

                    <Grid container item xl={5} lg={5} md={5} xs={12} sm={12}>
                        <Grid container item xs={12} style={{ backgroundColor: 'colorMain', fontSize: '12px' }} alignItems="center" className={`${classes.colorWhite}`}>
                            {
                                footerData.map(data => {
                                    return (
                                        <Grid item xs={12} sm={12} container justify="center" style={{ padding: '2px 0px 8px 0px' }} onClick={() => { window.location.href = data.url }} href="#">
                                            {data.Title}
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className={classes.colorMain}>
                    <Grid item className={"imageClass"}>
                        < img src={"https://assets.stylori.com/images/static/footer.png"} style={{ width: "100%", height: "auto" }} />
                    </Grid>
                </Grid>
                <Grid container className={classes.colorMain} item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '11px', padding: "8px 0px" }}>
                    {/* <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiIHZpZXdCb3g9Ii0zLjI3NyAtMy4wNjkgMzAgMzAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTMuMjc3IC0zLjA2OSAzMCAzMCINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZGVmcz4NCjwvZGVmcz4NCjxwYXRoIGZpbGw9IiM0MzRFNzciIGQ9Ik0xLjk1MywxNi43NzdjMC4zOTksMC43NTYtMC41NTQsMS4xOC0wLjg1NywwLjY4Yy0wLjMxOC0wLjUyOSwwLjQwMS0wLjczMywwLjQwMS0wLjczMw0KCWMtMC4zNjYtMC4zNDctMC44MTMtMC4wNTgtMC45NjcsMC4yMzFjLTAuMTU1LDAuMjg3LTAuNTAyLDEuMzkxLDAuNjExLDEuNzY5YzEuMTExLDAuMzc2LDIuMDQ1LTAuOCwyLjI0Ny0xLjQ3DQoJYzAuMTI5LTAuNDM0LDAuMzcxLTIuMDM1LDAuNTg0LTMuMDg2YzAuMjk4LTEuNDc1LDIuNDUxLTEuMjg2LDQuMTYxLTEuMzI2YzEuMjcyLTAuMDI5LDEuODQ2LDAuMzYzLDEuOTY2LDAuNDU5DQoJYzAuMDE2LDAuMDEyLDAuMDI5LDAuMDI5LDAuMDQyLDAuMDQzYzAuMDk2LDAuMTIsMC40ODgsMC42OTUsMC40NTgsMS45NjdjLTAuMDM3LDEuNzA5LDAuMTUxLDMuODYxLTEuMzI1LDQuMTYNCgljLTEuMDUsMC4yMTMtMi42NTEsMC40NTUtMy4wODYsMC41ODdjLTAuNjY3LDAuMTk5LTEuODQ0LDEuMTMyLTEuNDY3LDIuMjQzczEuNDc3LDAuNzY4LDEuNzY2LDAuNjExDQoJYzAuMjg5LTAuMTU1LDAuNTc5LTAuNiwwLjIzNi0wLjk2NWMwLDAtMC4yMDksMC43MTUtMC43MzYsMC4zOThjLTAuNTAyLTAuMzAxLTAuMDc3LTEuMjU3LDAuNjc4LTAuODU3DQoJYzAuNzU2LDAuNDA0LDAuNzMzLDEuMzA5LTAuMDQzLDEuNzM1Yy0wLjc5LDAuNDM1LTIuMDksMC4zMzQtMi40NTYtMS4zNjZjLTAuMzY0LTEuNjg5LDEuNTMzLTIuNjg5LDIuNzg4LTMuMDMzDQoJYzEuMTY1LTAuMzIyLDEuOTY1LTAuNTU3LDIuMjUxLTEuODY1YzAuMzEtMS40MjYsMC43MTEtMi4zNjMsMC4xNzYtMi44OTZjLTAuNTMyLTAuNTM1LTEuNTAzLTAuMTA3LTIuODk4LDAuMTc2DQoJYy0xLjMxMywwLjI2OS0xLjU0MiwxLjA4Mi0xLjg2MSwyLjI1Yy0wLjM0OCwxLjI1OC0xLjM0OSwzLjE1Mi0zLjAzNSwyLjc5MWMtMS43MDItMC4zNjctMS44MDEtMS42NjgtMS4zNjgtMi40NTcNCglDMC42NDUsMTYuMDQ1LDEuNTUzLDE2LjAyMywxLjk1MywxNi43NzciLz4NCjxwYXRoIGZpbGw9IiM0MzRFNzciIGQ9Ik01LjM4MywxOS42NjJsMC4wNDYsMC4wNDdsLTAuNDU1LDAuNDUzbC0wLjQ0LDAuNDQxbC0wLjA0NS0wLjA0NWMwLDAsMC4xODItMC4zNjEtMC4xMjctMC42NjhsLTAuNzkzLTAuNzk3DQoJYzAsMC0wLjM2Ni0wLjM2My0wLjcwMy0wLjE2bC0wLjA4Mi0wLjA4M2wwLjQzNy0wLjQ0bDAuNDU1LTAuNDU1bDAuMDg1LDAuMDg0Yy0wLjIwNCwwLjMzNiwwLjE2MSwwLjcwMSwwLjE2MSwwLjcwMWwwLjc5NCwwLjc5NQ0KCUM1LjAyNywxOS44NDYsNS4zODMsMTkuNjYyLDUuMzgzLDE5LjY2MiIvPg0KPHBhdGggZmlsbD0iIzQzNEU3NyIgZD0iTTE3LjA0MSwyMS40ODhjMC43NTctMC4zOTgsMS4xODIsMC41NTcsMC42OCwwLjg1N2MtMC41MjcsMC4zMTYtMC43MzQtMC4zOTgtMC43MzQtMC4zOTgNCgljLTAuMzQzLDAuMzY1LTAuMDU2LDAuODA5LDAuMjM0LDAuOTY1YzAuMjg5LDAuMTU2LDEuMzg5LDAuNSwxLjc2OC0wLjYxMmMwLjM3Ny0xLjExLTAuODAyLTIuMDQ0LTEuNDY4LTIuMjQyDQoJYy0wLjQzNS0wLjEzMi0yLjAzOC0wLjM3NC0zLjA4Ny0wLjU4N2MtMS40NzYtMC4yOTktMS4yODctMi40NTEtMS4zMjYtNC4xNmMtMC4wMjgtMS4yNzEsMC4zNjMtMS44NDYsMC40NTYtMS45NjgNCgljMC4wMTUtMC4wMTMsMC4wMy0wLjAzLDAuMDQ3LTAuMDQzYzAuMTE5LTAuMDk1LDAuNjkyLTAuNDg3LDEuOTY0LTAuNDU4YzEuNzExLDAuMDM5LDMuODYzLTAuMTQ4LDQuMTYxLDEuMzI2DQoJYzAuMjEyLDEuMDUsMC40NTUsMi42NTIsMC41ODYsMy4wODZjMC4yLDAuNjcsMS4xMzMsMS44NDYsMi4yNDUsMS40N2MxLjExMi0wLjM3OCwwLjc2Ny0xLjQ4MSwwLjYxMS0xLjc2OQ0KCWMtMC4xNTUtMC4yODktMC42LTAuNTc4LTAuOTY2LTAuMjMxYzAsMCwwLjcxOCwwLjIwNCwwLjQsMC43MzNjLTAuMzAzLDAuNS0xLjI1OCwwLjA3Ni0wLjg1Ny0wLjY4DQoJYzAuNC0wLjc1NCwxLjMwOC0wLjczMiwxLjczNCwwLjA0NWMwLjQzNSwwLjc4OSwwLjMzNSwyLjA5LTEuMzY2LDIuNDU3Yy0xLjY4NywwLjM2MS0yLjY5LTEuNTMzLTMuMDM2LTIuNzkxDQoJYy0wLjMxOS0xLjE2OC0wLjU1NS0xLjk2My0xLjg2Mi0yLjI1Yy0xLjMyOC0wLjI5MS0yLjM2NS0wLjcxMS0yLjktMC4xNzZjLTAuNTMxLDAuNTMzLTAuMjQ0LDEuNjQzLDAuMDM5LDMuMDM3DQoJYzAuMjY2LDEuMzExLDEuMjI0LDEuNDAyLDIuMzg5LDEuNzI1YzEuMjU3LDAuMzQ0LDMuMTU0LDEuMzQ0LDIuNzkxLDMuMDMzYy0wLjM2NiwxLjctMS42NjcsMS44MDEtMi40NTUsMS4zNjYNCglDMTYuMzEsMjIuNzk3LDE2LjI4NywyMS44OTMsMTcuMDQxLDIxLjQ4OCIvPg0KPHBhdGggZmlsbD0iIzQzNEU3NyIgZD0iTTYuNjY1LDEuOTUxYy0wLjc1NSwwLjQtMS4xOC0wLjU1My0wLjY3OC0wLjg1NWMwLjUyNy0wLjMxNiwwLjczNiwwLjQsMC43MzYsMC40DQoJYzAuMzQzLTAuMzY1LDAuMDUzLTAuODEzLTAuMjM2LTAuOTY5Yy0wLjI4OS0wLjE1NC0xLjM4OS0wLjUtMS43NjYsMC42MTJjLTAuMzc3LDEuMTEyLDAuOCwyLjA0NCwxLjQ2NywyLjI0NQ0KCWMwLjQzNSwwLjEzMiwyLjAzNywwLjM3MywzLjA4NiwwLjU4NEMxMC43NSw0LjI3LDEwLjU2Miw2LjQyMiwxMC42LDguMTMxYzAuMDI5LDEuMjcxLTAuMzYzLDEuODQ4LTAuNDU4LDEuOTY4DQoJYy0wLjAxNCwwLjAxMy0wLjAyNywwLjAzLTAuMDQzLDAuMDQyYy0wLjEyLDAuMDk2LTAuNjk0LDAuNDg4LTEuOTY2LDAuNDU5Yy0xLjcxLTAuMDM5LTMuODYzLDAuMTQ4LTQuMTYxLTEuMzI2DQoJYy0wLjIxMy0xLjA1LTAuNDU0LTIuNjUyLTAuNTg0LTMuMDlDMy4xODYsNS41MiwyLjI1Miw0LjM0MiwxLjE0MSw0LjcxOUMwLjAyOCw1LjA5NiwwLjM3NSw2LjE5NywwLjUzLDYuNDg2DQoJYzAuMTU1LDAuMjg5LDAuNjAxLDAuNTc4LDAuOTY3LDAuMjMyYzAsMC0wLjcxOS0wLjIwNS0wLjQwMS0wLjczNGMwLjMwMy0wLjUsMS4yNTctMC4wNzYsMC44NTcsMC42OA0KCWMtMC40LDAuNzU0LTEuMzA4LDAuNzM0LTEuNzM0LTAuMDQ1Yy0wLjQzMy0wLjc4OS0wLjMzNC0yLjA5LDEuMzY4LTIuNDU3YzEuNjg2LTAuMzYzLDIuNjg3LDEuNTM1LDMuMDM1LDIuNzkxDQoJYzAuMzE5LDEuMTY2LDAuNTU1LDEuOTUzLDEuODYxLDIuMjVDNy43OTEsOS41LDguODQ5LDkuOTE0LDkuMzgxLDkuMzgxYzAuNTM1LTAuNTM1LDAuMTQ0LTEuNTA4LTAuMTc2LTIuODk4DQoJQzguOTAyLDUuMTc2LDguMTE5LDQuOTM4LDYuOTU0LDQuNjE5QzUuNjk5LDQuMjczLDMuODAyLDMuMjcxLDQuMTY2LDEuNTg0YzAuMzY2LTEuNjk5LDEuNjY2LTEuNzk5LDIuNDU2LTEuMzY3DQoJQzcuMzk4LDAuNjQzLDcuNDIxLDEuNTUxLDYuNjY1LDEuOTUxIi8+DQo8cGF0aCBmaWxsPSIjNDM0RTc3IiBkPSJNMjEuNzU1LDYuNjY0Yy0wLjQtMC43NTYsMC41NTQtMS4xOCwwLjg1Ny0wLjY4YzAuMzE4LDAuNTMtMC40LDAuNzM0LTAuNCwwLjczNA0KCWMwLjM2NiwwLjM0NiwwLjgxMiwwLjA1NywwLjk2Ni0wLjIzMmMwLjE1Ni0wLjI4OSwwLjUwMS0xLjM5MS0wLjYxMS0xLjc2OHMtMi4wNDQsMC44MDEtMi4yNDUsMS40NjUNCgljLTAuMTMsMC40MzgtMC4zNzQsMi4wNC0wLjU4NiwzLjA5Yy0wLjI5NywxLjQ3NS0yLjQ1LDEuMjg2LTQuMTYxLDEuMzI2Yy0xLjI3MiwwLjAyOS0xLjg0NC0wLjM2My0xLjk2NC0wLjQ1OQ0KCWMtMC4wMTctMC4wMTItMC4wMzItMC4wMjktMC4wNDYtMC4wNDJjLTAuMDk0LTAuMTItMC40ODUtMC42OTYtMC40NTYtMS45NjhjMC4wMzktMS43MDktMC4xNTEtMy44NjEsMS4zMjUtNC4xNjINCgljMS4wNS0wLjIxMSwyLjY1Mi0wLjQ1MiwzLjA4OC0wLjU4NGMwLjY2NS0wLjIwMSwxLjg0NC0xLjEzMywxLjQ2Ny0yLjI0NWMtMC4zNzktMS4xMTItMS40NzktMC43NjctMS43NjgtMC42MTINCgljLTAuMjksMC4xNTYtMC41NzcsMC42MDQtMC4yMzQsMC45NjljMCwwLDAuMjA3LTAuNzE3LDAuNzM0LTAuNGMwLjUwMiwwLjMwMywwLjA3NywxLjI1Ny0wLjY4LDAuODU1DQoJYy0wLjc1NC0wLjQtMC43MzEtMS4zMDksMC4wNDgtMS43MzRjMC43ODgtMC40MzIsMi4wODktMC4zMzIsMi40NTUsMS4zNjdjMC4zNjMsMS42ODgtMS41MzQsMi42ODktMi43OTEsMy4wMzUNCgljLTEuMTY1LDAuMzE4LTEuOTM0LDAuNTY0LTIuMjQ3LDEuODYzYy0wLjMzMiwxLjM1NS0wLjcxMiwyLjM2My0wLjE4MSwyLjg5OGMwLjUzNSwwLjUzMywxLjUwNSwwLjEwNywyLjktMC4xNzgNCgljMS4zMTEtMC4yNjksMS41NDMtMS4wODQsMS44NjItMi4yNWMwLjM0Ni0xLjI1NiwxLjM0OS0zLjE1NCwzLjAzNi0yLjc5MWMxLjcwMSwwLjM2NywxLjgwMSwxLjY2OCwxLjM2NiwyLjQ1Nw0KCUMyMy4wNjQsNy4zOTgsMjIuMTU1LDcuNDE4LDIxLjc1NSw2LjY2NCIvPg0KPHBhdGggZmlsbD0iIzQzNEU3NyIgZD0iTTE4LjMyNSwzLjc4MUwxOC4yOCwzLjczNGwwLjQ1NS0wLjQ1NWwwLjQzOC0wLjQzOGwwLjA0OCwwLjA0NWMwLDAtMC4xODQsMC4zNTcsMC4xMjUsMC42NjZsMC43OTQsMC43OTMNCgljMCwwLDAuMzY1LDAuMzY3LDAuNzAxLDAuMTYybDAuMDg1LDAuMDg0bC0wLjQzOSwwLjQzOWwtMC40NTQsMC40NTVMMTkuOTQ4LDUuNGMwLjIwMi0wLjMzNi0wLjE2MS0wLjY5OS0wLjE2MS0wLjY5OWwtMC43OTUtMC43OTUNCglDMTguNjgzLDMuNTk5LDE4LjMyNSwzLjc4MSwxOC4zMjUsMy43ODEiLz4NCjxwYXRoIGZpbGw9IiM0MzRFNzciIGQ9Ik0xMS44NTgsNi4wOWMtMC43MTQsMC0xLjI5NSwwLjU4LTEuMjk1LDEuMjk3djEuMTk5YzAtMC43MTcsMC41ODEtMS4yOTcsMS4yOTUtMS4yOTcNCgljMC43MTksMCwxLjI5OCwwLjU4LDEuMjk4LDEuMjk3VjcuMzg3QzEzLjE1Niw2LjY3LDEyLjU3Nyw2LjA5LDExLjg1OCw2LjA5Ii8+DQo8cGF0aCBmaWxsPSIjNDM0RTc3IiBkPSJNMTEuODU4LDE3LjQzYzAuNzE5LDAsMS4yOTgtMC41OCwxLjI5OC0xLjI5NXYtMS4xOTljMCwwLjcxMy0wLjU3OSwxLjI5My0xLjI5OCwxLjI5Mw0KCWMtMC43MTQsMC0xLjI5NS0wLjU4LTEuMjk1LTEuMjkzdjEuMTk5QzEwLjU2MywxNi44NSwxMS4xNDUsMTcuNDMsMTEuODU4LDE3LjQzIi8+DQo8cGF0aCBmaWxsPSIjNDM0RTc3IiBkPSJNNi4xOSwxMS43NThjMCwwLjcxNywwLjU3OSwxLjI5NywxLjI5NSwxLjI5N2gxLjIwMWMtMC43MTgsMC0xLjI5OC0wLjU4LTEuMjk4LTEuMjk3DQoJYzAtMC43MTUsMC41OC0xLjI5NSwxLjI5OC0xLjI5NUg3LjQ4NUM2Ljc3LDEwLjQ2Myw2LjE5LDExLjA0Myw2LjE5LDExLjc1OCIvPg0KPHBhdGggZmlsbD0iIzQzNEU3NyIgZD0iTTE3LjUzMiwxMS43NThjMC0wLjcxNS0wLjU4Mi0xLjI5NS0xLjI5OS0xLjI5NWgtMS4yYzAuNzE4LDAsMS4yOTgsMC41OCwxLjI5OCwxLjI5NQ0KCWMwLDAuNzE3LTAuNTgsMS4yOTctMS4yOTgsMS4yOTdoMS4yQzE2Ljk1LDEzLjA1NSwxNy41MzIsMTIuNDc1LDE3LjUzMiwxMS43NTgiLz4NCjxwb2x5Z29uIGZpbGw9IiM0MzRFNzciIHBvaW50cz0iMTMuMDI2LDAgMTEuODU0LDAgMTAuNjg0LDAgMTAuMTU3LDAuNzQ4IDExLjg1NCwyLjQ0MyAxMy41NDksMC43NDggIi8+DQo8cG9seWdvbiBmaWxsPSIjNDM0RTc3IiBwb2ludHM9IjEzLjAyNiwyMC45OTYgMTEuODU0LDIwLjk5NiAxMC42ODQsMjAuOTk2IDEwLjE1NywyMS43NDYgMTEuODU0LDIzLjQ0MyAxMy41NDksMjEuNzQ2ICIvPg0KPHBvbHlnb24gZmlsbD0iIzQzNEU3NyIgcG9pbnRzPSIyMy4xODMsMTAuNTM3IDIyLjAxMSwxMC41MzcgMjAuODM4LDEwLjUzNyAyMC4zMTUsMTEuMjg3IDIyLjAxMSwxMi45ODIgMjMuNzA2LDExLjI4NyAiLz4NCjxwb2x5Z29uIGZpbGw9IiM0MzRFNzciIHBvaW50cz0iMi44NjcsMTAuNTM3IDEuNjk3LDEwLjUzNyAwLjUyNywxMC41MzcgMCwxMS4yODcgMS42OTcsMTIuOTgyIDMuMzk0LDExLjI4NyAiLz4NCjwvc3ZnPg0K" data-reactid="523">
                    </img>  */}
                     ©  NAC Jewellers Pvt.Ltd. All rights reserved.
                    </Grid>
            </Hidden>

            
            <SnackBar handleClose={handleClose} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
                classNameCloseIcon={'closeIcon'}
                classNames={stateClassname} message={message} open={open} />
        </Grid >
    );

}
