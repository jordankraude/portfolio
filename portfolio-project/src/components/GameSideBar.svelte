<script>
    import { onMount } from "svelte";
    import { getData, getGameById } from "../js/productData.mjs";
    import { getLocalStorage, setLocalStorage } from "../js/utils.mjs";
    import { writable } from 'svelte/store';
    import { favoriteGames } from '../js/stores.mjs';


let games = [];

onMount(() => {
  games = getLocalStorage("favoriteGames") || [];
});

function removeFavorite(event) {
  const gameId = event.target.parentNode.id;
  console.log(gameId)
  games = getLocalStorage("favoriteGames")
  console.log(games[0])
  const updatedGames = games.filter((element) => element._id !== gameId);
  console.log(updatedGames)
  setLocalStorage("favoriteGames", updatedGames);
  games = updatedGames;
}

let favoriteGamesList = [];
favoriteGames.subscribe(value => {
  favoriteGamesList = value;
});

$: {
  favoriteGamesList = games;
}







</script>

<ul style="margin-left: 10px;">
    {#if favoriteGamesList.length > 0}
      {#each favoriteGamesList as game}
        <div id={game._id}>
          <a href="games/index.html?specificGame={game.gameSWFPath}">
            <li>{game.gameName}</li> 
          </a>
          <button on:click={removeFavorite}>&times;</button>
        </div>
      {/each}
    {:else}
      <p>No favorited Games</p>
    {/if}
</ul>