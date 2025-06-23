<!-- +page.svelte -->
<script>
  import Techstack from "./techstack.svelte";
</script>

<div class="about-page-container">
  <section class="content-section">
    <h1 class="section-title">Education</h1>
    <div class="education-content">
      <p class="education-period">2024-2026 (Expected)</p>
      <p class="education-details">
        A-Levels in Computer Science, Math, & Economics at Projector School.
      </p>
    </div>
  </section>

  <section class="content-section">
    <h1 class="section-title">Experience</h1>
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
          <p class="job-title">Freemoviesfull.cc Backend Engineer</p>
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

  <section class="content-section">
    <Techstack />
  </section>

  <section class="content-section">
    <h1 class="section-title">See More</h1>
    <div class="links-container">
      <a
        href="https://andrinoff.com/cv"
        target="_blank"
        rel="noopener noreferrer">View my CV</a
      >
      <a
        href="https://andrinoff.com/appreciations"
        target="_blank"
        rel="noopener noreferrer">Read Appreciations</a
      >
    </div>
  </section>
</div>

<!-- Hidden Mastodon link for verification -->
<a rel="me" href="https://mastodon.social/@andrinoff" style="display:none"
  >Mastodon</a
>

<style>
  .about-page-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto; /* Center the content */
  }

  .content-section {
    width: 100%;
  }

  .section-title {
    font-size: 2rem;
    color: #c9d1d9;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #30363d;
  }

  .education-content p {
    margin: 0;
  }

  .education-period {
    font-size: 1.1rem;
    font-weight: 600;
    color: #f0f6fc;
    margin-bottom: 0.25rem;
  }

  .education-details {
    font-size: 1rem;
    color: #8b949e;
  }

  /* Timeline Styles */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
  }

  .timeline-dot {
    width: 16px;
    height: 16px;
    background-color: #58a6ff;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .timeline-line {
    width: 2px;
    background-color: #30363d;
    flex-grow: 1;
    min-height: 50px; /* Ensure line is visible */
  }

  .timeline-content {
    padding-top: 0; /* Align with top of the dot */
  }

  .job-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #f0f6fc;
    margin: 0;
  }

  .job-period {
    font-size: 1rem;
    color: #8b949e;
    margin: 0.25rem 0 0 0;
  }

  /* "See More" Links */
  .links-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
</style>
