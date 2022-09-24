const AdminPage = require("../pageobjects/admin.page");
const LoginPage = require("../pageobjects/login.page");
const JobTitlesTab = require("../pageobjects/job.tab.screen");
const { jobTitleData, modalMessages, loginUrlContainingRegExp } = require("../constants/constants");
const CommonActions = require("../../utils/common.actions");
const StatusMessageModal = require("../pageobjects/modals/status.message.modal");
const DeleteJobModal = require("../pageobjects/modals/delete.job.modal");
const TitleFormTab = require("../pageobjects/title.form.tab");

describe('Orange Application', () => {
    before(async () => {
        await LoginPage.open();
        await expect(browser).toHaveUrlContaining(loginUrlContainingRegExp);
        const validCredentials = await LoginPage.getValidCredentials();
        await LoginPage.login(validCredentials.name, validCredentials.pwd);
        await expect($('div.oxd-topbar-header-userarea')).toBeDisplayed();
    })

    it('should add new job', async () => {
        await AdminPage.openJobTitlesPage();

        await JobTitlesTab.clickAddButton();

        await TitleFormTab.addJobTitle(jobTitleData);

        await expect(StatusMessageModal.modalcontainer).toBeDisplayed();
        await expect(StatusMessageModal.modalMessage).toHaveTextContaining(modalMessages.success);
    })

    it('should display newly added title in the grid', async () => {
        const cardData = await JobTitlesTab.getNewCardDataFromGrid();

        await expect(cardData.title).toEqual(jobTitleData.TITLE);
        await expect(cardData.description).toEqual(jobTitleData.DESCRIPTION);
    })

    it('should modify newly job description', async () => {
        await JobTitlesTab.checkCheckbox();
        await JobTitlesTab.clickEditButton();

        await TitleFormTab.modifyDescription(CommonActions.clearInputValue, jobTitleData);

        await expect(StatusMessageModal.modalcontainer).toBeDisplayed();
        await expect(StatusMessageModal.modalMessage).toHaveTextContaining(modalMessages.success);
    })

    it('should display changes in newly added job description in in the grid', async () => {
        const cardData = await JobTitlesTab.getNewCardDataFromGrid();

        await expect(cardData.title).toEqual(jobTitleData.TITLE);
        await expect(cardData.description).toEqual(jobTitleData.NEW_DESCRIPTION);
    })

    it('should remove newly added card from the grid', async () => {
        await JobTitlesTab.checkCheckbox();
        await JobTitlesTab.clickRemoveButton();

        await DeleteJobModal.confirmDelete();

        await expect(StatusMessageModal.modalcontainer).toBeDisplayed();
        await expect(StatusMessageModal.modalMessage).toHaveTextContaining(modalMessages.success);
        await expect(JobTitlesTab.newlyAddedTitleCard).not.toBeDisplayed();
    })
})
