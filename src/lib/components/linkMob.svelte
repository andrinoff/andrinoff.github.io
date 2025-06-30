<script>
    let props = $props();
</script>

<div id="root">
    <a href={props.link}>
        <img src={props.logo} alt="logo" />
    </a>
</div>

<style>
    #root {
        display: flex;
        align-items: center;
        margin: 0;
    }

    a {
        display: flex;
        align-items: center;
        margin-right: 10px;
        margin-left: 10px;
        border-radius: 5px;
        text-decoration: none;
        color: white;
        transition: all 0.2s linear;
    }
    img {
        width: 24px;
        height: 24px;
    }
</style>
