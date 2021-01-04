import React from 'react';
import './App.css';
import { Provider } from 'mobx-react';
import { LoginStore, UserStore } from './stores';
import UserInfo from './components/userInfo';
import LoginInfo from './components/loginInfo';

const user = new UserStore(['ok', 'ggo']);
const login = new LoginStore();

const App = () => {
	return (
		<Provider user={user} login={login}>
			<div>lorem</div>
			<UserInfo />
			<LoginInfo />
		</Provider>
	);
};

export default App;
