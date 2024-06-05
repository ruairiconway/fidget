// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	// COMPONENTS
	declare const FidgetOne: (typeof import('./components/FidgetOne.svelte'))['default'];

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
