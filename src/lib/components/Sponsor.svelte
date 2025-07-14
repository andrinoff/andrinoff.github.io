<div class="sponsor-container">
  <div class="content-wrapper">
    <h1>Support My Work</h1>
    <p>
      If you enjoy my code and find it valuable, please consider supporting
      me. Your contribution helps me dedicate more time to creating and sharing.
      Thank you for your generosity!
    </p>

    <div class="sponsor-options">
      <!-- Ko-fi Card -->
      <a
        href="https://ko-fi.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        class="sponsor-card kofi"
      >
        <img
          src="https://www.vectorlogo.zone/logos/ko-fi/ko-fi-icon.svg"
          alt="Ko-fi Logo"
        />
        <span>Buy me a coffee</span>
      </a>

      <!-- Patreon Card -->
      <a
        href="https://patreon.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        class="sponsor-card patreon"
      >
        <img
          src="https://www.vectorlogo.zone/logos/patreon/patreon-icon.svg"
          alt="Patreon Logo"
        />
        <span>Become a Patron</span>
      </a>

      <!-- PayPal Card -->
      <a
        href="https://paypal.me/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        class="sponsor-card paypal"
      >
        <img
          src="https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg"
          alt="PayPal Logo"
        />
        <span>Donate with PayPal</span>
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #d1d5db; /* Default light text color */
  }

  .content-wrapper {
    max-width: 800px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #f9fafb; /* White heading */
  }

  p {
    font-size: 1.125rem;
    color: #9ca3af; /* Lighter gray for paragraph */
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .sponsor-options {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
  }

  /* Responsive grid for wider screens */
  @media (min-width: 640px) {
    .sponsor-options {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  .sponsor-card {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    border-radius: 12px;
    text-decoration: none;
    transition:
      transform 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sponsor-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.25);
  }

  /* Specific brand colors for the cards */
  .kofi {
    background-color: #13c3ff;
  }
  .patreon {
    background-color: #f96854;
  }
  .paypal {
    background-color: #0070ba;
  }

  .sponsor-card img {
    margin-bottom: 1rem;
    height: 40px;
    /* This filter makes the icons white, which is perfect for dark/colored backgrounds */
    filter: brightness(0) invert(1);
  }

  .sponsor-card span {
    font-size: 1.25rem;
    font-weight: 600;
  }
</style>
