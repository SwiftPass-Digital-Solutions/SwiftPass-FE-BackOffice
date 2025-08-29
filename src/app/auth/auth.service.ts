import { computed, Injectable, signal } from "@angular/core";
import { User } from "@shared/models/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _user = signal<User | null>(null);
    readonly user = computed(() => this._user());

    setUser(user: User){
        this._user.set(user);
    }

    getUser(){
        return this._user();
    }
}
