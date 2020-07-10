import {servicesMap, map as injectorMap} from 'general/injector'
import {USER_SERVICE_KEY} from 'general/services/UserService'
import {UserService} from 'general/services/UserServiceImpl'

export const boardServicesArr = <const>[USER_SERVICE_KEY]
// export const boardServicesMap = servicesMap([USER_SERVICE_KEY])
export const boardServicesMap = {
	[USER_SERVICE_KEY]: true
}

export function initBoardServices(): void {
	injectorMap(USER_SERVICE_KEY, new UserService())
}
