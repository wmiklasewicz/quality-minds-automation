
import TopBar from '../page-objects/top-bar';
import General from '../page-objects/general';
import Careers from '../page-objects/careers-page';
import * as dotEnv from 'dotenv';
dotEnv.config();
const dataSet =  require('../test-data/test-data.json');

fixture('Forms verification')
    .page(process.env.CORPORATE_SITE_PROD_ADDRESS)

dataSet.forEach(data => {
    test
        .meta({mobile: 'false', desktop: 'true', testCase: 'TC3', project: 'corporateSite', browser: 'all'})
        (`Check validation of vairious forms| data set: ${data.dataSet}`, async t => {
            await General.maximizeWindow();
            await TopBar.goToCareersTopBar(data.careersTopBarInnerText);
            await General.checkURL(data.careersPageLink);
            await Careers.clickApplyNow();
            await General.checkURL(data.careersApplyNowForm);
            await Careers.applyNowClickSubmitData();
            await Careers.applyNowVerifyErrorAppearsFirstLastMail(data.applyNowEmptyFieldsErrorMessage);
            await Careers.applyNowFillName(data.applyNowName);
            await Careers.applyNowFillLastName(data.applyNowLastName);
            await Careers.applyNowClickSubmitData();
            await Careers.applyNowVerifyErrorEmail(data.applyNowEmptyFieldsErrorMessage);
            await Careers.applyNowFillEmail(data.applyNowEmail);
            await Careers.applyNowClickSubmitData();
            await Careers.applyNowVerifyErrorEmail(data.applyNowWrongEmailErrorMessage);
            await Careers.applyNowAttachmentUpload(data.applyNowAttachmentFileName);
            await Careers.applyNowClickDataProtectionCheckbox();
        })
})

