import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, take, debounceTime } from "rxjs/operators";
import { AngularFirestore } from "angularfire2/firestore";

export class loginValidator{
    static usernameInvalid(afs: AngularFirestore) {
        return (control: AbstractControl) => {

            const username = control.value.toLowerCase();

            return afs.collection('candidates', ref => ref.where('username', '==', username)).valueChanges().pipe(
                debounceTime(1000),
                take(1),
                map(arr => arr.length ? { usernameUnavailable: true } : null),
            )
        }
    } 
    
    static emailInvalid(afs: AngularFirestore) {
        return (control: AbstractControl) => {

            const email = control.value.toLowerCase();

            return afs.collection('candidates', ref => ref.where('email', '==', email)).valueChanges().pipe(
                debounceTime(1000),
                take(1),
                map(arr => arr.length ? { emailUnavailable: true } : null),
            )
        }
    }
}
