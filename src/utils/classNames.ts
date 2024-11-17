export const classNames = (...modules: string[]) => {
	return modules.filter((module) => typeof module === 'string').join(" ");
};