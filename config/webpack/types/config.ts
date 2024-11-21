export type BuildMode = 'production' | 'development';

export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
	src: string;
}

export interface BuildOptions {
	isDev: boolean;
	mode: BuildMode;
	port: number;
	buildPaths: BuildPaths;
	analyze?: boolean;
	apiURL: string;
	environ: 'jest' | 'storybook' | 'app';
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
	analyze?: boolean;
	apiURL: string;
}
