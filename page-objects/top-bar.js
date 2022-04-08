import { t, Selector} from "testcafe";

class TopBar {
    get topBarContactSelector() {
        return Selector('#menu-item-66');
    };

    get topBarLogoSelector() {
        return Selector('img').withAttribute('alt', 'QualityMinds');
    };

    get footerContactSelector() {
        return Selector('#menu-item-747');
    };

    get topBarPortfolioSelector() {
        return Selector('#menu-item-220');
    };

    get topBarPortforlioFirstElementSelector() {
        return Selector('#menu-item-10885');
    };

    get topBarPortfolioWebAutomationMobileSelector() {
        return Selector('#menu-item-768');
    };

    get topBarCareersSelector() {
        return Selector('#menu-item-5568');
    };

    async goToContactTopBar(expectedInnerText) {
        await t
            .expect(this.topBarContactSelector.innerText).contains(expectedInnerText)
            .click(this.topBarContactSelector);
    };
    
    async goToContactFooter(expectedInnerText) {
        await t
            .expect(this.footerContactSelector.innerText).contains(expectedInnerText)
            .click(this.footerContactSelector);
    };

    async goToMainPageThrughLogo() {
        await t
            .click(this.topBarLogoSelector);
    };

    async verifyPortfolioElemntsOnHover() {
        await t
            .hover(this.topBarPortfolioSelector)
            .expect(this.topBarPortfolioSelector.getAttribute('class')).contains('et-hover')
            .expect(this.topBarPortforlioFirstElementSelector.visible).eql(true);
    };

    async goToWebAutomationMobileTesting() {
        await t
            .click(this.topBarPortfolioWebAutomationMobileSelector);
    };

    async checkIfPortfolioHadBeenHighlighted(portfolionColourRGB) {
        await t
            .expect(this.topBarPortfolioSelector.getAttribute('class')).contains('current-menu')
            .expect(this.topBarPortfolioSelector.child('a').getStyleProperty('color')).eql(portfolionColourRGB);
    };

    async goToCareersTopBar(expectedInnerText) {
        await t
            .expect(this.topBarCareersSelector.innerText).contains(expectedInnerText)
            .click(this.topBarCareersSelector);
    };

}

export default new TopBar();