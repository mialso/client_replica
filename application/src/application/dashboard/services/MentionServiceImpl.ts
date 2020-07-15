import {IMentionService} from './MentionService'

export class MentionService implements IMentionService {
	mentionMe(): void {
		console.info('mentioned');
	}
}

export function mentionHelper() {
	return 'some help'
}
