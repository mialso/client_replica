import {IUserService} from 'general/services/user'

export class UserService implements IUserService {
	getUserName() {
		return 'User One';
	}
}
