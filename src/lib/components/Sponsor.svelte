<div class="sponsor-container">
  <div class="content-wrapper">
    <h1 id = "support">Support My Work</h1>
    <p class="sponsor-description">
      If you enjoy my code and find it valuable, please consider supporting me.
      Your contribution helps me dedicate more time to creating and sharing.
      Thank you for your generosity!
    </p>

    <div class="sponsor-options">
      <a
        href="https://ko-fi.com/andrinoff"
        target="_blank"
        rel="noopener noreferrer"
        class="sponsor-card kofi"
      >
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2V3cXAydjhwdGtqNjBhcjM0cWdzcW91emh1cHBtcW1nMHhnbDJhcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/s7kSWFyMM4NjRW0Rer/giphy.gif"
          alt="Ko-fi Logo"
        />
        <span>Buy me a Ko-Fi</span>
      </a>

      <a
        href="https://patreon.com/andrinoff"
        target="_blank"
        rel="noopener noreferrer"
        class="sponsor-card patreon"
      >
        <img
          src="https://www.freepnglogos.com/uploads/patreon-logo-png/white-patreon-logo-30.png"
          alt="Patreon Logo"
        />
        <span>Become a Patron</span>
      </a>

      <a
        href="https://paypal.me/andrinoff"
        target="_blank"
        rel="noopener noreferrer"
        class="sponsor-card paypal"
      >
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/PayPal-logo-white-png-vertical-900x838.png"
          alt="PayPal Logo"
        />
        <span>Donate with PayPal</span>
      </a>
    </div>
  </div>
</div>

<style>
  /* TEMP FIX */
  * {
    scale: 0.9;
  }
  .sponsor-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #d1d5db;
    padding: 1.5rem;
  }

  .content-wrapper {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 2.25rem;
    margin-bottom: 1.5rem; /* Increased margin to compensate for removed <p> */
    color: #f9fafb;
    display: none; /* Hide on mobile */
  }

  /* Hide description and button text by default (on mobile) */
  .sponsor-description {
    display: none;
  }

  .sponsor-card span {
    display: none;
  }

  .sponsor-options {
    display: flex;
    flex-direction: row; /* Horizontal layout for icons */
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  .sponsor-card {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    text-decoration: none;
    transition:
      transform 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    /* Styles for compact icon buttons */
    width: 70px;
    height: 70px;
    padding: 0;
  }

  .sponsor-card:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.2);
  }

  .kofi { background-color: #13c3ff; }
  .patreon { background-color: #f96854; }
  .paypal { background-color: #0070ba; }

  .sponsor-card img {
    height: 36px;
    margin-bottom: 0; /* Remove margin as text is hidden */
  }
  
  /* Media query for tablets and desktops (screens wider than 768px) */
  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem; /* Reset margin */
      display: block; /* Show the title */
    }

    /* Show the description again */
    .sponsor-description {
      display: block;
      font-size: 1.125rem;
      color: #9ca3af;
      margin-bottom: 2.5rem;
      max-width: 600px;
    }

    .sponsor-options {
      gap: 1.5rem; /* Increase gap for larger layout */
    }

    /* Restore original card layout */
    .sponsor-card {
      flex-direction: column;
      width: 180px;
      height: auto;
      padding: 2rem 1.5rem;
    }

    .sponsor-card img {
      height: 45px;
      margin-bottom: 1rem;
    }

    /* Show the text inside cards again */
    .sponsor-card span {
      display: block;
      font-size: 1.25rem;
      font-weight: 600;
      color: white;
    }
  }
</style>