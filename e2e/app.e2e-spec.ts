import { JumbotronPage } from './app.po';

describe('jumbotron App', function() {
  let page: JumbotronPage;

  beforeEach(() => {
    page = new JumbotronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
