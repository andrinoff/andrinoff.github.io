<script lang="ts">
    import Techstack from "$lib/components/Techstack.svelte";
    import Appreciations from "$lib/components/Appreciations.svelte";

    const experiences = [
        {
            title: "Fullstack Engineer",
            period: "March 2022 - September 2025",
            company: "Freelance",
            location: "Remote",
            description:
                "Freelance Full-Stack Developer specializing in building high-performance websites and scalable SaaS solutions. I partnered with startups and businesses to transform complex concepts into user-friendly, deployment-ready applications. My focus was on writing clean, maintainable code and delivering products that drive real business growth.",
        },
        {
            title: "Fullstack Engineer",
            period: "April 2025 - August 2025",
            company: "Software Development Studio",
            location: "Remote",
            description:
                "In addition to architecting and building core features for client projects, I led a team of junior developers in a fast-paced studio environment. I served as the technical anchor for the team, ensuring code quality and timely delivery.",
        },

        {
            title: "Backend Engineer",
            period: "December 2024 - April 2025",
            company: "freemoviesfull.cc",
            location: "Remote",
            description:
                "Worked on the core backend services for a distributed media streaming application. I was responsible for the architecture supporting video content delivery.",
        },
        {
            title: "Fullstack Engineer",
            period: "June 2023 - August 2024",
            company: "Software Development Studio",
            location: "Remote",
            description:
                "Specialised in building robust, high-performance applications in a fast-paced studio environment. I focused on writing clean, maintainable code and architecting scalable backend systems that integrate seamlessly with dynamic frontends.",
        },
    ];

    let expandedIndex = -1;

    // Calculate education progress
    const startDate = new Date("2024-09-01");
    const endDate = new Date("2026-06-16");
    const now = new Date();

    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsed = Math.max(0, now.getTime() - startDate.getTime());
    const progressPercent = Math.min(
        100,
        Math.round((elapsed / totalDuration) * 1000) / 10,
    ).toFixed(1);

    function toggleExpand(index: number) {
        if (expandedIndex === index) {
            expandedIndex = -1;
        } else {
            expandedIndex = index;
        }
    }
</script>

