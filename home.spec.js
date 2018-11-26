describe('Computer-database tests', function () {

  browser.ignoreSynchronization = true;

  browser.get('http://computer-database.herokuapp.com/computers');

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Computers database');
  });

  it('navigates to the Add new screen', function () {
    element(by.xpath("//a[contains(text(), 'Add a new computer')]")).click();
    expect(browser.getCurrentUrl()).toEqual('http://computer-database.herokuapp.com/computers/new');
  });


  it('adds a new computer', function () {
    browser.get('http://computer-database.herokuapp.com/computers/new');
    var input = element(by.id('name'));
    input.sendKeys('some computer name here');
    var inputAttr = input.getAttribute('value');
    //element(by.xpath("//a[contains(text(), 'Create this computer')]")).click();
    element(by.css('.btn.primary')).click();
    expect(browser.getCurrentUrl()).toEqual('http://computer-database.herokuapp.com/computers');
  });
  

});