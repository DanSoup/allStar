const {expect} = require('chai')
const allStarText = require('../allStarTxt')
const rtnAllStar = require('../rtnAllStar')
const fs = require('fs')

describe('', () => {
    it('Matches exactly the lyrics of All Star', () => {
        expect(rtnAllStar()).to.equal(allStarText)
        console.log(`rtnAllStar.js is ${fs.readFileSync('./rtnAllStar.js', 'UTF8').length} characters long.`)
    })
})