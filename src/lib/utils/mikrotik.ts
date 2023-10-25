import {
	SECRET_MIKROTIK_IP,
	SECRET_MIKROTIK_USER,
	SECRET_MIKROTIK_PASS
} from '$env/static/private';
import { RouterOSAPI } from 'node-routeros';

// ?=id=
export const mikrotik = async (command: string, value?: string[]) => {
	const conn = new RouterOSAPI({
		host: SECRET_MIKROTIK_IP,
		user: SECRET_MIKROTIK_USER,
		password: SECRET_MIKROTIK_PASS
	});

	try {
		let response;
		const get = await conn.connect();
		if (value) {
			response = await get.write(command, value);
		}
		response = await get.write(command);
		return [response, null];
	} catch (err) {
		console.error(err);
		return ['something went wrong', err];
	} finally {
		if (conn.connected) {
			try {
				console.log('command done, connection closed');
				await conn.close();
			} catch (err) {
				console.log('Error connection terminated!', err);
			}
		}
	}
};
