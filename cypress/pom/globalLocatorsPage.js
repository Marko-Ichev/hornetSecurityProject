export class globalLocatorsPage {

// INPUT BASE

inputDataTestBase = `//input[@data-test="`;


inputUsername = `${this.inputDataTestBase}username"]`;
inputPassword = `${this.inputDataTestBase}password"]`;
inputLoginButton = `${this.inputDataTestBase}login-button"]`;
inputFirstName = `${this.inputDataTestBase}firstName"]`;
inputLastName = `${this.inputDataTestBase}lastName"]`;
inputPostalCode= `${this.inputDataTestBase}postalCode"]`;
inputContinue= `${this.inputDataTestBase}continue"]`;

// BUTTON BASE

buttonIdBase = `//button[@id="`;
buttonDataTestBase = `//button[@data-test="`;
buttonAddToCartSauceLabsBase = `${this.buttonDataTestBase}add-to-cart-sauce-labs-`;
buttonRemoveToCartSauceLabsBase = `${this.buttonDataTestBase}remove-sauce-labs-`;


buttonBurgerMenu =  `${this.buttonIdBase}react-burger-menu-btn"]`;
buttonBurgerCross = `${this.buttonIdBase}react-burger-cross-btn"]`;
buttonAddBackpack = `${this.buttonAddToCartSauceLabsBase}backpack"]`;
buttonAddBikeLight = `${this.buttonAddToCartSauceLabsBase}bike-light"]`;
buttonAddBoltTShirt = `${this.buttonAddToCartSauceLabsBase}bolt-t-shirt"]`;
buttonAddFleeceJacket = `${this.buttonAddToCartSauceLabsBase}fleece-jacket"]`;
buttonAddOnesie = `${this.buttonAddToCartSauceLabsBase}onesie"]`;
buttonAddTShirtRed = `${this.buttonDataTestBase}add-to-cart-test.allthethings()-t-shirt-(red)"]`;
buttonRemoveBackpack = `${this.buttonRemoveToCartSauceLabsBase}backpack"]`;
buttonRemoveBikeLight = `${this.buttonRemoveToCartSauceLabsBase}bike-light"]`;
buttonRemoveBoltTShirt = `${this.buttonRemoveToCartSauceLabsBase}bolt-t-shirt"]`;
buttonRemoveFleeceJacket = `${this.buttonRemoveToCartSauceLabsBase}fleece-jacket"]`;
buttonRemoveOnesie = `${this.buttonRemoveToCartSauceLabsBase}onesie"]`;
buttonRemoveTShirtRed = `${this.buttonDataTestBase}remove-test.allthethings()-t-shirt-(red)"]`;
buttonContinueShopping = `${this.buttonDataTestBase}continue-shopping"]`;
buttonAddToCart = `${this.buttonDataTestBase}add-to-cart"]`;
buttonCheckout = `${this.buttonDataTestBase}checkout"]`;
buttonCancel = `${this.buttonDataTestBase}cancel"]`;
buttonFinish = `${this.buttonDataTestBase}finish"]`;
buttonBackToProducts = `${this.buttonDataTestBase}back-to-products"]`;


// LINK BASE


aDataTestBase = '//a[@data-test="';


inventorySidebar = `${this.aDataTestBase}inventory-sidebar-link"]`;
aboutSidebar = `${this.aDataTestBase}about-sidebar-link"]`;
shoppingCart = `${this.aDataTestBase}shopping-cart-link"]`;
logoutSidebar = `${this.aDataTestBase}logout-sidebar-link"]`;
resetSidebar = `${this.aDataTestBase}reset-sidebar-link"]`;


// DIV BASE
divDataTestBase = '//div[@data-test="';


divInventoryItemPrice = `${this.divDataTestBase}inventory-item-price"]`;
divInventoryItemName = `${this.divDataTestBase}inventory-item-name"]`;
divInventoryItemDescription = `${this.divDataTestBase}inventory-item-desc"]`;


// OTHER 

selectDataTestBase = '//select[@data-test="';
imgDataTestBase = '//img[contains(@data-test,"';
spanDataTestBase = '//span[@data-test="';
h3DataTestBase = '//h3[@data-test="';
h2DataTestBase = '//h2[@data-test="';


dropDownFilter = `${this.selectDataTestBase}product-sort-container"]`;
shoppingCartBadge = `${this.spanDataTestBase}shopping-cart-badge"]`;
h3Error = `${this.h3DataTestBase}error"]`;
h3Complete = `${this.h2DataTestBase}complete-header"]`;
imgInventoryItemImage = `${this.imgDataTestBase}item-")]`;
svgErrorIcon = `//*[name()='svg' and @data-icon="times-circle"]`;

}