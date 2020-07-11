import {USER_SERVICE_KEY} from 'general/services/user'
import {MENTION_SERVICE_KEY} from 'application/dashboard/services/MentionService'

type FeedModule = {
    getFeedButton(): HTMLButtonElement
}

const feedServicesArr = <const>[USER_SERVICE_KEY, MENTION_SERVICE_KEY]

type FeedServices = typeof feedServicesArr

export function getFeedModule<T extends FeedServices>(x: T): Promise<FeedModule> {
	if (x.indexOf(USER_SERVICE_KEY) === -1) {
		return Promise.reject(new Error('Feed: wrong dependences')) 
	}
    return import(
        /* webpackChunkName: "feed" */
        './FeedImpl')
}

export default getFeedModule;
