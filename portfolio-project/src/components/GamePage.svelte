<script>
    import { onMount } from "svelte";
    import { getData } from "../js/productData.mjs";
    import { getLocalStorage } from "../js/utils.mjs";
    import { writable } from 'svelte/store';
    export let category;

    let screenSize;
    const games = writable([]);
  
    
    
  
    onMount(async () => {
        const data = await getData(category);
        games.set(data);
    });

    export { games };

</script>
  

  <svelte:window bind:innerWidth={screenSize} />
  
  
  
  <h1>Choose Your Game:</h1>
  
    <ul class="game-list">
      {#each $games as game}
      <a href="../gamepage/games/index.html?specificGame={game.gameSWFPath}">
          <li class="game-card" id={game._id}>
              <h1 class="gamecard_name">{game.gameName}</h1>
            <img src={game.gameThumbnailPath} alt={game.gameAlt}>
          </li>
       </a>
      {/each}
    </ul>
  