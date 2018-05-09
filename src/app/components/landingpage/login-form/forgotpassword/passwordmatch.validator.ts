import { AbstractControl, ValidationErrors } from '@angular/forms';


export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('passwordEnter').value;
        let confirmPassword = AC.get('passwordReEnter').value;
        if (password != confirmPassword && confirmPassword == '') {
            AC.get('passwordReEnter').setErrors({ MatchPassword: true, required:true })
        } else if (password != confirmPassword){
            AC.get('passwordReEnter').setErrors({MatchPassword: true})
        } else {
            return null
        }
    }

    static RegisteredEmail(AC: AbstractControl):Promise<ValidationErrors |null>{
        let emails = ['iliyaz@gmail', 'iliyaz@yahoo', 'ili@goo'];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (emails.indexOf(AC.value) == -1) {
                    resolve({EmailNotFound:true})
                }else{
                    resolve(null)
                }
            }, 2000)
        });
    }

    static SecurityAnswer(AC: AbstractControl):Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (AC.value !== "minnu") {
                    resolve({ SecurityAnswerWrong: true })
                } else {
                    resolve(null)
                }
            }, 2000)
        })
    }

}
