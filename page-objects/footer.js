import { t, Selector} from "testcafe";

class Footer {


    get footerContactSelector() {
        return Selector('#menu-item-747');
    };

    async goToContactFooter(expectedInnerText) {
        await t
            .hover(this.footerContactSelector)
            .expect(this.footerContactSelector.innerText).contains(expectedInnerText)
            .click(this.footerContactSelector);
    };

}

export default new Footer();