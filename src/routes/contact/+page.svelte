<script>
    import ContactForm from "$lib/components/Contact.svelte";
</script>

<svelte:head>
    <title>Contact | Drew Smirnoff</title>
</svelte:head>

<div class="contact-page-grid">
    <main class="main-column">
        <section class="widget-card contact-card">
            <ContactForm />
        </section>
    </main>

    <aside class="sidebar-column">
        <section class="widget-card">
            <h1 class="widget-title">~/socials</h1>
            <div class="socials-container">
                <a
                    href="https://instagram.com/andrinoff"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                    aria-label="Instagram"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="social-icon"
                    >
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        />
                    </svg>
                </a>

                <a
                    href="https://mastodon.social/@andrinoff"
                    target="_blank"
                    rel="noopener noreferrer me"
                    class="social-link"
                    aria-label="Mastodon"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="social-icon"
                    >
                        <path
                            d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.668 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"
                        />
                    </svg>
                </a>

                <a
                    href="https://t.me/andrinoff"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                    aria-label="Telegram"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="24"
                        width="24"
                        class="social-icon"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.a.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
                        />
                    </svg>
                </a>

                <a
                    href="https://linkedin.com/in/andrinoff"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                    aria-label="LinkedIn"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="social-icon"
                    >
                        <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        />
                    </svg>
                </a>
            </div>
        </section>
    </aside>
</div>

<style>
    :global(.widget-card) {
        padding: 1rem;
        border-radius: 10px;
        background-color: rgba(18, 22, 26, 0.6);
        border: 1px solid #25282c;
    }

    .contact-page-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        padding: 2rem;
        min-height: calc(100vh - 4rem);
        align-items: start;
    }

    .main-column {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .sidebar-column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .contact-card {
        width: 100%;
    }

    .widget-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #88c0d0;
        margin: 0 0 1rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #30363d;
    }

    .widget-title::before {
        content: "$ ";
        color: #a3be8c;
        margin-right: 0.25rem;
    }

    /* Social Links (copied & slightly adapted from aboutme) */
    .socials-container {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #d8dee9;
        text-decoration: none;
        padding: 0.6rem;
        border-radius: 8px;
        border: 1px solid transparent;
        transition:
            background-color 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease,
            transform 0.12s ease;
    }
    .social-link:hover {
        background-color: rgba(136, 192, 208, 0.08);
        border-color: #30363d;
        color: #88c0d0;
        transform: translateY(-3px);
    }
    .social-icon {
        width: 22px;
        height: 22px;
    }

    /* Responsive */
    @media (max-width: 900px) {
        .contact-page-grid {
            grid-template-columns: 1fr;
            padding: 1rem;
        }

        .socials-container {
            justify-content: flex-start;
        }
    }
</style>
