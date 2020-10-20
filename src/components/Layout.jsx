import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    contentCard: {
        paddingTop: 50,
        width: 500,
        height: 600,
        float: 'right',
        background: '#00A6FA',
        color: '#fff',
        boxShadow: 'none',
    },
    loginCard: {
        paddingTop: 50,
        width: 600,
        height: 600,
        background: '#fff',
        boxShadow: 'none',
    }
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 px-0 content-box">
                    <Card className={classes.contentCard}>
                        <CardContent>
                            <h3 className="text-left w-75 ml-5">Here’s some amazing copy. Doesn’t this copy just make you excited?</h3>
                            <h5 className="text-left w-75 ml-5 mt-4">Wow, you really built this form in 2-3 hours? You’re awesome.</h5>
                            <ul className="content-list text-left ml-5 mt-4">
                                <li><span>1</span> First Section</li>
                                <li><span>2</span> Second Section</li>
                                <li><span>3</span> Third Section</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-lg-6 col-md-6 col-12 px-0 login-box">
                    <Card className={classes.loginCard}>
                        <CardContent>
                            <LoginForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    );
}
