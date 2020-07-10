import {IUserService} from './UserService'

export class UserService implements IUserService {
	getUserName() {
		return 'User One';
	}
}
