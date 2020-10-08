exports.config = {
    profile: 'integration',
    baseUrl: 'https://launchpaddf1.lb.com/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html/?spnego=disabled&sap-client=320&sap-language=EN#Shell-home',
    auth: {
      // form based
      'sapcloud-form': {
        name: './authenticator/UI5-Form-Authenticator',
          user: 'kdass',
          pass: 'Mast@2020',
          userFieldSelector: 'USERNAME_FIELD-inner',
          passFieldSelector: 'PASSWORD_FIELD-inner',
          logonButtonSelector: 'LOGIN_LINK'
      }
    }
  };