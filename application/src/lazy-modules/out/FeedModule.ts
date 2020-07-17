// import {resolve} from "general/resolver";

type FeedModule = {
    getFeedButton(): HTMLButtonElement
}

/*
export function getFeedModule(): Promise<FeedModule> {
    return resolve<FeedModule>('feed')
}
*/

export function getFeedModule(): Promise<FeedModule> {
    return import(
        /* webpackChunkName: "feed" */
        '../feed/FeedImpl'
        )
}

export default getFeedModule;