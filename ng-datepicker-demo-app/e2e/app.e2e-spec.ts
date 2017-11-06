import { DatepickerDemoAppPage } from './app.po';

describe('datepicker-demo-app App', () => {
  let page: DatepickerDemoAppPage;

  beforeEach(() => {
    page = new DatepickerDemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
