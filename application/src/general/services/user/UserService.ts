import * as injector from 'general/injector'

export type IUserService = {
	getUserName(): string
}

export const USER_SERVICE_KEY = 'UserService'

export function getInjectionPoint(): injector.InjectionPoint<IUserService> {
	return injector.getInjectionPoint(USER_SERVICE_KEY)
}

export default getInjectionPoint()
