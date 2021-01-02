<script lang="ts">
    import {printSubWords} from './wordFinder'
    let searchWord: string = "";
    let words: string[] = [];
    
    function searchWords() {
        console.log(searchWord);
        words = printSubWords(searchWord);
        console.log(words);
    }
    
</script>

<main>
    <h1>Введите слово</h1>
    <input type="text" bind:value={searchWord}>
    <button on:click={searchWords}>Искать</button>
    <ul>
        {#each words as word}
            <li>{word}</li>
        {/each}
    </ul>
</main>

<style>
	main {
        display: flex;
        flex-direction: column;

        height: 100%;

		text-align: center;
		padding: 1em;
        margin: 0 auto;
        overflow: auto;
        
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

    ul {
        display: grid;
        grid-template-columns: repeat(fit-content, 200px);
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>