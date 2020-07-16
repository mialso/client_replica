import {resolve} from "general/resolver";

type FeedModule = {
    getFeedButton(): HTMLButtonElement
}

export function getFeedModule(): Promise<FeedModule> {
    return resolve<FeedModule>('feed')
}

export default getFeedModule;