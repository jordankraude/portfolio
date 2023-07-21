<script>
    import { onMount } from "svelte";
    import { getData, getGameById } from "../js/productData.mjs";
    import { getLocalStorage, setLocalStorage } from "../js/utils.mjs";
    import { writable } from 'svelte/store';
    import { favoriteGames } from '../js/stores.mjs';
    export let category;

   
 
  

    let screenSize;
    let isLoading = true;
    const games = writable([]);
  
    
    
  
    onMount(async () => {
      isLoading = true;

      try{
        const data = await getData(category);
        games.set(data);
      }
      catch(err){
        console.error(err)
      }
      finally{
        isLoading = false;
      }
    });

  async function runAddToFavorites(event) {
    const gameId = event.target.parentNode.id;
    const game = await getGameById(gameId);
    let favoriteGamesArray = getLocalStorage("favoriteGames") || [];
    favoriteGamesArray = favoriteGamesArray.filter(element => element._id !== game._id);
    favoriteGamesArray.push(game);
    setLocalStorage("favoriteGames", favoriteGamesArray);
    
    favoriteGames.set(favoriteGamesArray); // Update the favoriteGames store
}

function addToFavorites(event) {
  runAddToFavorites(event);
}
  

    export { games };
</script>
<style>
  @import '/css/loading.css';
</style>
  

  <svelte:window bind:innerWidth={screenSize} />
  
  
  {#if isLoading}
  <h1 >I apologize for the wait time. Due to using free backend deploys through render, it requires some time for render to boot up after a long period of inactivity. Sorry for the inconvience. I could have just had paths through my local system to avoid this but I wanted to showcase the ability to create API's and connect to created databases through those APIs.</h1>
  <div class="e-loadholder">
    <div class="m-loader">
      <span class="e-text">Loading</span>
    </div>
  </div>
  <div id="particleCanvas-Blue"></div>
  <div id="particleCanvas-White"></div>
  
  {:else}
  <h1>Choose Your Game:</h1>
  
    <ul class="game-list">
      {#each $games as game}
          <li class="game-card" id={game._id}>
            <a href="../gamepage/games/index.html?specificGame={game.gameSWFPath}">
              <h1 class="gamecard_name">{game.gameName}</h1>
              <img src={game.gameThumbnailPath} alt={game.gameAlt}>
            </a>
            <h4 class="addToFavorites" on:mousedown={addToFavorites}>Add to Favorites</h4>
          </li>

      {/each}
    </ul>
    {/if}
 
  