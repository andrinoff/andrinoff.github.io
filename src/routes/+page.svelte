<script>
  import Link from "../link.svelte";
  import Clock from "./clock.svelte";
</script>

<div class="home-page-container">
  <!-- Main Hero Card -->
  <div class="hero-card">
    <!-- Profile Section -->
    <section class="profile-section">
      <img
        src="https://tbilisi.hackclub.com/drew/avatar.png"
        alt="Drew Smirnoff's Avatar"
        class="avatar"
      />
      <div class="profile-text">
        <h1 class="name-heading">Drew Smirnoff</h1>
        <p class="bio">
          Software Engineer <span class="divider">|</span> Based in Tbilisi
        </p>
      </div>
    </section>

    <!-- Divider Line -->
    <hr class="card-divider" />

    <!-- Integrated Clock and Links -->
    <section class="dashboard-section">
      <div class="clock-wrapper">
        <Clock />
      </div>
      <div class="links-wrapper">
        <h2 class="connect-title">Connect</h2>
        <div class="links-grid">
          <Link
            link="https://linkedin.com/in/andrinoff"
            logo="https://img.icons8.com/m_rounded/512/FFFFFF/linkedin--v2.png"
          />
          <Link
            link="mailto:business@andrinoff.com"
            logo="https://cdn.simpleicons.org/gmail/white"
          />
          <Link
            link="https://t.me/andrinoff"
            logo="https://cdn.simpleicons.org/telegram/white"
          />
          <Link
            link="https://instagram.com/andrinoff.dev"
            logo="https://cdn.simpleicons.org/instagram/white"
          />
        </div>
      </div>
    </section>
  </div>

  <!-- Biography Section -->
  <section class="biography-section">
    <h2 class="biography-title">Biography</h2>
    <div class="biography-content">
      <p>
        Hello, everyone! My journey into technology began at the young age of 6,
        sparked by an interest in robotics and simple programs. With my father
        also being a programmer, I was fortunate to always have guidance when I
        needed it.
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

<style>
  .home-page-container {
    display: flex;
    flex-direction: column; /* Changed to column for bio section */
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 2rem 0;
    gap: 3rem; /* Added gap between hero and bio */
  }

  .hero-card {
    width: 100%;
    max-width: 900px;
    background-color: #161b22;
    border: 1px solid #30363d;
    border-radius: 24px;
    padding: 2.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    animation: floatIn 0.8s ease-out;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

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
    border: 3px solid #30363d;
    transition: transform 0.3s ease;
  }

  .avatar:hover {
    transform: scale(1.05) rotate(3deg);
  }

  .profile-text {
    flex-grow: 1;
  }

  .name-heading {
    margin: 0;
    font-size: 2.75rem;
    line-height: 1.2;
  }

  .bio {
    margin: 0.25rem 0 0 0;
    font-size: 1.1rem;
    color: #8b949e;
  }

  .divider {
    color: #484f58;
    margin: 0 0.5rem;
  }

  .card-divider {
    border: none;
    height: 1px;
    background-color: #30363d;
    width: 100%;
  }

  .dashboard-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  .connect-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #c9d1d9;
    margin-bottom: 1rem;
  }

  .links-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .clock-wrapper {
    transform: scale(0.9);
    transform-origin: top left;
  }

  /* --- Biography Section Styles --- */
  .biography-section {
    width: 100%;
    max-width: 900px;
    background-color: #161b22;
    border: 1px solid #30363d;
    border-radius: 24px;
    padding: 2.5rem;
    animation: floatIn 0.8s ease-out 0.2s; /* Delayed animation */
    animation-fill-mode: backwards; /* Start animation from transparent state */
  }

  .biography-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: #c9d1d9;
    margin-top: 0;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #30363d;
  }

  .biography-content {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #8b949e;
    display: flex;
    flex-direction: column;
    gap: 1rem; /* Space between paragraphs */
  }

  .biography-content p {
    margin: 0;
  }

  /* --- Responsive Styles --- */
  @media (max-width: 900px) {
    .dashboard-section {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .clock-wrapper {
      transform: scale(1);
      margin-bottom: 1rem;
    }
    .links-wrapper {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .hero-card,
    .biography-section {
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
    .hero-card,
    .biography-section {
      padding: 1.5rem;
    }
    .avatar {
      width: 100px;
      height: 100px;
    }
  }
</style>
