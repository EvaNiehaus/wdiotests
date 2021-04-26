import PortalPage from "./portal.page";

class CoursesPage extends PortalPage{
    get sectionHeader () {return $('section > div > h1');}

    open() {
        return super.open('/course');
    }

    isOpen () {
        expect(browser).toHaveUrlContaining('/course');
        expect(this.sectionHeader).toHaveText('Interactive Courses');
    }
//
//     isOpen () {
//         expect(browser).toHaveUrlContaining('/flash');
//         expect(this.sectionHeader).toHaveText('Interview Practice Cards');
//     }
//
//     isOpen () {
//         expect(browser).toHaveUrlContaining('/diary');
//         expect(this.sectionHeader).toHaveText('Daily reports');
//     }
//     isOpen () {
//         expect(browser).toHaveUrlContaining('/challenge');
//         expect(this.sectionHeader).toHaveText('Challenges');
//     }
 }

export default new CoursesPage();