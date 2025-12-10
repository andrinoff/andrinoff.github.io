<script lang="ts">
    import { onMount } from "svelte";

    interface Commit {
        sha: string;
        message: string;
        date: string;
        url: string;
        repo: string;
    }

    let commits: Commit[] = $state([]);
    let loading = $state(true);
    let error = $state<string | null>(null);

    const username = "andrinoff";

    async function fetchCommitDetails(
        repoFullName: string,
        sha: string,
    ): Promise<any | null> {
        try {
            const response = await fetch(
                `https://api.github.com/repos/${repoFullName}/commits/${sha}`,
            );
            if (response.ok) {
                return await response.json();
            }
        } catch {
            // Ignore errors for individual commits
        }
        return null;
    }

    async function fetchLatestCommits() {
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}/events/public?per_page=30`,
            );

            if (!response.ok) {
                throw new Error("Failed to fetch events");
            }

            const events = await response.json();

            const pushEvents = events.filter(
                (event: any) => event.type === "PushEvent",
            );

            const allCommits: Commit[] = [];
            const seenShas = new Set<string>();

            for (const event of pushEvents) {
                if (allCommits.length >= 3) break;

                const repoName = event.repo.name;

                const headSha = event.payload.head;

                if (seenShas.has(headSha)) continue;
                seenShas.add(headSha);

                const commitData = await fetchCommitDetails(repoName, headSha);

                if (commitData) {
                    allCommits.push({
                        sha: headSha.substring(0, 7),
                        message: commitData.commit.message.split("\n")[0],
                        date: new Date(
                            commitData.commit.committer.date,
                        ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                        }),
                        url: commitData.html_url,
                        repo: repoName,
                    });
                }
            }

            commits = allCommits.slice(0, 3);
            loading = false;
        } catch (e) {
            error = e instanceof Error ? e.message : "An error occurred";
            loading = false;
        }
    }

    onMount(() => {
        fetchLatestCommits();
    });
</script>

<div class="commits-container">
    {#if loading}
        <div class="loading">
            <span class="loading-text">fetching commits...</span>
            <span class="cursor">▌</span>
        </div>
    {:else if error}
        <div class="error">
            <span class="error-prefix">error:</span>
            {error}
        </div>
    {:else if commits.length === 0}
        <div class="no-commits">No recent commits found</div>
    {:else}
        <div class="git-log">
            {#each commits as commit, i}
                <a
                    href={commit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="commit-entry"
                >
                    <div class="commit-line">
                        <span class="commit-sha">{commit.sha}</span>
                        <span class="commit-message">{commit.message}</span>
                    </div>
                    <div class="commit-meta">
                        <span class="commit-repo">{commit.repo}</span>
                        <span class="commit-date">{commit.date}</span>
                    </div>
                </a>
            {/each}
        </div>
    {/if}
</div>

<style>
    .commits-container {
        width: 100%;
        font-family: "JetBrains Mono", monospace;
        min-width: 0;
        overflow: hidden;
        padding: 0.25rem 0;
    }

    .loading {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.5rem 0;
        color: #6e7681;
        font-size: 0.85rem;
    }

    .loading-text {
        color: #8b949e;
    }

    .cursor {
        color: #a3be8c;
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }

    .error {
        padding: 0.5rem 0;
        font-size: 0.85rem;
        color: #d8dee9;
    }

    .error-prefix {
        color: #bf616a;
        font-weight: 600;
    }

    .no-commits {
        padding: 0.5rem 0;
        color: #6e7681;
        font-size: 0.85rem;
    }

    .git-log {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .commit-entry {
        display: block;
        padding: 0.5rem 0.75rem;
        text-decoration: none;
        color: inherit;
        border-left: 2px solid #30363d;
        transition: all 0.15s ease;
        background: transparent;
        min-width: 0;
    }

    .commit-entry:hover {
        border-left-color: #a3be8c;
        background-color: rgba(163, 190, 140, 0.05);
    }

    .commit-line {
        display: flex;
        align-items: baseline;
        gap: 0.6rem;
        margin-bottom: 0.25rem;
        min-width: 0;
    }

    .commit-sha {
        color: #a3be8c;
        font-size: 0.8rem;
        flex-shrink: 0;
    }

    .commit-sha::before {
        content: "* ";
        color: #88c0d0;
    }

    .commit-message {
        color: #d8dee9;
        font-size: 0.85rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
        flex: 1;
    }

    .commit-meta {
        display: flex;
        gap: 1rem;
        padding-left: 1.1rem;
        font-size: 0.7rem;
    }

    .commit-repo {
        color: #81a1c1;
    }

    .commit-repo::before {
        content: "↳ ";
        color: #4c566a;
    }

    .commit-date {
        color: #6e7681;
    }

    @media (max-width: 600px) {
        .commit-line {
            flex-direction: column;
            gap: 0.25rem;
        }

        .commit-message {
            padding-left: 1rem;
            font-size: 0.8rem;
        }

        .commit-meta {
            padding-left: 1rem;
        }
    }
</style>
