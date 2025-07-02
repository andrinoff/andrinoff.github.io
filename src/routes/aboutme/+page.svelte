<script>
    import Techstack from "$lib/components/techstack.svelte";
</script>

<div class="about-page-container">
    <!-- Main Content Column -->
    <div class="main-content">
        <section class="widget-card">
            <h1 class="widget-title">~/experience</h1>
            <div class="timeline">
                <!-- Experience Item 1 -->
                <div class="timeline-item">
                    <div class="timeline-connector">
                        <div class="timeline-dot"></div>
                        <div class="timeline-line"></div>
                    </div>
                    <div class="timeline-content">
                        <p class="job-title">Studio Fullstack Engineer</p>
                        <p class="job-period">2023 - 2024</p>
                    </div>
                </div>
                <!-- Experience Item 2 -->
                <div class="timeline-item">
                    <div class="timeline-connector">
                        <div class="timeline-dot"></div>
                        <div class="timeline-line"></div>
                    </div>
                    <div class="timeline-content">
                        <p class="job-title">
                            Freemoviesfull.cc Backend Engineer
                        </p>
                        <p class="job-period">2024 - 2025</p>
                    </div>
                </div>
                <!-- Experience Item 3 -->
                <div class="timeline-item">
                    <div class="timeline-connector">
                        <div class="timeline-dot"></div>
                        <!-- No line on the last item -->
                    </div>
                    <div class="timeline-content">
                        <p class="job-title">Freelance Fullstack Engineer</p>
                        <p class="job-period">2022 - Present</p>
                    </div>
                </div>
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
            <div class="education-content">
                <p class="education-period">2024-2026 (Expected)</p>
                <p class="education-details">
                    A-Levels in Computer Science, Math, & Economics at Projector
                    School.
                </p>
            </div>
        </section>

        <section class="widget-card">
            <h1 class="widget-title">~/links</h1>
            <div class="links-container">
                <a
                    href="https://andrinoff.com/cv"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="styled-link">View my CV</a
                >
                <a
                    href="https://andrinoff.com/appreciations"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="styled-link">Read Appreciations</a
                >
            </div>
        </section>
    </div>
</div>

<style>
    /* Inherit the global styles from the layout for font and background */

    .about-page-container {
        display: grid;
        grid-template-columns: 2fr 1fr; /* Main content and sidebar */
        gap: 2rem;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        align-items: start;
    }

    .main-content,
    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    /* Use the same widget-card style from the homepage */
    .widget-card {
        width: 100%;
        background-color: rgba(46, 52, 64, 0.75);
        border: 1px solid #4c566a;
        border-radius: 8px;
        padding: 2.5rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        animation: floatIn 0.8s ease-out forwards;
        opacity: 0;
        box-sizing: border-box;
    }

    /* Staggered animation for the widgets */
    .main-content .widget-card:nth-child(1) {
        animation-delay: 0.1s;
    }
    .main-content .widget-card:nth-child(2) {
        animation-delay: 0.2s;
    }
    .sidebar .widget-card:nth-child(1) {
        animation-delay: 0.3s;
    }
    .sidebar .widget-card:nth-child(2) {
        animation-delay: 0.4s;
    }

    .widget-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #88c0d0;
        margin: 0 0 1.5rem 0;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #4c566a;
    }

    .widget-title::before {
        content: "$ ";
        color: #a3be8c;
    }

    /* Education Section */
    .education-content p {
        margin: 0;
    }
    .education-period {
        font-size: 1.1rem;
        font-weight: 700;
        color: #eceff4;
        margin-bottom: 0.25rem;
    }
    .education-details {
        font-size: 1rem;
        color: #d8dee9;
        line-height: 1.6;
    }

    /* Timeline Styles */
    .timeline {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .timeline-item {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
    }
    .timeline-connector {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4px; /* Align dot with text */
    }
    .timeline-dot {
        width: 12px;
        height: 12px;
        background-color: #88c0d0;
        border-radius: 50%;
        flex-shrink: 0;
        border: 2px solid #2e3440;
    }
    .timeline-line {
        width: 2px;
        background-color: #4c566a;
        flex-grow: 1;
        min-height: 50px;
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

    /* "See More" Links */
    .links-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    .styled-link {
        color: #81a1c1;
        text-decoration: none;
        border-bottom: 1px dashed #81a1c1;
        transition:
            color 0.2s ease,
            border-bottom-color 0.2s ease;
    }
    .styled-link:hover {
        color: #88c0d0;
        border-bottom-color: #88c0d0;
    }

    /* Keyframes for the animation */
    @keyframes floatIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Responsive Styles */
    @media (max-width: 900px) {
        .about-page-container {
            grid-template-columns: 1fr; /* Stack columns on smaller screens */
        }
    }
</style>
