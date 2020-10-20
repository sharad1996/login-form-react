import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(1.5),
            width: 500,
        },
    },
}));

export default function LoginForm() {
    const classes = useStyles();
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    }
    const [form, setForm] = useState(initialState);
    const [emailError, setEmailError] = useState(false);
    const [numberError, setNumberError] = useState(false);

    const handleChange = (key, value) => {
        setForm({ form: { ...form, [key]: value } })
    }

    const handleEmailChange = (key, value) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(value)) {
            // this is a valid email address
            setForm({ form: { ...form, [key]: value } })
            setEmailError(false)
        }
        else {
            setEmailError(true)
        }
    }

    const handleNumberChange = (key, value) => {
        if (value.length <= 10) {
            setNumberError(true)
        } else {
            setForm({ form: { ...form, [key]: value } })
            setNumberError(false)
        }
    }

    const handleSubmit = () => {
        console.log('formdata', form)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl className="text-left" component="fieldset">
                <h4>Create an account</h4>
                <TextField
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    value={form.firstName}
                    onChange={(e) => { handleChange('firstName', e.target.value) }}
                />
                <TextField
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    value={form.lastName}
                    onChange={(e) => { handleChange('lastName', e.target.value) }}
                />
                <TextField
                    error={emailError}
                    id="email"
                    label="Email"
                    helperText={emailError ? "Incorrect email format." : ""}
                    variant="outlined"
                    value={form.email}
                    onChange={(e) => { handleEmailChange('email', e.target.value) }}
                />
                <TextField
                    error={numberError}
                    id="phoneNumber"
                    label="Phone Number"
                    helperText={numberError ? "Incorrect number format." : ""}
                    variant="outlined"
                    value={form.phoneNumber}
                    onChange={(e) => { handleNumberChange('phoneNumber', e.target.value) }}
                />
                <div>
                    <FormControlLabel
                        value="agree"
                        control={<Radio color="primary" />}
                        label="I agree to write Excellent Code"
                    />
                    <Link
                        href="#"
                        className="light-color"
                    >
                        Terms and Conditions
                    </Link>
                </div>
                <Button
                    variant="contained"
                    className="light-background"
                    onClick={handleSubmit}
                >
                    Continue
                </Button>
                <div className="mt-4">
                    <span>Already a meme-ber ? <Link href="#" className="light-color">sign-in</Link></span>
                </div>
            </FormControl>
        </form>
    );
}
