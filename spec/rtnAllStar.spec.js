const {expect} = require('chai')
const allStarText = require('../allStarTxt')
const allStar = require('../allStar')
const fs = require('fs')

describe('', () => {
    it('Matches exactly the lyrics of All Star', () => {
        expect(allStar()).to.equal(allStarText)
        console.log(`allStar.js is ${fs.readFileSync('./allStar.js', 'UTF8').length} characters long.`)
    })
})