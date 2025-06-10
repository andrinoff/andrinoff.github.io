export default LinkMob;
type LinkMob = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: $$ComponentProps): void;
};
declare const LinkMob: import("svelte").Component<$$ComponentProps, {}, "">;
