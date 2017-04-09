import { PageBuilderPage } from './app.po';

describe('page-builder App', () => {
  let page: PageBuilderPage;

  beforeEach(() => {
    page = new PageBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
