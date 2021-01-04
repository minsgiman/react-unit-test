import { observer } from 'mobx-react';
import { useStores } from '../stores';

const UserInfo = observer(() => {
	const { user } = useStores();
	const addItem = () => {
		user.addName('added');
	};
	const updateText = () => {
		user.updateText('updated');
	};

	return (
		<div>
			<h2>{user.text}</h2>
			<button onClick={updateText}>update</button>

			{user.names.map((name: string, index: number) => {
				return <p key={`${name} + ${index}`}>{name}</p>;
			})}
			<button onClick={addItem}>add</button>
		</div>
	);
});

export default UserInfo;
