group
----

A small JavaScript function for grouping items in an array.

# Installation

````bash
npm install --save @trenskow/group
````

````javascript
const group = require('@trenskow/group');
````

# Usage

````javascript
const grouped = group(/* array */, /* tester */);
````

| Parameter | Description |
|:----------|:------------|
| array     | The array that needs to be grouped.
| tester    | A function that is used to test the arrays items. *

> Test function takes in two items as parameters and should return `true` if they are in the same group.

## Example

````javascript
const animals = [{
	name: 'dog',
	type: 'mammal'
}, {
	name: 'goldfish',
	type: 'fish'
}, {
	name: 'crocodile',
	type: 'reptile'
}, {
	name: 'cat',
	type: 'mammal'
}, {
	name: 'guppy',
	type: 'fish'
}, {
	name: 'turtle',
	type: 'reptile'
}];

const animalsByType = group(animals, (item1, item2) => {
	return item1.type === item2.type;
});

/*
	Result:

	[
		[{
			name: 'dog',
			type: 'mammal'
		}, {
			name: 'cat',
			type: 'mammal'
		}],

		[{
			name: 'goldfish',
			type: 'fish'
		}, {
			name: 'guppy',
			type: 'fish'
		}],

		[{
			name: 'crocodile',
			type: 'reptile'
		}, {
			name: 'turtle',
			type: 'reptile'
		}]
	]

*/

````

# License

MIT (see LICENSE).
