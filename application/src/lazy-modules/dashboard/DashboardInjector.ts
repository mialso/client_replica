import {servicesArray, servicesMap, map as injectorMap} from 'general/injector'
import {UserService} from 'general/services/UserServiceImpl'
import {MentionService} from 'application/dashboard/services/MentionServiceImpl'
import {USER_SERVICE_KEY} from 'general/services/UserService'
import {MENTION_SERVICE_KEY} from 'application/dashboard/services/MentionService'

export const dashRequiredServicesArr = [USER_SERVICE_KEY]
export const dashInitedServicesArr = [MENTION_SERVICE_KEY]
export const dashServicesArr = <const>[...dashInitedServicesArr, ...dashRequiredServicesArr]
export const dashServices = servicesArray([USER_SERVICE_KEY, MENTION_SERVICE_KEY])
export const dashServicesMap = {
	[USER_SERVICE_KEY]: true,
	[MENTION_SERVICE_KEY]: true,
}

export type DashboardServiceKey = (typeof dashServices)[number]

export function initDashboardServices(): void {
	injectorMap(USER_SERVICE_KEY, new UserService())
	injectorMap(MENTION_SERVICE_KEY, new MentionService())
}
