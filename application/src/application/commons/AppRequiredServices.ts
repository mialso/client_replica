import {map as injectorMap} from 'general/injector'
import {USER_SERVICE_KEY} from 'general/services/user'
import {UserService} from 'general/services/user/UserServiceImpl'

const appServices = <const>[USER_SERVICE_KEY]

export function initRequiredServices() {
	injectorMap(USER_SERVICE_KEY, new UserService())
	return appServices
}
