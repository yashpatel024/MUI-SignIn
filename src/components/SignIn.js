import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        SignIn
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  //State
  const [userEmail, setUserEmail] = React.useState({
    value:'', errorText:'', isError:false});
  const [userPassword, setUserPassword] = React.useState({
    value:'', errorText:'', isError:false});
  const [checkRememberMe, setCheckRememberMe] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(userEmail.isError && userPassword.isError){
      //
    }else{
      setUserEmail(prevState => ({
        value:prevState.value, 
        errorText: (prevState.value==="") ? "Please enter email" : "", 
        isError: (prevState.value==="")
      }));

      setUserPassword(prevState => ({
        value:prevState.value, 
        errorText: (prevState.value==="") ? "Please enter password" : "", 
        isError: (prevState.value==="")
      }));
    }
  };

  //OnChange handler of Email
  const handleUserEmail = (event) => {
    let email = event.target.value;
    setUserEmail({
      value:email, 
      errorText: (email==="") ? "Please enter email" : "", 
      isError: (email==="")
    });
  }

  //OnChange handler of Password
  const handleUserPassword = (event) => {
    let password = event.target.value;

    setUserPassword({
      value:password,
      errorText: (password==="") ? "Please enter password" : "", 
      isError: (password==="")
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={userEmail.value}
              helperText={userEmail.errorText}
              error={userEmail.isError}
              onChange={handleUserEmail}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={userPassword.value}
              helperText = {userPassword.errorText}
              error = {userPassword.isError}
              onChange={handleUserPassword} 
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              id="rememberme"
              onChange={e => setCheckRememberMe(e.target.checked)} 
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}