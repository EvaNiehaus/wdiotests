import Page from './page';

class LoginPage extends Page {
    get inputUsername() {
        return $('#normal_login_email');
    }

    get inputPassword() {
        return $('#normal_login_password');
    }

    get buttonSubmit() {
        return $('.login-form-button');
    }

    open() {
        return super.open('/');
    }

    setLogin(email) {
        this.inputUsername.setValue(email);
    }

    setPassword(password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton() {
        this.buttonSubmit.click();
    }
    submitButtonIsDisabled(){
        expect(this.buttonSubmit).toBeDisabled();
    }
}

export default new LoginPage();