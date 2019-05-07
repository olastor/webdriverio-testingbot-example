const expect = require('chai').expect

describe('Example test', () => {
  it('should show headline', () => {
    browser.url('/')
    $('h1').waitForExist()
    expect($('h1').getText()).to.equal('Example Domain')
  })
})
