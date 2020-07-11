import * as injector from 'general/injector'

export type IAccountService = {
	getAccountId(): string
}

export const ACCOUNT_SERVICE_KEY = 'AccountService'

export function getInjectionPoint(): injector.InjectionPoint<IAccountService> {
	return injector.getInjectionPoint(ACCOUNT_SERVICE_KEY)
}

export default getInjectionPoint()

