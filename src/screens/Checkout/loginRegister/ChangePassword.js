import React,{useState} from 'react';
// import './product-image-slider/loginRegisters.css'
import { Grid, Button, Container, TextField } from '@material-ui/core';
import Header from 'components/SilverComponents/Header'
import Footer from "components/Footer/Footer"
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import { useNetworkRequest } from 'hooks/NetworkHooks'
import CommenDialog from 'components/Common/Dialogmodel'
import EyeIcon from './EyeIcon';


const LoginComponent = (props) => {
    const params = props.match.params.id;
    const [values, setValues] = React.useState({
        newpassword: "",
        newPasswordError: false,
        newPasswordHelperText: "",
        confirmPassword: "",
        confirmPasswordError: false,
        confirmPasswordHelper: "",
        oldpassword: "",
        oldpassworderror: false,
        oldpasswordText: "",
        modelOpen: false

    });
    const { loading, error, data, makeFetch } = useNetworkRequest('/changepassword', {}, false, {})
    const canceldeletechecklist = () => {
        setValues({
            ...values, modelOpen: false,
        })
        props.history.push('/account-profile')
    }
    const { classes } = props;
    const handelSubmit = async () => {
        console.log("zxswsss")
        var pattern = /^.*(?=.{8,30})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;        
        if (values.oldpassword === "") {
            setValues({ ...values, oldpassworderror: true, oldpasswordText: "Field can't be empty!" })
        }
        else if (values.newpassword === "") {
            setValues({ ...values, newPasswordError: true, newPasswordHelperText: "Field can't be empty!" })
        }
        else if (values.confirmPassword === "") {
            setValues({ ...values, confirmPasswordError: true, confirmPasswordHelper: "Field can't be empty!" })
        }
        else if (!pattern.test(values.newpassword)) {
            setValues({ ...values, newPasswordError: true, newPasswordHelperText: "Password must contain 1 Uppercase, 1 Lowercase, 1 numeric,1 special character and minimum 8 characters in length!" })
            return false;
        }
        else if (values.newpassword !== values.confirmPassword) {
            setValues({ ...values, confirmPasswordError: true, confirmPasswordHelper: "New password and Confirm password does not match!" })
            return false;
        }
        else if (values.newpassword === values.oldpassword) {
            setValues({ ...values, newPasswordError: true, newPasswordHelperText: "New Password cannot be the old password!" })
            return false;
        }
        else {
            var body = { "oldpassword": values.oldpassword, "newpassword": values.newpassword }
            console.log(body.newpassword,"----",body.oldpassword,"++++")
            await makeFetch(body);
        }
    }

    const handleChange = (name, value) => { 
        setValues({ ...values, [name]: value, oldpassworderror: false, oldpasswordText: "", newPasswordError: false, confirmPasswordError: false, newPasswordHelperText: "", confirmPasswordHelper: "" })
    }
    const [passwordVisibility, setPasswordVisibility] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
      });
      const togglePasswordVisibility = (field) => {
        setPasswordVisibility((prevVisibility) => ({
          ...prevVisibility,
          [field]: !prevVisibility[field],
        }));
      };
    React.useEffect(() => {
        if (data && Object.entries(data).length > 0 && data.constructor === Object) {
            try {
                if (data.message === "Invalid Password!") {
                    setValues({ ...values, newpassword: "", confirmPassword: "", oldpassword: "", oldpassworderror: true, oldpasswordText: data.message })
                }
                else {
                    setValues({ ...values, newpassword: "", confirmPassword: "", oldpassword: "", confirmPasswordHelper: data.message, modelOpen: true })
                    // props.history.push('/account-profile')
                }
            } catch (error) {
            }
        }

    }, [data])
    return (
        <Grid container>
            <Header />
            <Grid spacing={12} container style={{ padding: "3%" }}>
                <Grid item xs={6} lg={6} xs={12}>
                    <div >
                        <img width="100%" height="100%" loading="lazy" alt='...' src="https://assets.stylori.com/login_image.png" />
                    </div>
                </Grid>

                <Grid item xs={6} lg={6} xs={12}>
                    <Container className={classes._container}>
                        <div className='pt-sm' style={{ width: "100%", float: "right" }}>
                            <form action="javascript:void(0)" onSubmit={(e) => {
                                handelSubmit(e)
                            }}>
                                <div className={`${classes.normalfonts}`} style={{ fontSize: "18px" }}>Reset Password</div>
                                <TextField
                                    autoComplete='off'
                                    margin="normal"
                                    // variant="outlined"
                                    type={passwordVisibility.oldPassword ? 'text' : 'password'}
                                    fullWidth
                                    name="email"
                                    value={values.oldpassword}
                                    error={values.oldpassworderror ? true : false}
                                    onChange={(e) => handleChange('oldpassword', e.target.value)}
                                    placeholder="Enter old password"
                                    InputProps={{
                                        endAdornment: (
                                          <EyeIcon
                                            isVisible={passwordVisibility.oldPassword}
                                            toggleVisibility={() => togglePasswordVisibility('oldPassword')}
                                          />
                                        ),
                                      }}
                                />
                                <label className='errtext'> {values.oldpasswordText && values.oldpasswordText}</label>
                                <TextField
                                    autoComplete='off'
                                    margin="normal"
                                    // variant="outlined"
                                    type={passwordVisibility.newPassword ? 'text' : 'password'}
                                    fullWidth
                                    name="email"
                                    value={values.newpassword}
                                    error={values.newPasswordError ? true : false}
                                    onChange={e => handleChange('newpassword', e.target.value)}
                                    placeholder="Enter new password"
                                    InputProps={{
                                        endAdornment: (
                                          <EyeIcon
                                            isVisible={passwordVisibility.newPassword}
                                            toggleVisibility={() => togglePasswordVisibility('newPassword')}
                                          />
                                        ),
                                      }}
                                />
                                <label className='errtext'> {values.newPasswordHelperText && values.newPasswordHelperText}</label>
                                <TextField
                                    autoComplete='off'
                                    margin="normal"
                                    // variant="outlined"
                                    type={passwordVisibility.confirmPassword ? 'text' : 'password'}
                                    // type="password"
                                    fullWidth
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    error={values.confirmPasswordError ? true : false}
                                    onChange={e => handleChange('confirmPassword', e.target.value)}
                                    placeholder="Enter confirm password"
                                    InputProps={{
                                        endAdornment: (
                                          <EyeIcon
                                            isVisible={passwordVisibility.confirmPassword}
                                            toggleVisibility={() => togglePasswordVisibility('confirmPassword')}
                                          />
                                        ),
                                      }}
                                />
                                <label className='errtext'> {values.confirmPasswordHelper && values.confirmPasswordHelper}</label>
                                <br></br>
                                <div style={{ float: "right" }}>
                                    <Button className='apply-b' type="submit">Change</Button>
                                </div>

                                <Grid spacing={12} container>
                                    <Grid item xs={6} lg={12} style={{ float: "left", marginBottom: "9px" }}>

                                        <Link className={classes.normalfonts} style={{
                                            cursor: "pointer", fontSize: "14px",
                                            marginRight: "50%"
                                        }} to="/account-profile">Click here to My Acoount</Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>  </Grid>
                <CommenDialog isOpen={values.modelOpen} content={data.message} handleSuccess={canceldeletechecklist} positiveBtn="ok" title="Message" />
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
}


export default withStyles(styles)(withRouter(LoginComponent));