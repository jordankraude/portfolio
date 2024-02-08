<script>
    import { onMount } from "svelte";
    import { getData, getGraphicDesignById } from "../js/productData.mjs";
    import { writable } from 'svelte/store';
    export let category;

let isLoading = true;
const graphics = writable([]);

onMount(async () => {
  console.log(category); // Log the value of category here inside onMount

  isLoading = true;
  try {
    const data = await getData(category);
    graphics.set(data);
    console.log(data)
  } catch (err) {
    console.error(err);
  } finally {
    isLoading = false;
  }
});
function base64ToUint8Array(base64String) {
  const byteString = atob(base64String);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  return uint8Array;
}

function generateDataUrl(pdfData) {
  try {
    const uint8Array = base64ToUint8Array(pdfData);
    const blob = new Blob([uint8Array], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error creating Data URL:", error);
    return "#"; // Return a fallback link or handle the error accordingly.
  }
}
</script>

{#if isLoading}
<h1 class="loadingMessage">I apologize for the wait time. Due to using free backend deploys through render, it requires some time for render to boot up after a long period of inactivity. Sorry for the inconvience!</h1>
<div class="e-loadholder">
  <div class="m-loader">
    <span class="e-text">Loading</span>
  </div>
</div>
<div id="particleCanvas-Blue"></div>
<div id="particleCanvas-White"></div>

{:else}
<h1 id="graphicDesignDisplayHeader">Original Graphics and Visuals</h1>
<ul class="graphic-list">
    {#each $graphics as graphic}
      <li class="graphic-card" id={graphic._id}>
        <h1 class="graphiccard_name">{graphic.graphicName}</h1>
        <div class="pdf-container">
          <embed src={generateDataUrl(graphic.pdfFile)} type="application/pdf" width="500" height="600" />
        </div>
        <a href={generateDataUrl(graphic.pdfFile)} download={graphic.graphicName + ".pdf"}>
          Download PDF
        </a>
        <p>{graphic.graphicSummary}</p>
      </li>
    {/each}
  </ul>
  {/if}


<style>
  @import '/css/loading.css';
</style>