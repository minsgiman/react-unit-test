import { useStores } from './useStores';

export function useUserNames() {
	const { user } = useStores();

	return {
		names: user.names,
		addName: user.addName,
	};
}
