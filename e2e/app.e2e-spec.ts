import { RegistrationSkeletonPage } from './app.po';

describe('registration-skeleton App', () => {
  let page: RegistrationSkeletonPage;

  beforeEach(() => {
    page = new RegistrationSkeletonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
