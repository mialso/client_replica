type Services = string

export interface InjectionPoint<T> {
	(): T
}

let dependencies = new Map<string, any>()

export function getInjectionPoint(dependencyName: Services): any {
	return () => get<any>(dependencyName)
}

export function has(dependencyName: Services): boolean {
	return dependencies.has(dependencyName)
}

export function get<T>(dependencyName: Services): T {
	let dependency = dependencies.get(dependencyName)
	if (!dependency) {
		throw new Error(`Missing dependency: ${dependencyName}`)
	}
	return dependency
}

export function map(dependencyName: Services, instance: any): Services {
	if (dependencies.has(dependencyName)) {
		throw new Error(`Duplicate dependency: ${dependencyName}`)
	}
	dependencies.set(dependencyName, instance)
	return dependencyName
}

export function mapIfNeed(dependencyName: Services, instance: any): void {
	if (!dependencies.has(dependencyName)) {
		dependencies.set(dependencyName, instance)
	}
}

export function remove(dependencyName: Services): void {
	if (dependencies.has(dependencyName)) {
		dependencies.delete(dependencyName)
	}
}

export function clearAll(): void {
	dependencies.clear()
}

export const servicesArray = <S extends string>(arr: S[]) => arr;

export const servicesObject = <S extends string, T>(arr: [S,T][]) => arr.reduce((acc, item) => acc.set(item[0], item[1]), new Map<S,T>());

export const servicesMap = (arr: string[]): { [name: string]: true } => arr.reduce((acc, item) => {
	acc[item] = true;
	return acc;
}, {});
// export const servicesMap = <S extends string>(arr: S[]) => arr.reduce((acc, item) => acc.set(item, true), new Map<S,true>());
