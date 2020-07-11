import {IAccountService} from 'general/services/account'

export class AccountService implements IAccountService {
	getAccountId() {
		return 'some_account_id';
	}
}

