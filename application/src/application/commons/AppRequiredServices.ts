import {map as injectorMap} from 'general/injector'
import {USER_SERVICE_KEY} from 'general/services/user'
import {ACCOUNT_SERVICE_KEY} from 'general/services/account'
import {UserService} from 'general/services/user/UserServiceImpl'
import {AccountService} from 'general/services/account/AccountServiceImpl'

export function initRequiredServices() {
	injectorMap(USER_SERVICE_KEY, new UserService())
	injectorMap(ACCOUNT_SERVICE_KEY, new AccountService())
}
