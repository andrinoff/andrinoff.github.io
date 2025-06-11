/** @typedef {typeof __propDef.props}  AppProps */
/** @typedef {typeof __propDef.events}  AppEvents */
/** @typedef {typeof __propDef.slots}  AppSlots */
export default class App extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AppProps = typeof __propDef.props;
export type AppEvents = typeof __propDef.events;
export type AppSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
