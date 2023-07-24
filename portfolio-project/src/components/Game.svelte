<script src="https://unpkg.com/@ruffle-rs/ruffle">
    import { writable } from 'svelte/store';
    import { onMount } from 'svelte';
    import '@ruffle-rs/ruffle';
    export let specificGame;

   console.log(specificGame)

   const games = writable();

    onMount(() => {
    games.set(specificGame);
    });


</script>



    <!-- <ruffle-player src={$games}></ruffle-player> -->
  <table width="100%" class="ex" cellspacing="0"> 
    <tr> 
      <td>
        <object title="" width="100%" height="600">
          <param name="movie" value={specificGame}>
          <embed  src={specificGame} width="50vw" height="50vh">
        </object>
      </td> 
    </tr>
  </table> 
