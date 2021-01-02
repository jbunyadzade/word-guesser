<script lang="ts">
    import {printSubWords} from './wordFinder'
    let searchWord: string = "";
    let words: string[] = [];
    
    function searchWords(e) {
        e.preventDefault();
        words = printSubWords(searchWord);
    }
    
</script>

<main>
    <h1>Введите слово</h1>
    <form on:submit={searchWords}>
        <input type="text" bind:value={searchWord}>
        <button type="submit">Искать</button>
    </form>
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
        grid-template-columns: repeat(auto-fill, minmax(10em, auto));
        gap: 5px;
        justify-items: center;
        margin: 0;
        padding: 0;
    }

    li {
        list-style-type: none;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>