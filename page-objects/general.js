import {t, ClientFunction} from "testcafe";

const getURL = ClientFunction(() => window.location.href);

class General {
    
    async maximizeWindow() {
        await t
            .maximizeWindow();
    };

    async checkURL(link) {
        await t
            .expect(getURL()).contains(link);
    };

    async getUrl() {
        t.ctx.genericUrl = await getURL();
    };
    
}

export default new General();