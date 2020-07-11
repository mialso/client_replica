import {map as injectorMap} from 'general/injector'
import {USER_SERVICE_KEY} from 'general/services/user'
import {MentionService} from 'application/dashboard/services/MentionServiceImpl'
import {MENTION_SERVICE_KEY} from 'application/dashboard/services/MentionService'

export const dashRequiredServicesArr = <const>[USER_SERVICE_KEY]
export const dashInitedServicesArr = [MENTION_SERVICE_KEY]
export const dashServicesArr = <const>[USER_SERVICE_KEY, MENTION_SERVICE_KEY]

export type DashboardRequiredServices = typeof dashRequiredServicesArr

export function initDashboardServices(): void {
	injectorMap(MENTION_SERVICE_KEY, new MentionService())
}
