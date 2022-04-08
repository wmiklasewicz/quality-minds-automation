import TopBar from '../page-objects/top-bar';
import Footer from '../page-objects/footer';
import General from '../page-objects/general';
import ContactPage from '../page-objects/contact-page';
import * as dotEnv from 'dotenv';
dotEnv.config();
const dataSet =  require('../test-data/test-data.json');

fixture('Contact page navigation')
    .page(process.env.CORPORATE_SITE_PROD_ADDRESS)

dataSet.forEach(data => {
    test
        .meta({mobile: 'false', desktop: 'true', testCase: 'TC1', project: 'corporateSite', browser: 'all'})
        (`Check contact navigation from top bar and footer| data set: ${data.dataSet}`, async t => {
            await General.maximizeWindow();
            await TopBar.goToContactTopBar(data.contactTopBarInnerText);
            await General.checkURL(data.contactPageLink);
            await ContactPage.verifyContactPageMail(data.contactPageMail);
            await TopBar.goToMainPageThrughLogo();
            await General.checkURL(process.env.CORPORATE_SITE_PROD_ADDRESS);
            await Footer.goToContactFooter(data.contactFooterInnextText);
            await ContactPage.verifyContactPageMail(data.contactPageMail);
            await General.checkURL(data.contactPageLink);
        })
})

