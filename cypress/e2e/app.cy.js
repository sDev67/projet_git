describe('The homepage', () => {
  it('successfully loads', () => {
    cy.visit('sources/index.html')
  })
  it('should display a option', () => {
    cy.get('#mySelect> option') // we get the select/option by finding the select by id
      .then(listing => {
        const randomNumber = getRandomInt(0, listing.length - 1) // generate a rendom number between 0 and length-1. In this case 0,1,2
        cy.get('#mySelect> option').eq(randomNumber).then(($select) => { // choose an option randomly
          const text = $select.text() // get the option's text. For ex. "A"
          cy.get('#mySelect').select(text) // select the option on UI
        })
      })
    cy.get('#myBtn').click()
    cy.get('#mySelect option:selected').then(($option) => {
      const text = $option.text()
      cy.get('#demo').should('have.text', text)
    })
  })
})

// Random int number generator between min and max
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
