export function resolve<T>(moduleId: string): Promise<T> {
    return import(
        /* webpackChunkName: "[request]_module" */
        `lazy-modules/${moduleId}`) as Promise<T>;
}