/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page
{
  /**
     * Opens a subpage of the page
     * @param {string | undefined} path path of the subpage (e.g. /path/to/page.html)
     */
  open(path)
  {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
};
