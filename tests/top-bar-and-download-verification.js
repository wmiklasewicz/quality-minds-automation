import {RequestLogger} from 'testcafe';
import TopBar from '../page-objects/top-bar';
import General from '../page-objects/general';
import Portfolio from '../page-objects/portfolio-page';
import Downloader from '../page-objects/downloader';
import * as dotEnv from 'dotenv';
dotEnv.config();
const dataSet =  require('../test-data/test-data.json');

const logger = RequestLogger(/https:\/\/qualityminds.de*/,
    {
        logRequestHeaders: true,
        logRequestBody: true,
        logResponseHeaders: true,
    });

fixture('Top bar and download')
    .page(process.env.CORPORATE_SITE_PROD_ADDRESS)
    .requestHooks(logger)

dataSet.forEach(data => {
    test
        .meta({mobile: 'false', desktop: 'true', testCase: 'TC2', project: 'corporateSite', browser: 'all'})
        (`Check top bar navigation as well as file download| data set: ${data.dataSet}`, async t => {
            await General.maximizeWindow();
            await TopBar.verifyPortfolioElemntsOnHover();
            await TopBar.goToWebAutomationMobileTesting();
            await General.checkURL(data.webAutomationMobileTestsLink);
            await TopBar.checkIfPortfolioHadBeenHighlighted(data.portfolioTopNavColour);
            await Portfolio.clickOnWamMobileTabAndCheckColour(data.wamMobileUnderlineColour);
            await Portfolio.checkWamMobileDownloadButton(data.wamMobileDownloadLink);
            await Downloader.downloadFileCheck(Portfolio.mobileFlyerDownloadButton, logger, data.wamMobileDownloadFileName);
        })
})

