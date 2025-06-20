<script>
  export let link = "";
  export let text = "";
  export let logo = "";
</script>

<a href={link} class="link">
  <img src={logo} alt="{text} logo" />
  <span class="link-text">{text}</span>
</a>

<style>
  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    background-color: #1a1a1a;
    padding: 10px 20px;
    border-radius: 8px;
    margin: 0 10px;
    transition: background-color 0.3s ease;
  }

  .link:hover {
    background-color: #333;
  }

  .link img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  /* Adjust margin for icon-only view on mobile */
  @media (max-width: 650px) {
    .link img {
      margin-right: 0px;
    }
	.link span {
		display: none;
	}
  }
</style>
