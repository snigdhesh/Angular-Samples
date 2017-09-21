import { GradeanalysisPage } from './app.po';

describe('gradeanalysis App', () => {
  let page: GradeanalysisPage;

  beforeEach(() => {
    page = new GradeanalysisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
