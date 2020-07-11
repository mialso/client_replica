import {USER_SERVICE_KEY} from 'general/services/user'

export const boardRequiredServices = <const>[USER_SERVICE_KEY]
export const boardServicesArr = boardRequiredServices

export type BoardRequiredServices = typeof boardRequiredServices

export function initBoardServices(): void {
}
