<!-- +page.svelte -->
<script>
  import Link from "../link.svelte";
  import Clock from "./clock.svelte";
</script>

<div class="page-content">
  <section class="hero-section mt-20">
    <div class="profile-card">
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
    </div>
  </section>
  <Clock />
  <section class="links-section">
    <h2 class="section-title">Connect With Me</h2>
    <div class="links-grid">
      <Link
        link="https://linkedin.com/in/andrinoff"
        text="LinkedIn"
        logo="https://img.icons8.com/m_rounded/512/FFFFFF/linkedin--v2.png"
      />
      <Link
        link="mailto:business@andrinoff.com"
        text="Email"
        logo="https://cdn.simpleicons.org/gmail/white"
      />
      <Link
        link="https://t.me/andrinoff"
        text="Telegram"
        logo="https://cdn.simpleicons.org/telegram/white"
      />
      <Link
        link="https://instagram.com/andrinoff.dev"
        text="Instagram"
        logo="https://cdn.simpleicons.org/instagram/white"
      />
    </div>
  </section>
</div>

<style>
  .page-content {
    display: flex;
    flex-direction: column;
    gap: 4rem; /* Adds space between sections */
  }

  .hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-card {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
    background-color: #161b22;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #30363d;
  }

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #30363d;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  .profile-text {
    display: flex;
    flex-direction: column;
  }

  .name-heading {
    margin: 0;
    font-size: 3rem;
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

  .links-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .section-title {
    font-size: 1.75rem;
    color: #c9d1d9;
    border-bottom: 2px solid #58a6ff;
    padding-bottom: 0.5rem;
  }

  .links-grid {
    display: grid;
    /* Create 4 columns on desktop, 2 on tablet, and 1 on mobile */
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    width: 100%;
  }

  /* --- Responsive Styles --- */
  @media (max-width: 900px) {
    .links-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .profile-card {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }

    .name-heading {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 600px) {
    .links-grid {
      grid-template-columns: 1fr;
    }

    .avatar {
      width: 120px;
      height: 120px;
    }
  }
</style>
