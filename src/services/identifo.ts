// @ts-ignore
import {IdentifoAuth} from '@identifo/identifo-auth-js';

export const identifo = new IdentifoAuth({
    // issuer: 'http://localhost:8081',
    appId: 'c2idics8f6md60obnkp0',
    url: 'http://localhost:8081',
    scopes: [],
    autoRenew: false,
    redirectUri: 'http://localhost:5000/callback',
    // postLogoutRedirectUri:'http://localhost:5000'
  })