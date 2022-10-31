import HomePage from '../../../pageobjects/home.page';

describe('My herokuapp application', () =>
{
  it('should land on home page', async () =>
  {
    await HomePage.open();
    await expect(HomePage.heading).toBeExisting();
  });
});
