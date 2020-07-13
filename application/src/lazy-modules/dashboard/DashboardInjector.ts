import {map as injectorMap} from 'general/injector'
import {MentionService} from 'application/dashboard/services/MentionServiceImpl'
import {MENTION_SERVICE_KEY} from 'application/dashboard/services/MentionService'
import {USER_SERVICE_KEY} from 'general/services/user'

export const dashboardRequiredServices = {
	[USER_SERVICE_KEY]: true,
}

const dashboardOwnServices = {
	[MENTION_SERVICE_KEY]: false,
}

export type DashboardRequiredServices = typeof dashboardRequiredServices
export type DashboardServices = typeof dashboardOwnServices & DashboardRequiredServices

export function initDashboardServices(services: DashboardRequiredServices): DashboardServices {
	const hasCorrectServices = Object.keys(dashboardRequiredServices).reduce(
		(acc, serviceKey) => acc && services[serviceKey],
		true,
	)
	if (!hasCorrectServices) {
		throw new Error('Dashboard: wrong services')
	}
	return {
		...services,
		[MENTION_SERVICE_KEY]: injectorMap(MENTION_SERVICE_KEY, new MentionService())
	}
}
