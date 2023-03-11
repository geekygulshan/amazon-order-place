class AmazonElements{
    get searchBox(){
        return cy.get('#twotabsearchtextbox')
    }
    get searchButton(){
        return cy.get('#nav-search-submit-button')
    }
    get searchBoxValue(){
        return cy.get('#issprefix')
    }
    get product(){
        // interacting with the product on the basis of index as the prodcut listing page is very dynamic on amazon
        return cy.get('[data-index="7"]').find('a').eq(0)
    }
    get productTitle(){
        return cy.get('#productTitle')
    }
    get productPrice(){
        return cy.get('.a-spacing-none > .a-price > [aria-hidden="true"] > .a-price-whole')
    }
    get productSize(){
        return cy.get('#native_dropdown_selected_size_name')
    }
    get addToCartButton(){
        return cy.get('#add-to-cart-button')
    }
    get goToCart(){
        return cy.contains('a','Go to Cart')
    }
    get productTitleInCart(){
        return cy.get('.a-truncate-cut')
    }
    get productPriceInCart(){
        return cy.get('#sc-subtotal-amount-buybox > .a-size-medium')
    }
    get proceedToCheckout(){
        return cy.get('[data-feature-id="proceed-to-checkout-action"]')
    }
}
const el = new AmazonElements()
export default el