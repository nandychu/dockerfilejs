var Dockerfile = require('../test.js').Dockerfile
var assert = require('chai').assert
var fs = require('fs')

describe('testing Dockerfile render', ()=> {

  var expected = fs.readFileSync('./test/dockerfile/expected_0.Dockerfile', 'utf8')

  it('should render valid dockerfiles', () => {
    var result = new Dockerfile().append
      .comment('this is a comment')
      .env({key: 'values', key2: 'values 2'})
      .end().separator('\n')
      .append.from('centos7')
      .add({src: '/cert/id_rsa', dest:'~/.ssh/id_rsa'}, true)
      .end()
      .render()

    assert.equal(result, expected)
  })

})