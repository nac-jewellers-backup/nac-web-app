import { Container, Grid, Button } from '@material-ui/core';
import React from 'react';
import './loginRegisters.css'
import { Input } from '../../../components/InputComponents/TextField/Input'
import SimpleSelect from '../../../components/InputComponents/Select/Select';
import useRegister from './useregister';

const Register = (props) => {
    return <RegisterComponent  {...props} />
}

const RegisterComponent = (props) => {
    const { values, handlers, data } = useRegister(()=>props.changePanel(2));
    var cc = localStorage.getItem('user_id') ? localStorage.getItem('user_id') : ""
    var ccc = data.user_profile_id ? data.user_profile_id : ""
    console.log(values, 'valuesvaluesstate')
    return (
        <div className='pt-sm'>
            <form action="javascript:void(0)" onSubmit={(e) => {
                console.log('valuesvaluesstate', 'hey i have came in...')
                handlers.handleSubmit(e)
            }}>
                <Grid container spacing={12}>
                    <Grid item lg={1} />
                    <Grid item xs={12} lg={6}>
                        <h5 className='title'>  New user registration  </h5>
                        <Input
                            margin="normal"
                            variant="outlined"
                            type="email"
                            name="email"
                            value={values.email}
                            error={values.error && values.error.emerr ? true : false}
                            // helperText={values.errortext && values.errortext.emerr}
                            placeholder="enter your email Id"
                            onChange={e => handlers.handleChange('email', e.target.value)}
                        />
                        <label className='errtext'> {values.errortext && values.errortext.emerr}</label>
                        <Input
                            margin="normal"
                            variant="outlined"
                            type="password"
                            name="password"
                            value={values.password}
                            error={values.error && values.error.passerr ? true : false}
                            // helperText={values.errortext && values.errortext.passerr}
                            placeholder="enter your password"
                            onChange={e => handlers.handleChange('password', e.target.value)}
                        />
                        <label className='errtext'> {values.errortext && values.errortext.passerr}</label>
                        <Input
                            margin="normal"
                            variant="outlined"
                            type="password"
                            name="confirmpassword"
                            value={values.confirmpassword}
                            error={values.error && values.error.cnfpasserr ? true : false}
                            helperText={values.errortext && values.errortext.cnfpasserr}
                            placeholder="enter your Confirm password"
                            onChange={e => handlers.handleChange('confirmpassword', e.target.value)}
                        />
                        <label className='errtext'> {values.errortext && values.errortext.cnfpasserr}</label>
                        {/* <Grid container spacing={12}>
                                <Grid item lg={4} xs={4}>
                                    <SimpleSelect name={'Mr'} selectData={['Mr', 'Mrs', 'Miss']} />
                                </Grid>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="Password"
                                        name="confPassword"
                                        value={values.confPassword}
                                        // error={this.state.confPassword ? this.state.confPassword : "**"}
                                        placeholder="Confirm Password"
                                        onChange={event => this.handleChange(event, 'confPassword')}
                                        className='text-f'
                                    />
                                </Grid>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="Password"
                                        name="confPassword"
                                        value={values.confPassword}
                                        // error={this.state.confPassword ? this.state.confPassword : "**"}
                                        placeholder="Confirm Password"
                                        onChange={event => this.handleChange(event, 'confPassword')}
                                        className='text-f'
                                    />
                                </Grid>
                            </Grid> */}
                        <div className='login-butn'>
                            <Button className='back-b' onClick={() => props.change()} >Back</Button>
                            <Button className='apply-b' type="submit">Apply</Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
export default (Register);