import {map as injectorMap} from 'general/injector'
import {MentionService} from 'application/dashboard/services/MentionServiceImpl'
import {MENTION_SERVICE_KEY} from 'application/dashboard/services/MentionService'

export function initDashboardServices(): void {
	injectorMap(MENTION_SERVICE_KEY, new MentionService())
}
