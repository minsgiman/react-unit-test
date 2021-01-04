import { makeAutoObservable } from 'mobx';

export class LoginStore {
	isLoggedIn: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	toggleLoggedIn = () => {
		this.isLoggedIn = !this.isLoggedIn;
	};
}
