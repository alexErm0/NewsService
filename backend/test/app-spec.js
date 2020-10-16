const expect = require('chai').expect
const app = require('../app')

describe('test', () => {
    it('Should return a string', () => {
        expect('Travis test').to.equal('Travis test')
    })
})