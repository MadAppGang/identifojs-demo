import IdentifoAuth from '@madappgang/identifo-js';

export const identifo = new IdentifoAuth({
    issuer: 'http://localhost:8081',
    appId: '59fd884d8f6b180001f5b4e2',
    scopes: [],
    redirectUri: 'http://localhost:3001/callback',
  })