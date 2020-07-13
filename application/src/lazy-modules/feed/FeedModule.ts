import {USER_SERVICE_KEY} from 'general/services/user'
import {MENTION_SERVICE_KEY} from 'application/dashboard/services/MentionService'

const feedRequiredServices = {
	[USER_SERVICE_KEY]: true,
	[MENTION_SERVICE_KEY]: true,
}

export type FeedServices = typeof feedRequiredServices

type FeedModule = {
    getFeedButton(): HTMLButtonElement
}

export function getFeedModule(services: FeedServices): Promise<FeedModule> {
	const hasCorrectServices = Object.keys(feedRequiredServices).reduce(
		(acc, serviceKey) => acc && services[serviceKey],
		true,
	)
	if (!hasCorrectServices) {
		throw new Error('Feed: wrong services')
	}
    return import(
        /* webpackChunkName: "feed" */
        './FeedImpl')
}

export default getFeedModule;
