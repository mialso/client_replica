type FeedModule = {
    getFeedButton(): HTMLButtonElement
}

export function getFeedModule(): Promise<FeedModule> {
    return import(
        /* webpackChunkName: "feed" */
        './FeedImpl')
}

export default getFeedModule;
