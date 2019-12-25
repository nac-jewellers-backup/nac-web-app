import React from 'react';
import './loginRegisters.css'
import { Container, Grid, Button, Card, CardContent } from '@material-ui/core';
import Login from './login';
import Register from './register';
import Continues from './continues';
import { useDummyRequest } from '../../../hooks';
import { checkoutloginRegs } from '../../../mappers';
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
import { fontWeight } from '@material-ui/system';
class LoginRegisterIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            Register: false,
            Continue: false,
            Login: false,
            isActive: ""
        };
    }
    toggle(name, value) {
        this.setState({
            show: !this.state.show,
            [name]: !value
        });
    }

    render() {
        const { LogRegData } = this.props.data
        const { classes } = this.props;
        const local_mail = localStorage.getItem("email") ? localStorage.getItem("email") : ""
        return (
            <Container>
                {local_mail ?
                    <div> <span style={{
                        color: "#394578",
                        fontSize: "15px",
                        fontWeight: "700"
                    }}>{local_mail}</span><br />
                        < Button onClick={() => this.props.changePanel(2)} style={{
                            height: "42px",
                            color: "#fff",
                            background: "#394578",
                            borderLeft: "none !important",
                            border: "0px !important",
                            borderRadius: "0px",
                            fontSize: "12px"
                        }}> Continue</Button></div> : <div>
                        <div className='pt-sm' style={{ display: this.state.show == true ? "block" : "none" }}>
                            <>
                                <h5 className={`title ${classes.normalfonts}`}>  Please click to choose an action</h5>
                                <Grid container spacing={12}>
                                    {LogRegData.map(val =>
                                        <Grid item xs={12} lg={4}>
                                            <Card className='form-card'>
                                                <CardContent style={{ height: "70px" }}>
                                                    <div>
                                                        <p className={`card-reg ${classes.dis}`}> {val.title}</p>
                                                        <b className={`card-reg blt ${classes.dis}`}>{val.dis}</b>
                                                    </div>
                                                </CardContent>
                                                <div className='login-butn'>
                                                    <Button className='apply-b'
                                                        onClick={() => { this.toggle(val.button) }}>{val.buttonval}</Button>
                                                </div>
                                            </Card>
                                        </Grid>
                                    )}
                                </Grid>
                            </>
                        </div>
                        <div style={{ display: this.state.Login == true ? "block" : "none" }}>
                            <Login changePanel={this.props.changePanel} change={() => {
                                this.setState({
                                    show: true,
                                    Login: false
                                })
                            }} />
                        </div>
                        <div style={{ display: this.state.Register == true ? "block" : "none" }}>
                            <Register changePanel={this.props.changePanel} change={() => {
                                this.setState({
                                    show: true,
                                    Register: false
                                })
                            }} />
                        </div>
                        <div style={{ display: this.state.Continue == true ? "block" : "none" }}>
                            <Continues changePanel={this.props.changePanel} change={() => {
                                this.setState({
                                    show: true,
                                    Continue: false
                                })
                            }} />
                        </div>
                    </div>
                }
            </Container >
        )
    }
}
export default withStyles(styles)(props => {
    const { mapped } = useDummyRequest(checkoutloginRegs);
    if (Object.keys(mapped).length === 0) return ''

    return <LoginRegisterIndex {...props} data={mapped} />
});