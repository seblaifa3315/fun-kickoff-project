import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import EditProfile from './pages/ProfilePages/EditProfile/EditProfile';
import EditPhoto from './pages/ProfilePages/EditPhoto/EditPhoto';
import ProfileAvailability from './pages/ProfilePages/ProfileAvailability/ProfileAvailability';
import ProfilePayment from './pages/ProfilePages/ProfilePayment/ProfilePayment';
import ProfileSecurity from './pages/ProfilePages/ProfileSecurity/ProfileSecurity';
import ProfileSettings from './pages/ProfilePages/ProfileSettings/ProfileSettings';
import Dashboard from './pages/Dashboard/Dashboard';
import { Navbar } from './components/Navbar/Navbar';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';

import './App.css';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          {/* <AuthProvider> */}
          <SocketProvider>
            <CssBaseline />
            <Navbar />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/editProfile" component={EditProfile} />
              <Route exact path="/editPhoto" component={EditPhoto} />
              <Route exact path="/profileAvailability" component={ProfileAvailability} />
              <Route exact path="/profilePayment" component={ProfilePayment} />
              <Route exact path="/profileSecurity" component={ProfileSecurity} />
              <Route exact path="/profileSettings" component={ProfileSettings} />
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </SocketProvider>
          {/* </AuthProvider> */}
        </SnackBarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
