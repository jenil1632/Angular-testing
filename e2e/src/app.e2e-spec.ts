import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    const elemText = await page.getTitleText();
    expect(elemText).toEqual('Welcome to my-app!');
  });
});
