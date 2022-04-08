import {t, Selector} from "testcafe";

class Careers {
    
 get applyNowButtonSelector() {
     return Selector('a').withExactText('BEWIRB DICH JETZT!');
 };
 
 get submitDataFormButtonSelector() {
    return Selector('#fld_1982372_1');
 };

 get applyNowFirstNameSelector() {
     return Selector('#fld_1144146_1-wrap');
 };

 get applyNowLastNameSelector() {
    return Selector('#fld_7067875_1-wrap');
 };

 get applyNowEmailSelector() {
     return Selector('#fld_3149235_1-wrap');
 };

 get applyNowAttachmentUploadButtonSelector() {
     return Selector('#fld_8583967_1');
 };

 get applyNowFirstAttachedFile() {
    return Selector('#cf2-list-files-fld_8583967_1');
 };

 get applyNowDataProtectionCheckboxSelector() {
     return Selector('#fld_4989725_1_opt1865542');
 };

 get applyNowDataProtectionCheckboxChecked() {
     return Selector('label').withAttribute('class', 'checkbox-inline parsley-success').exists;
 };

 async clickApplyNow() {
    let rand = Math.floor((Math.random() * 1) +0.5);
    await t.click(this.applyNowButtonSelector.nth(rand));
 };

 async applyNowClickSubmitData() {
    await t
        .click(this.submitDataFormButtonSelector);
 };

 async applyNowVerifyErrorFirstName(errorMessage) {
    await t.expect(this.applyNowFirstNameSelector.child('span').innerText).contains(errorMessage);
 };

 async applyNowVerifyErrorLastName(errorMessage) {
     await t.expect(this.applyNowLastNameSelector.child('span').innerText).contains(errorMessage);
 };

 async applyNowVerifyErrorEmail(errorMessage) {
    await t.expect(this.applyNowEmailSelector.child('span').innerText).contains(errorMessage);
 };
 
 async applyNowVerifyErrorAppearsFirstLastMail(errorMessage) {
     await this.applyNowVerifyErrorFirstName(errorMessage);
     await this.applyNowVerifyErrorLastName(errorMessage);
     await this.applyNowVerifyErrorEmail(errorMessage);
 };

 async applyNowFillName(name) {
     await t
        .typeText(this.applyNowFirstNameSelector, name);
 };

 async applyNowFillLastName(lastName) {
     await t
        .typeText(this.applyNowLastNameSelector, lastName);
 };
 
 async applyNowFillEmail(email) {
     await t    
        .typeText(this.applyNowEmailSelector, email);
 };

 async applyNowAttachmentUpload(fileName) {
     await t
        .setFilesToUpload(this.applyNowAttachmentUploadButtonSelector, [
            `../resources/${fileName}`
        ])
        .expect(this.applyNowFirstAttachedFile.child('li').innerText).contains(fileName);
 };

 async applyNowClickDataProtectionCheckbox() {
     await t
        .click(this.applyNowDataProtectionCheckboxSelector)
        .expect(this.applyNowDataProtectionCheckboxChecked).ok();
 };
}

export default new Careers();
