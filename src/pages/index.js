import * as React from "react"
import authentication from 'react-azure-adb2c';
import Homepage from '../components/Homepage';


// // ADB2C
authentication.initialize({
  instance: 'https://login.microsoftonline.com/tfp/', 
  tenant: 'OILtenant.onmicrosoft.com',
  signInPolicy: 'B2C_1_signupsignin1',
  applicationId: '0325a5d0-c15e-40a1-880a-65fee6155dc4',
  cacheLocation: 'sessionStorage',
  scopes: ['https://OILtenant.onmicrosoft.com/react-poc/user_impersonation'],
  redirectUri: 'http://localhost:8000',
  postLogoutRedirectUri: window.location.origin,
});


// markup
const IndexPage = () => {
  return authentication.run(() => {
    <Homepage />
  });
  // return authentication.required(Homepage)
}

export default IndexPage
