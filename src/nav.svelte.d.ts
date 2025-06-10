/** @typedef {typeof __propDef.props}  NavProps */
/** @typedef {typeof __propDef.events}  NavEvents */
/** @typedef {typeof __propDef.slots}  NavSlots */
export default class Nav extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NavProps = typeof __propDef.props;
export type NavEvents = typeof __propDef.events;
export type NavSlots = typeof __propDef.slots;
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
