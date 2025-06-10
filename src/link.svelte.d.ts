export default Link;
type Link = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: $$ComponentProps): void;
};
declare const Link: import("svelte").Component<$$ComponentProps, {}, "">;
