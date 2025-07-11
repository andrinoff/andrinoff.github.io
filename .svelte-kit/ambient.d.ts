
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const STARSHIP_SHELL: string;
	export const SOURCE_ANNOTATION_DIRECTORIES: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const XDG_DATA_HOME: string;
	export const INIT_CWD: string;
	export const TERM: string;
	export const SHELL: string;
	export const SAVEHIST: string;
	export const HISTSIZE: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const RIPGREP_CONFIG_PATH: string;
	export const npm_config_global_prefix: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_config_init_author_email: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const ZDOTDIR: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const GIT_EDITOR: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const VSCODE_PROFILE_INITIALIZED: string;
	export const npm_execpath: string;
	export const FZF_DEFAULT_OPTS: string;
	export const DOTFILES: string;
	export const PATH: string;
	export const RUBY_CONFIGURE_OPTS: string;
	export const npm_package_json: string;
	export const npm_config_engine_strict: string;
	export const LaunchInstanceID: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const ABBR_USER_ABBREVIATIONS_FILE: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const npm_command: string;
	export const PWD: string;
	export const FZF_ALT_C_COMMAND: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const XDG_STATE_HOME: string;
	export const npm_config_npm_version: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const GPG_TTY: string;
	export const VSCODE_INJECTION: string;
	export const SHLVL: string;
	export const MANPAGER: string;
	export const HOME: string;
	export const XDG_CONFIG_HOME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const HOMEBREW_PREFIX: string;
	export const XDG_CACHE_HOME: string;
	export const BUNDLER_EDITOR: string;
	export const npm_config_cache: string;
	export const LOGNAME: string;
	export const HIST_STAMPS: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_lifecycle_script: string;
	export const FZF_CTRL_T_COMMAND: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const PKG_CONFIG_PATH: string;
	export const HOMEBREW_CASK_OPTS: string;
	export const npm_config_user_agent: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const OSLogRateLimit: string;
	export const npm_config_init_author_name: string;
	export const SECURITYSESSIONID: string;
	export const HISTFILE: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
	export const _: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		STARSHIP_SHELL: string;
		SOURCE_ANNOTATION_DIRECTORIES: string;
		TERM_PROGRAM: string;
		NODE: string;
		XDG_DATA_HOME: string;
		INIT_CWD: string;
		TERM: string;
		SHELL: string;
		SAVEHIST: string;
		HISTSIZE: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		RIPGREP_CONFIG_PATH: string;
		npm_config_global_prefix: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		npm_config_init_author_email: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		ZDOTDIR: string;
		COLOR: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		GIT_EDITOR: string;
		USER: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		VSCODE_PROFILE_INITIALIZED: string;
		npm_execpath: string;
		FZF_DEFAULT_OPTS: string;
		DOTFILES: string;
		PATH: string;
		RUBY_CONFIGURE_OPTS: string;
		npm_package_json: string;
		npm_config_engine_strict: string;
		LaunchInstanceID: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		ABBR_USER_ABBREVIATIONS_FILE: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		npm_command: string;
		PWD: string;
		FZF_ALT_C_COMMAND: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		LANG: string;
		XDG_STATE_HOME: string;
		npm_config_npm_version: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		GPG_TTY: string;
		VSCODE_INJECTION: string;
		SHLVL: string;
		MANPAGER: string;
		HOME: string;
		XDG_CONFIG_HOME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		HOMEBREW_PREFIX: string;
		XDG_CACHE_HOME: string;
		BUNDLER_EDITOR: string;
		npm_config_cache: string;
		LOGNAME: string;
		HIST_STAMPS: string;
		STARSHIP_SESSION_KEY: string;
		npm_lifecycle_script: string;
		FZF_CTRL_T_COMMAND: string;
		VSCODE_GIT_IPC_HANDLE: string;
		FZF_DEFAULT_COMMAND: string;
		PKG_CONFIG_PATH: string;
		HOMEBREW_CASK_OPTS: string;
		npm_config_user_agent: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		OSLogRateLimit: string;
		npm_config_init_author_name: string;
		SECURITYSESSIONID: string;
		HISTFILE: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
		_: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
