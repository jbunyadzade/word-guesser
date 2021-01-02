import { dict } from './word_rus'
type Dictionary = {
    [k: string]: string[]
};

let found: string[] = [];

export function printSubWords (word: string) {
    found = [];
    const sortedWord = word.split('').sort().join('');
    for (const key in dict) {
        const regex = new RegExp(getRegex(key));
        if (sortedWord.match(regex)) {
            found = found.concat(dict[key]);
        }
    }
    return found.sort((a, b) => b.length - a.length);
}

function getRegex (_word: string): string {
    let result = _word.split('');
    for (let i = 0; i < _word.length; i++) {
        result.splice(i * 2, 0, ".*?");
    }
    return result.slice(1).join('');
}