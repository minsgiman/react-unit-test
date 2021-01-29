import React from 'react';
import './App.css';
import { Provider } from 'mobx-react';
import { LoginStore, UserStore } from './stores';
import UserInfo from './components/userInfo';
import LoginInfo from './components/loginInfo';
import UserNames from './components/userNames';

const user = new UserStore(['user2', 'ok']);
const login = new LoginStore();

const App = () => {
	return (
		<Provider user={user} login={login}>
			<div>lorem</div>
			<UserNames />
		</Provider>
	);
};

export default App;
