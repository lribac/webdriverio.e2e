import LoginPage from '../../../pageobjects/login.page';
import SecurePage from '../../../pageobjects/secure.page';

describe('My Login application', () =>
{
  it('should login with valid credentials', async () =>
  {
    await LoginPage.open();
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      'You logged into a secure area!',
    );
  });

  it('should fail login with invalid credentials', async () =>
  {
    await LoginPage.open();
    await LoginPage.login('tomsmith', 'testpass');
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      'Your password is invalid!',
    );
  });
});
