<script>
  import Link from "../link.svelte";
  import Clock from "./clock.svelte";
</script>

<div id="root">
  <div>
    <Clock />
    <div id="text">
      <img
        src="https://tbilisi.hackclub.com/drew/avatar.png"
        style="min-width: 200px; max-width: 200px; min-height: 200px; max-height: 200px; object-fit: cover; border-radius: 50%;"
        alt="Drew's Avatar"
      />
      <div id="textContent">
        <h1 id="YoHeading" class="md: text-1xl">Drew Smirnoff</h1>
        <h5 id="boutMe">
          Software engineer <br /> Based in Tbilisi<img
            id="whitespace"
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1feaf8b5942eca66775bc7ccadc8619cbf54cd07_1af71bf06d88b950.png"
            alt="!"
          />
        </h5>
      </div>
    </div>
    <hr />
  </div>
  <div id="root">
    <div>
      <div id="me" class="align-center flex-col text-center"></div>
      <div id="links" class="flex text-center justify-center">
        <Link
          link="https://linkedin.com/in/andrinoff"
          text="LinkedIn"
          logo="https://img.icons8.com/?size=100&id=447&format=png&color=FFFFFF"
        />
        <Link
          link="https://mastodon.social/@andrinoff"
          text="Email"
          logo="https://cdn.simpleicons.org/mastodon/white"
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
    </div>
  </div>
</div>

<style>
  #root {
    display: grid;
    place-content: center;
    height: 100%;
    margin: 0px;
  }

  #text {
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center; /* Vertically align items in flex row */
  }

  #textContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
  }
  #links {
    width: fit-content;
    margin: 20px;
    display: flex; /* Ensure flex is explicitly defined */
    justify-content: center;
  }

  #YoHeading {
    margin: 0px;
    color: aliceblue;
    font-size: 50px;
  }
  #boutMe {
    margin: 0px;
    color: #818181;
  }

  #whitespace {
    width: 40px;
    height: 10px;
    opacity: 0;
  }
  hr {
    width: 100%;
    border: 1px solid #242424;
  }

  /* --- Styles for Mobile Devices --- */
  @media (max-width: 768px) {
    #text {
      flex-direction: column; /* Stack image and text vertically */
      text-align: center; /* Center align the text */
    }

    /* The inline style on the image tag will override this, so we need to use !important or remove the inline styles */
    #text img {
      min-width: 150px !important;
      max-width: 150px !important;
      min-height: 150px !important;
      max-height: 150px !important;
    }

    #textContent {
      margin-left: 0; /* Remove side margin */
      margin-top: 20px; /* Add top margin for spacing */
      align-items: center; /* Center content inside */
    }

    #YoHeading {
      font-size: 40px; /* Reduce font size for smaller screens */
    }

    #links {
      flex-wrap: wrap; /* Allow links to wrap to the next line */
      margin: 10px auto; /* Reduce vertical margin and center the block */
    }
  }
</style>
