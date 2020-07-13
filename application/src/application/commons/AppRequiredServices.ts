import {map as injectorMap} from 'general/injector'
import {USER_SERVICE_KEY} from 'general/services/user'
import {ACCOUNT_SERVICE_KEY} from 'general/services/account'
import {UserService} from 'general/services/user/UserServiceImpl'
import {AccountService} from 'general/services/account/AccountServiceImpl'

const appServices = {
	[USER_SERVICE_KEY]: false,
	[ACCOUNT_SERVICE_KEY]: false,
}

type AppServices = typeof appServices

export function initRequiredServices(): AppServices {
	return {
		[USER_SERVICE_KEY]: injectorMap(USER_SERVICE_KEY, new UserService()),
		[ACCOUNT_SERVICE_KEY]: injectorMap(ACCOUNT_SERVICE_KEY, new AccountService()),
	}
}
