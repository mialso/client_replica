import {USER_SERVICE_KEY} from 'general/services/user'
import {ACCOUNT_SERVICE_KEY} from 'general/services/account'

export const boardRequiredServices = {
	[USER_SERVICE_KEY]: true,
	[ACCOUNT_SERVICE_KEY]: true,
}

const boardOwnServices = {}

export type BoardRequiredServices = typeof boardRequiredServices
export type BoardServices = typeof boardOwnServices & BoardRequiredServices

export function initBoardServices(services: BoardRequiredServices): BoardServices {
	const hasCorrectServices = Object.keys(boardRequiredServices).reduce(
		(acc, serviceKey) => acc && services[serviceKey],
		true,
	)
	if (!hasCorrectServices) {
		throw new Error('Board: wrong services')
	}
	return services
}
