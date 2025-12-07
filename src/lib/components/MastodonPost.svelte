<script lang="ts">
    import { onMount } from "svelte";

    interface MastodonPost {
        id: string;
        content: string;
        created_at: string;
        url: string;
        account: {
            display_name: string;
            username: string;
            avatar: string;
        };
        media_attachments: Array<{
            type: string;
            preview_url: string;
            description: string;
        }>;
        replies_count: number;
        reblogs_count: number;
        favourites_count: number;
    }

    // Update these with your Mastodon instance and username
    const instance = "fosstodon.org";
    const username = "andrinoff";

    let post: MastodonPost | null = $state(null);
    let loading = $state(true);
    let error = $state<string | null>(null);

    function stripHtml(html: string): string {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    }

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }

    async function fetchLatestPost() {
        try {
            // First, look up the account ID
            const lookupResponse = await fetch(
                `https://${instance}/api/v1/accounts/lookup?acct=${username}`,
            );

            if (!lookupResponse.ok) {
                throw new Error("Failed to find Mastodon account");
            }

            const account = await lookupResponse.json();

            // Then fetch their statuses
            const statusesResponse = await fetch(
                `https://${instance}/api/v1/accounts/${account.id}/statuses?limit=1&exclude_replies=true&exclude_reblogs=true`,
            );

            if (!statusesResponse.ok) {
                throw new Error("Failed to fetch posts");
            }

            const statuses = await statusesResponse.json();

            if (statuses.length > 0) {
                post = statuses[0];
            }

            loading = false;
        } catch (e) {
            error = e instanceof Error ? e.message : "An error occurred";
            loading = false;
        }
    }

    onMount(() => {
        fetchLatestPost();
    });
</script>

<div class="mastodon-container">
    {#if loading}
        <div class="loading">
            <span class="loading-spinner"></span>
            <span>Fetching latest toot...</span>
        </div>
    {:else if error}
        <div class="error">
            <span class="error-icon">⚠</span>
            <span>{error}</span>
        </div>
    {:else if post}
        <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            class="post-link"
        >
            <div class="post-header">
                <img
                    src={post.account.avatar}
                    alt={post.account.display_name}
                    class="avatar"
                />
                <div class="account-info">
                    <span class="display-name">{post.account.display_name}</span
                    >
                    <span class="username"
                        >@{post.account.username}@{instance}</span
                    >
                </div>
                <span class="post-date">{formatDate(post.created_at)}</span>
            </div>

            <div class="post-content">
                {stripHtml(post.content)}
            </div>

            <div class="post-stats">
                <span class="stat" title="Replies">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="stat-icon"
                    >
                        <path
                            d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
                        />
                    </svg>
                    {post.replies_count}
                </span>
                <span class="stat" title="Boosts">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="stat-icon"
                    >
                        <path
                            d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
                        />
                    </svg>
                    {post.reblogs_count}
                </span>
                <span class="stat" title="Favourites">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="stat-icon"
                    >
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                    </svg>
                    {post.favourites_count}
                </span>
            </div>
        </a>
    {:else}
        <div class="no-post">No posts found</div>
    {/if}
</div>

<style>
    .mastodon-container {
        width: 100%;
    }

    .loading,
    .error,
    .no-post {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem;
        color: #8b949e;
        font-size: 0.9rem;
    }

    .loading-spinner {
        width: 16px;
        height: 16px;
        border: 2px solid #30363d;
        border-top-color: #6364ff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .error {
        color: #f85149;
    }

    .error-icon {
        font-size: 1rem;
    }

    .post-link {
        display: block;
        padding: 1rem;
        text-decoration: none;
        color: inherit;
        border-radius: 6px;
        background-color: rgba(48, 54, 61, 0.3);
        border: 1px solid transparent;
        transition: all 0.2s ease;
    }

    .post-link:hover {
        background-color: rgba(99, 100, 255, 0.08);
        border-color: #6364ff;
    }

    .post-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 6px;
        object-fit: cover;
    }

    .account-info {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 0;
    }

    .display-name {
        font-size: 0.9rem;
        font-weight: 600;
        color: #eceff4;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .username {
        font-size: 0.75rem;
        color: #6e7681;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .post-date {
        font-size: 0.75rem;
        color: #6e7681;
        white-space: nowrap;
    }

    .post-content {
        font-size: 0.9rem;
        color: #d8dee9;
        line-height: 1.5;
        margin-bottom: 0.75rem;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .post-stats {
        display: flex;
        gap: 1.25rem;
        padding-top: 0.5rem;
        border-top: 1px solid #30363d;
    }

    .stat {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.8rem;
        color: #6e7681;
    }

    .stat-icon {
        width: 16px;
        height: 16px;
    }

    @media (max-width: 600px) {
        .post-header {
            flex-wrap: wrap;
        }

        .post-date {
            width: 100%;
            order: 3;
            margin-top: 0.25rem;
        }

        .avatar {
            width: 36px;
            height: 36px;
        }
    }
</style>
