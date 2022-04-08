import { t, Selector} from "testcafe";

class PortfolioPage {
    get wamMobileTab() {
        return Selector('#team-tab-three-title-desktop');
    };

    get downloadImageAndButonSelector() {
        return Selector('#team-tab-three-body').child('div').nth(1);
    };

    get mobileFlyerDownloadButton() {
        return Selector('a').withAttribute('download','FLYER FIND THE BUG SESSION');
    };

    async clickOnWamMobileTabAndCheckColour(colourRGB) {
        await t
            .click(this.wamMobileTab)
            .expect(this.wamMobileTab.parent().getStyleProperty('border-bottom-color')).eql(colourRGB);       
    };

    async checkWamMobileDownloadButton(downloadLink) {
        await t
            .expect(this.downloadImageAndButonSelector.getStyleProperty('margin-right')).eql('0px')
            .expect(this.mobileFlyerDownloadButton.getAttribute('href')).eql(downloadLink)
            .hover(this.mobileFlyerDownloadButton);
    };

}

export default new PortfolioPage();