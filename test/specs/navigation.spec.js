import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe('Navigation', () => {
    before(() =>{
        browser.login('nipixid409@naymeo.com','123456');
    });

    beforeEach(() => {
        //browser.pause(3000);
        MainPage.open();
    });

    it('courses page opens', () => {
        MainPage.goToCourses();
        CoursesPage.isOpen(); // написать самим на остальные странички diary etc
    })
});