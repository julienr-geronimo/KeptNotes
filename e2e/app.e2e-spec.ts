import { KeptPage } from './app.po';

describe('kept App', () => {
  let page: KeptPage;

  beforeEach(() => {
    page = new KeptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
