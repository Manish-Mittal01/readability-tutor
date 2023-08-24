const appConfig = {
  apiPrefix: "/api",
  authenticatedEntryPath: window.location.pathname,
  //authenticatedEntryPath: '/home',
  unAuthenticatedEntryPath: "/sign-in",
  tourPath: "/app/account/kyc-form",
  enableMock: false,
};

export default appConfig;
