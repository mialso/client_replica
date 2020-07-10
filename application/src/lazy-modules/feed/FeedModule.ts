type FeedModule = {
    getFeedButton(): HTMLButtonElement
}

type FeedDependencies = {
    userService: {
        getUserName(): string,
    }
}

export function getFeedModule<T extends FeedDependencies>(x: T): Promise<FeedModule> {
    return import(
        /* webpackChunkName: "feed" */
        './FeedImpl')
}

export default getFeedModule;
