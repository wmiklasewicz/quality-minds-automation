import {t} from 'testcafe';
import General from './general';

class DownloadFile {

    async downloadFileCheck(downloadButtonSelector, logger, fileTitle) {
        await General.getUrl();
        logger.clear();
        await t
            .click((downloadButtonSelector))
            .wait(5000);
        await t.expect(logger.requests[0].request.headers.referer).eql(t.ctx.genericUrl);
        await t.expect(logger.requests[0].response.headers['content-type']).eql('application/pdf');
        await t.expect(logger.requests[0].request.url).contains(fileTitle);
    };
}

export default new DownloadFile();
