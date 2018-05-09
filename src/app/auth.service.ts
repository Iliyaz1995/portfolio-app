import { Router, CanActivate } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()

export class myAuthGuard implements CanActivate{

    constructor(private afAuth: AngularFireAuth, private router: Router) { }

    canActivate(): Observable<boolean> {
        return this.afAuth.authState
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/']);
                }
            });
        }
}