import { t, Selector} from "testcafe";

class ContactPage {
    get contactPageMailSelector() {
        return Selector('span').withAttribute('id',/eeb-*/);
    };

    async verifyContactPageMail(mail) {
        await t
            .expect(this.contactPageMailSelector.innerText).contains(mail);
    };
   
}

export default new ContactPage();