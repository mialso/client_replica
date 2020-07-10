import * as injector from 'general/injector'

export type IMentionService = {
	mentionMe(): void
}

export const MENTION_SERVICE_KEY = 'MentionService';

export function getInjectionPoint(): injector.InjectionPoint<IMentionService> {
	return injector.getInjectionPoint(MENTION_SERVICE_KEY)
}

export default getInjectionPoint()
