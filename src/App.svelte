<script>
  import { onMount } from 'svelte'
  const { ipcRenderer } = require('electron')
	
  export let name

	onMount(async () => {
    // communication test between the electron renderer and main process
		ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg) // prints "pong"
    })
    ipcRenderer.send('asynchronous-message', 'ping')
    console.log('ping sent')
	})
</script>

<main>
	<h1>Hello {name}!</h1>
</main>

<style>
  :global(body) {
    background-color: white;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
