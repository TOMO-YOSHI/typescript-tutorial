import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([1000, -1, 50, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('fraegaergohaz');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data)