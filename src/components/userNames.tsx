import { useUserNames } from '../stores';
import { observer } from 'mobx-react';

const UserNames = observer(() => {
	const { names, addName } = useUserNames();
	const addItem = () => {
		addName('added');
	};

	return (
		<div>
			{names.map((name: string, index: number) => {
				return <p key={`${name} + ${index}`}>{name}</p>;
			})}
			<button onClick={addItem}>add</button>
		</div>
	);
});

export default UserNames;
