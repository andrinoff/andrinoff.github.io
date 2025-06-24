<script>
  export let link = "";
  export let text = "";
  export let logo = "";
</script>

<div class="text-center flex flex-row justify-center">
  <a href={link} class="link">
    <img src={logo} alt="{text} logo" />
    {#if text != ""}
    <p class="link-text text-center">{text}</p>
    {/if}
  </a>
</div>

<style>
  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    background-color: #14191f;
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
