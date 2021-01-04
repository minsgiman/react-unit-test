import { makeAutoObservable } from 'mobx';

export class UserStore {
	names: string[] = [];
	text: string = 'teststr';

	constructor(names: string[]) {
		this.names = names;
		makeAutoObservable(this);
	}

	addName = (name: string) => {
		this.names.push(name);
	};

	updateText = (text: string) => {
		this.text = text;
	};
}
