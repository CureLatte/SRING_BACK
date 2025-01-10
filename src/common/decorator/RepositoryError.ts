export function RepositoryError() {
	return (target: any, key: string, descriptor: any) => {
		const originMethod = descriptor.value;

		descriptor.value = async function (...arg: any) {
			try {
				return await originMethod.apply(this, arg);
			} catch (err) {
				console.log(
					`RepositoryError \nclass: [${target.constructor.name}]\nmethod [${key}(${arg})] \n${err.stack}`,
				);
				throw err;
			}
		};

		return descriptor;
	};
}