<div class="about-page-container">
    <!-- Main Content Column -->
    <div class="main-content">
        <section class="widget-card">
            <h1 class="widget-title">~/experience</h1>
            <div class="timeline">
                {#each experiences as exp, index}
                    <div
                        class="timeline-item"
                        class:expanded={expandedIndex === index}
                    >
                        <div class="timeline-connector">
                            <div class="timeline-dot"></div>
                            {#if index < experiences.length - 1}
                                <div class="timeline-line"></div>
                            {/if}
                        </div>
                        <div class="timeline-content-wrapper">
                            <button
                                class="timeline-content"
                                on:click={() => toggleExpand(index)}
                                aria-expanded={expandedIndex === index}
                            >
                                <div class="job-header">
                                    <p class="job-title">{exp.title}</p>
                                    <span
                                        class="expand-icon"
                                        class:rotated={expandedIndex === index}
                                        >▼</span
                                    >
                                </div>
                                <p class="job-period">{exp.period}</p>
                            </button>
                            {#if expandedIndex === index}
                                <div class="job-details">
                                    <div class="detail-item">
                                        <span class="detail-label"
                                            >Company:</span
                                        >
                                        <span class="detail-value"
                                            >{exp.company}</span
                                        >
                                    </div>
                                    <div class="detail-item">
                                        <span class="detail-label"
                                            >Location:</span
                                        >
                                        <span class="detail-value"
                                            >{exp.location}</span
                                        >
                                    </div>
                                    <div class="detail-item description">
                                        <span class="detail-label"
                                            >Description:</span
                                        >
                                        <p class="detail-value">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <section class="widget-card">
            <Techstack />
        </section>
    </div>

    <!-- Sidebar Column -->
    <div class="sidebar">
        <section class="widget-card">
            <h1 class="widget-title">~/education</h1>
            <div class="education-card">
                <div class="education-header">
                    <div class="education-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                            />
                        </svg>
                    </div>
                    <div class="education-info">
                        <h2 class="school-name">Projector School</h2>
                        <p class="education-period">2024 - 2026 (Expected)</p>
                    </div>
                </div>
                <div class="education-progress">
                    <div class="progress-label">
                        <span>Progress</span>
                        <span class="progress-percent">{progressPercent}%</span>
                    </div>
                    <div class="progress-bar">
                        <div
                            class="progress-fill"
                            style="width: {progressPercent}%"
                        ></div>
                    </div>
                </div>
                <div class="subjects">
                    <h3 class="subjects-title">A-Level Subjects</h3>
                    <div class="subject-tags">
                        <span class="subject-tag">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="subject-icon"
                            >
                                <path
                                    d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
                                />
                            </svg>
                            Computer Science
                        </span>
                        <span class="subject-tag">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="subject-icon"
                            >
                                <path
                                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                                />
                            </svg>
                            Mathematics
                        </span>
                        <span class="subject-tag">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="subject-icon"
                            >
                                <path
                                    d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                                />
                            </svg>
                            Economics
                        </span>
                    </div>
                </div>
            </div>
        </section>

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
                        class="bi bi-telegram"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
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
        <Appreciations></Appreciations>
    </div>
</div>

<style>
    .about-page-container {
        display: grid;
        grid-template-columns: 2fr 1fr; /* Main content and sidebar */
        gap: 2rem;
        width: 100%;
        max-width: 1200px;
        align-items: start;
    }

    .main-content,
    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .widget-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #88c0d0;
        margin: 0 0 1.5rem 0;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #30363d;
    }

    .widget-title::before {
        content: "$ ";
        color: #a3be8c;
    }

    /* Education Section */
    .education-card {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .education-header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .education-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, #88c0d0, #81a1c1);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .education-icon svg {
        width: 28px;
        height: 28px;
        color: #0d1117;
    }

    .education-info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .school-name {
        font-size: 1.1rem;
        font-weight: 700;
        color: #eceff4;
        margin: 0;
    }

    .education-period {
        font-size: 0.9rem;
        color: #81a1c1;
        margin: 0;
    }

    .education-progress {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .progress-label {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;
        color: #d8dee9;
    }

    .progress-percent {
        color: #a3be8c;
        font-weight: 600;
    }

    .progress-bar {
        height: 8px;
        background-color: #21262d;
        border-radius: 4px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #a3be8c, #88c0d0);
        border-radius: 4px;
        transition: width 0.5s ease;
    }

    .subjects {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .subjects-title {
        font-size: 0.9rem;
        font-weight: 600;
        color: #81a1c1;
        margin: 0;
    }

    .subject-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .subject-tag {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.4rem 0.75rem;
        background-color: rgba(136, 192, 208, 0.1);
        border: 1px solid #30363d;
        border-radius: 20px;
        font-size: 0.85rem;
        color: #d8dee9;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease,
            transform 0.2s ease;
    }

    .subject-tag:hover {
        background-color: rgba(136, 192, 208, 0.2);
        border-color: #88c0d0;
        transform: translateY(-2px);
    }

    .subject-icon {
        width: 14px;
        height: 14px;
        color: #88c0d0;
    }

    /* Timeline Styles */
    .timeline {
        display: flex;
        flex-direction: column;
    }
    .timeline-item {
        display: flex;
        align-items: stretch;
        gap: 1.5rem;
    }
    .timeline-connector {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4px;
    }
    .timeline-dot {
        width: 16px;
        height: 16px;
        background-color: #88c0d0;
        border-radius: 50%;
        flex-shrink: 0;
        border: 2px solid #0d1117;
        transition:
            background-color 0.3s ease,
            transform 0.3s ease;
        z-index: 1;
    }
    .timeline-item.expanded .timeline-dot {
        background-color: #a3be8c;
        transform: scale(1.2);
    }
    .timeline-line {
        width: 2px;
        background-color: #30363d;
        flex-grow: 1;
    }

    .timeline-content-wrapper {
        flex: 1;
        padding-bottom: 1rem;
    }

    .timeline-content {
        width: 100%;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        text-align: left;
        transition:
            background-color 0.3s ease,
            border-color 0.3s ease;
    }
    .timeline-content:hover {
        background-color: rgba(136, 192, 208, 0.08);
        border-color: #30363d;
    }
    .timeline-item.expanded .timeline-content {
        background-color: rgba(136, 192, 208, 0.15);
        border-color: #88c0d0;
    }

    .job-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .job-title {
        font-size: 1.1rem;
        font-weight: 700;
        color: #eceff4;
        margin: 0;
    }
    .job-period {
        font-size: 1rem;
        color: #81a1c1;
        margin: 0.25rem 0 0 0;
    }

    .expand-icon {
        font-size: 0.75rem;
        color: #81a1c1;
        transition:
            transform 0.3s ease,
            color 0.3s ease;
    }
    .expand-icon.rotated {
        transform: rotate(180deg);
        color: #88c0d0;
    }

    .job-details {
        margin-top: 1rem;
        padding: 1rem;
        background-color: rgba(22, 27, 34, 0.9);
        border: 1px solid #30363d;
        border-radius: 8px;
        animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .detail-item {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
    }
    .detail-item:last-child {
        margin-bottom: 0;
    }
    .detail-item.description {
        flex-direction: column;
        gap: 0.25 rem;
    }

    .detail-label {
        font-size: 0.9rem;
        font-weight: 600;
        color: #88c0d0;
        white-space: nowrap;
    }
    .detail-value {
        font-size: 0.95rem;
        color: #d8dee9;
        margin: 0;
        line-height: 1.5;
    }

    /* Social Links */
    .socials-container {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
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
            background-color 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease,
            transform 0.2s ease;
    }
    .social-link:hover {
        background-color: rgba(136, 192, 208, 0.1);
        border-color: #30363d;
        color: #88c0d0;
        transform: translateY(-2px);
    }
    .social-icon {
        width: 24px;
        height: 24px;
    }

    /* Responsive Styles */
    @media (max-width: 900px) {
        .about-page-container {
            grid-template-columns: 1fr; /* Stack columns on smaller screens */
        }
    }
</style>
