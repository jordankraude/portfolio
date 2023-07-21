<script>
    import { onMount } from 'svelte';
  
    let selectedFilter; // Declare the variable without an initial value
    const websites = [
      {
        name: 'First Website',
        url: 'https://jordankraude.github.io/Personal-Projects/webpage/index.html',
      },
      {
        name: 'Intro to Web Development Project',
        url: 'https://jordankraude.github.io/WDD130/WWR/index.html'
      },
      {
        name: 'Web Frontend I Chamber Project',
        url: 'https://jordankraude.github.io/wdd230/chamber/index.html'
      },
      {
        name: 'Web Frontend I Final Project',
        url: 'https://jordankraude.github.io/wdd230/finalProject/homePage.html'
      },
      {
        name: 'Advanced Css Project',
        url: 'https://jordankraude.github.io/wdd341ZenGarden/main.html',
      },
      {
        name: 'Web Frontend II Final Project',
        url: 'https://jordankraude.github.io/Pokedex/src/index.html',
      },
      {
        name: 'Web Services Team Project',
        url: 'https://libraryserve.onrender.com/',
      },
      // Add more websites as needed
    ];
  
    function setFilter(filter) {
      selectedFilter = filter.toLowerCase(); // Convert filter to lowercase for comparison
    }
  
    onMount(() => {
      // Set the initial value of selectedFilter to the first website name
      selectedFilter = websites[0].name.toLowerCase();
    });
  </script>
  
  <div class="filter-buttons">
    {#each websites as website}
      <button on:click={() => setFilter(website.name.toLowerCase())}>{website.name}</button>
    {/each}
  </div>
  
  <div class="website-container">
    {#each websites as website}
      {#if selectedFilter === website.name.toLowerCase()}
        <div class="iframe-container selected">
          <div class="websiteHeader">
            <h1>{website.name}</h1><a href={website.url} target="_blank"><h1>Link to Page</h1></a>
          </div>
          <iframe src={website.url} title={website.name} key={website.name} />
        </div>
      {:else}
        <div class="iframe-container hidden">
          <h1>{website.name}</h1>
          <iframe src={website.url} title={website.name} key={website.name} />
        </div>
      {/if}
    {/each}
  </div>
  
  <style>
    
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Lato&family=Lora&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Lato&family=Lora&display=swap');
    /* Add your custom styles here */
    .website-container {
      display: flex;
      flex-direction: column;
      height: 80vh; /* Set the height to the full viewport height */
      margin: auto auto;
      overflow: hidden;
      color: white;
      text-align: center;
      margin-top: 40px;
      font-family: "Bungee Hairline", sans-serif;
      margin-bottom: 100px;
    }
    .website-container a{
      color: white;
    }
    .website-container a:hover{
      color: gray;
    }
  
    .iframe-container {
      margin: auto;
    }
  
    iframe {
      width: 90vw;
      height: 80vh;
      border: none;
    }
  
    .filter-buttons {
      width: 100vw;
      margin: auto auto;
      text-align: center;
      display: flex;
      align-items: flex-start;
      justify-content: center;

    }
  
    .filter-buttons button {
      margin: 0px 10px;
      width: 120px;
      height: 50px;
      text-align: center;
      color: white;
      background: radial-gradient(circle at center, lightgray, black);
      font-family: 'Lato', sans-serif ;
      border-radius: 0 50% 0 50%;
    }
    .filter-buttons button:hover{
      scale: 1.2;
      color: black;
      transition: background 3s ease-in;
      background: radial-gradient(circle at center, white, lightgray)
    }

    .selected{
        animation: changeIframeAdd 3s;
        animation-fill-mode: forwards;
        position: absolute;
        top: 280px;
        left: 60px;
    }
    .hidden{
        display: none;
    }
    .websiteHeader{
      margin: auto auto;
      display: flex;
      justify-content: space-evenly;
      margin-top: 20px;
    }
    @keyframes changeIframeAdd{
        0%{
            display: block;
            opacity: 0;
        }
        
        100%{
            opacity: 1;
            z-index: 3;
        }
    }


    @keyframes changeIframeRemove{
        0%{
            opacity: 1;
        }
        
        100%{
            opacity: 0;
            display: none;
        }
    }

    @media (max-width: 800px){

      .website-container {
        width: 80vw;
      }
      iframe {
      width: 80vw;
      height: 600px;
      border: none;
    }

      .filter-buttons {
      width: 80vw;
      margin: auto auto;
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;


    }
    .websiteHeader h1{
      margin-top: 80px;
      font-size: 16px;
      height: 20px;
      margin-bottom: 20px;
    }
  
    .filter-buttons button {
      margin: 0px 10px;
      width: 80px;
      font-size: 10px;
      height: 50px;
      text-align: center;
      color: white;
      background: radial-gradient(circle at center, lightgray, black);
      font-family: 'Lato', sans-serif ;
      border-radius: 0 50% 0 50%;
      margin-bottom: 40px;
      z-index: 5;
    }

    }
    
  </style>