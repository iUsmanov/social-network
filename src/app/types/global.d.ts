declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';

declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module '*.svg' {
	import React from 'react';
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

// GLOBAL VARIABLES
declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __ENVIRON__: string;

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
		}
	: T;

type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T;
};

declare namespace React {
	function lazy<T extends ComponentType<any>>(factory: () => Promise<{ default: T }>): T;
}
