<script>
  import Clock from "$lib/components/Clock.svelte";
  import ContactForm from "$lib/components/Contact.svelte";
  import Sponsor from "$lib/components/Sponsor.svelte";
</script>

<div class="home-page-container">
  <!-- "Master" Pane - The main profile widget -->
  <div class="widget-card hero-card">
    <section class="profile-section">
      <img
        src="https://tbilisi.hackclub.com/drew/avatar.png"
        alt="Drew Smirnoff's Avatar"
        class="avatar"
      />
      <div class="profile-text">
        <h1 class="name-heading">Drew Smirnoff</h1>
        <p class="bio">
          Full stack developer <span class="divider">|</span> Based in Tbilisi
        </p>
      </div>
    </section>

    <hr class="card-divider" />

    <section class="dashboard-section">
      <div class="clock-widget">
        <Clock />
      </div>
      <hr class="card-divider mt-10" />
    </section>
    <div class="">
      <!-- Contact Form Section -->
      <ContactForm />
    </div>
  </div>

  <!-- "Stack" Pane - A column for other widgets -->
  <div class="main-stack">
    <section class = "widget-card">
    <Sponsor />
    </section>

    <!-- Social Links Section -->

    <!-- Biography Section -->
    <section class="widget-card biography-section">
      <h2 class="widget-title">~/biography.md</h2>
      <div class="biography-content">
        <p>
          Hello, everyone! My journey into technology began at the young age of
          6, sparked by an interest in robotics and simple programs. With my
          father also being a programmer, I was fortunate to always have
          guidance when I needed it.
        </p>
        <p>
          By 5th grade, my curiosity led me to web development. From 6th to 10th
          grade, I progressively dove deeper into backend development, building
          over a hundred websites in the process. Beyond the world of code, I'm
          passionate about music and sports. I often perform as a lead guitarist
          in rock and metal bands, and occasionally, I take the stage as a
          vocalist.
        </p>
      </div>
    </section>
  </div>
</div>

<style>
  /* Import a monospaced font for the "riced" look */
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&display=swap");

  /* Global Styles - Inspired by Nord color palette */
  :global(body) {
    background-size: 20px 20px;
    color: #d8dee9; /* Light gray-blue text */
    font-family: monospace;
    margin: 0;
    min-height: 100vh;
    padding: 2rem;
  }

  /* Hyprland-style Tiling Layout Container */
  .home-page-container {
    display: grid;
    grid-template-columns: 1.5fr 1.5fr; /* Master and stack layout */
    align-items: start;
    gap: 2rem; /* The "gap" between tiled windows */
    width: 100%;
    max-width: 1400px;
    margin: 40px auto 0;
  }

  .main-stack {
    display: flex;
    flex-direction: column;
    gap: 2rem; /* Gap between stacked windows */
  }

  .hero-card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .profile-section {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #88c0d0; /* Accent color border */
    transition: transform 0.3s ease;
  }

  .avatar:hover {
    transform: scale(1.05) rotate(3deg);
  }

  .name-heading {
    margin: 0;
    font-size: 2.75rem;
    line-height: 1.2;
    font-weight: 700;
    color: #eceff4; /* Brighter white for main headings */
  }

  .bio {
    margin: 0.25rem 0 0 0;
    font-size: 1.1rem;
    color: #81a1c1; /* Lighter blue for subtext */
  }

  .divider {
    color: #4c566a;
    margin: 0 0.5rem;
  }

  .card-divider {
    border: none;
    height: 1px;
    background-color: #4c566a;
    width: 100%;
  }

  /* Dashboard Section: Clock */
  .dashboard-section {
    display: grid;
    align-items: stretch;
  }

  .clock-widget {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Biography, Nav, Social & Contact Section Styles */
  .biography-section,
  .nav-widget,
  .social-widget,
  :global(.contact-section) {
    animation: floatIn 0.8s ease-out 0.2s;
    animation-fill-mode: backwards;
  }

  .widget-title,
  :global(.contact-title) {
    font-size: 1.5rem;
    font-weight: 700;
    color: #88c0d0; /* Accent color for titles */
    margin-top: 0;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #4c566a;
  }
  /* Add a little shell prompt character to the title */
  .widget-title::before {
    content: "$ ";
    color: #a3be8c; /* Green for prompt */
  }

  .biography-content {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #d8dee9;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .biography-content p {
    margin: 0;
  }

  /* Navigation Widget Styles */
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    text-decoration: none;
    color: #d8dee9;
    background-color: transparent;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
    border: 1px solid transparent;
  }

  .nav-link:hover {
    background-color: rgba(
      136,
      192,
      208,
      0.1
    ); /* Accent color, very transparent */
    color: #eceff4;
    border-color: #88c0d0;
  }

  .nav-link img {
    width: 24px;
    height: 24px;
  }

  /* Social Links Widget Styles */
  .social-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }

  .social-link {
    position: relative;
    display: flex;
  }

  .social-link-image {
    width: 32px;
    height: 32px;
    transition: all 0.2s ease-out;
    opacity: 0.7;
  }

  .social-link:hover .social-link-image {
    transform: scale(1.2);
    filter: drop-shadow(0 0 8px #88c0d0); /* Accent color glow on hover */
    opacity: 1;
  }

  /* --- Responsive Styles --- */
  @media (max-width: 1024px) {
    /* Stack the columns on smaller screens */
    .home-page-container {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    :global(.widget-card) {
      padding: 2rem;
    }

    .profile-section {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }

    .name-heading {
      font-size: 2.25rem;
    }
  }

  @media (max-width: 600px) {
    :global(body) {
      padding: 1rem;
    }
    :global(.widget-card) {
      padding: 1.5rem;
    }
    .social-links {
      justify-content: space-between;
    }
    .avatar {
      width: 100px;
      height: 100px;
    }
  }
</style>
