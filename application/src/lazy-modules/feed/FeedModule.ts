import {servicesArray, servicesMap} from 'general/injector'
import {USER_SERVICE_KEY} from 'general/services/UserService'
import {MENTION_SERVICE_KEY} from 'application/dashboard/services/MentionService'

type FeedModule = {
    getFeedButton(): HTMLButtonElement
}

const feedServicesArr = <const>[USER_SERVICE_KEY, MENTION_SERVICE_KEY]
// const feedServicesArr = servicesArray([USER_SERVICE_KEY, MENTION_SERVICE_KEY])
// const feedServicesMap = servicesMap([USER_SERVICE_KEY, MENTION_SERVICE_KEY])
const feedServicesMap = {
	[USER_SERVICE_KEY]: true,
	[MENTION_SERVICE_KEY]: true,
}

type FeedServices = typeof feedServicesArr
// type FeedServices = typeof feedServicesMap

type FeedDependencies = {
    userService: {
        getUserName(): string,
    }
}

export function getFeedModule<T extends FeedServices>(x: T): Promise<FeedModule> {
	if (x[0] !== USER_SERVICE_KEY) {
		return Promise.reject(new Error('Feed: wrong dependences')) 
	}
    return import(
        /* webpackChunkName: "feed" */
        './FeedImpl')
}

export default getFeedModule;
