import Page from './page';

/**
 * subpage containing specific selectors and methods for a specific page
 */
class HomePage extends Page
{
  /**
   * define selectors using getter methods
   */
  get heading()
  {
    return $('h1.heading');
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open()
  {
    return super.open('');
  }
}

export default new HomePage();
