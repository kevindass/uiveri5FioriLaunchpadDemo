describe('masterdetail', function () {

    it('should let you log in', function () {
      // element(by.id('USERNAME_FIELD-inner')).sendKeys('kdass');
      // expect(element(by.id('USERNAME_FIELD-inner')).getAttribute('value'))
      // .toBe('kdass');

      // element(by.id('PASSWORD_FIELD-inner')).sendKeys('July@2020');
      // expect(element(by.id('PASSWORD_FIELD-inner')).getAttribute('value'))
      // .toBe('July@2020');

      //element(by.id('LOGIN_LINK').click());

      // var loginButton = element(by.id ('LOGIN_LINK'));
      // browser.actions().mouseMove(loginButton).click().perform();
      // browser.loadUI5Dependencies()

    })

    it('should load the app',function() {
      //expect(browser.getTitle()).toBe('OSM List and Requests');
      // element(by.control({
      //   viewName: 'Master',
      //   controlType: 'sap.m.Page',
      //   properties:{
      //     title: 'Projects'
      //   }
      // }))
    });
  
    it('should display the details screen',function() {
      // element(by.control({
      //   viewName: 'sap.ui.demo.masterdetail.view.Master',
      //   controlType: 'sap.m.ObjectListItem',
      //   properties: {
      //     title: 'Object 11'
      //   }}))
      // .click();

      // element(by.control({
      //   viewName: 'Master',
      //   controlType: 'sap.m.SearchField'
      // })).sendKeys('pol');

      // element(by.control({
      //   viewName: 'Master',
      //   controlType: 'sap.m.ObjectListItem',
      //   properties:{
      //     title: '105.01.0075.03'
      //   }
      // }));

    });
  
    //it('should validate line item counts',function() {
      // expect(element.all(by.control({
      //   viewName: 'sap.ui.demo.masterdetail.view.Detail',
      //   controlType:'sap.m.ColumnListItem'}))
      // .count()).toBe(2);
    //});
  });