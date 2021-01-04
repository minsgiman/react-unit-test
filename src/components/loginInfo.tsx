import { observer } from 'mobx-react';
import { useStores } from '../stores';

const LoginInfo = observer(() => {
	const { login } = useStores();
	const toggle = () => {
		login.toggleLoggedIn();
	};

	return (
		<div>
			<h2>{login.isLoggedIn ? 'true' : 'false'}</h2>
			<button onClick={toggle}>toggle</button>
		</div>
	);
});

export default LoginInfo;
