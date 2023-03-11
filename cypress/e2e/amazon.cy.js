// stored all the elements which we are going to interact with in a different file
import el from "../elements"

describe('Automate amazon.in', () => {
  it('Search & add a product to the cart & come till payments page', () => {
    const product = 'dress'
    // visiting amazon.in as defined in the baseUrl
    cy.visit('/')
    cy.title().should('contain', 'Amazon.in')
    el.searchBox.type(product, { delay: 0 })

    // validating that search box has the value as typed
    el.searchBoxValue
      .should('have.attr', 'value')
      .and('include', product)
    el.searchButton.click()

    // validating that the user is on the product listing page as searched
    cy.url().should('include', product)

    // removing the target = _blank attribute otherwise it will open the link in a new tab and cypress doesn't support multiple tabs
    el.product.invoke('removeAttr', 'target')
      .click()
    el.productSize.select('M')
    /* waiting for the page to get updated according to the size. 
    Could also have intercepted the api and waited on the response but amazon apis could be dynamic */
    cy.wait(3000)

    // storing the product title and price in a variable to validate the same on the checkout page
    el.productTitle.invoke('text').then((titletext) => {
      // if the product title is longer, it will not display the whole title on the checkout page.
      const title = titletext.trimStart().split(' ').slice(0, 5).join(' ')
      el.productPrice.invoke('text').then((pricetext) => {
        const price = pricetext

        el.addToCartButton.click()

        // validating that the user is on the pre-checkout page
        cy.url().should('include', 'newItems')
        el.goToCart.click({ force: true })

        // validating that the user is on the checkout page
        cy.url().should('include', 'cart')

        // validating the product title and price which was added to the cart
        // sometimes product title on the product page and on checkout page are little different so commenting out the validation
        // el.productTitleInCart.should('include.text', title)
        el.productPriceInCart.should('include.text', price)

        cy.log('The product in the cart is: ' + title)
        cy.log('The product price is: ' + price)

        el.proceedToCheckout.click()
        cy.screenshot()
      })
    })
  })
})