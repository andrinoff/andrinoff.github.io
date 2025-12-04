<div class="sponsor-container">
    <div class="content-wrapper">
        <h1 id="support">Support My Work</h1>
        <p class="sponsor-description">
            If you enjoy my code and find it valuable, please consider
            supporting me. Your contribution helps me dedicate more time to
            creating and sharing. Thank you for your generosity!
        </p>

        <div class="sponsor-options">
            <a
                href="https://ko-fi.com/andrinoff"
                target="_blank"
                rel="noopener noreferrer"
                class="sponsor-card kofi"
            >
                <svg
                    class="sponsor-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"
                    />
                </svg>
                <span>Buy me a Ko-Fi</span>
            </a>

            <a
                href="https://patreon.com/andrinoff"
                target="_blank"
                rel="noopener noreferrer"
                class="sponsor-card patreon"
            >
                <svg
                    class="sponsor-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524zM.003 23.476h4.22V.524H.003z"
                    />
                </svg>
                <span>Become a Patron</span>
            </a>
        </div>
    </div>
</div>

<style>
    .sponsor-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: inherit;
        color: #d8dee9;
        padding: 1rem;
    }

    .content-wrapper {
        max-width: 800px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #e6edf3;
        display: none;
    }

    .sponsor-description {
        display: none;
    }

    .sponsor-card span {
        display: none;
    }

    .sponsor-options {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        width: 100%;
    }

    .sponsor-card {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        border-radius: 8px;
        text-decoration: none;
        transition:
            transform 0.2s ease,
            background-color 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease;
        background-color: transparent;
        border: 1px solid #30363d;
        width: 56px;
        height: 56px;
        padding: 0;
    }

    .sponsor-card:hover {
        transform: translateY(-2px);
    }

    .sponsor-icon {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    }

    /* Ko-fi styling */
    .kofi {
        color: #ff5e5b;
    }

    .kofi:hover {
        background-color: rgba(255, 94, 91, 0.1);
        border-color: #ff5e5b;
    }

    /* Patreon styling */
    .patreon {
        color: #ff424d;
    }

    .patreon:hover {
        background-color: rgba(255, 66, 77, 0.1);
        border-color: #ff424d;
    }

    /* Media query for tablets and desktops */
    @media (min-width: 768px) {
        .sponsor-container {
            padding: 1.5rem;
        }

        h1 {
            display: block;
            font-size: 1.75rem;
            margin-bottom: 0.75rem;
        }

        .sponsor-description {
            display: block;
            font-size: 1rem;
            color: #8b949e;
            margin-bottom: 1.5rem;
            max-width: 500px;
            line-height: 1.6;
        }

        .sponsor-options {
            gap: 1rem;
        }

        .sponsor-card {
            flex-direction: row;
            width: auto;
            height: auto;
            padding: 0.75rem 1.25rem;
        }

        .sponsor-icon {
            width: 20px;
            height: 20px;
        }

        .sponsor-card span {
            display: block;
            font-size: 0.95rem;
            font-weight: 600;
        }

        .kofi span {
            color: #ff5e5b;
        }

        .kofi:hover span {
            color: #ff5e5b;
        }

        .patreon span {
            color: #ff424d;
        }

        .patreon:hover span {
            color: #ff424d;
        }
    }
</style>
