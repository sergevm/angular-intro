import { AngularIntroPage } from './app.po';

describe('angular-intro App', function() {
  let page: AngularIntroPage;

  beforeEach(() => {
    page = new AngularIntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
