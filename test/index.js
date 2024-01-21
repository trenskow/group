import { expect } from 'chai';

import groupie from '../index.js';

describe('groupie', () => {
	it ('should come back with the array grouped.', () => {

		const data = [{
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

		const grouped = groupie(data, (item1, item2) => {
			return item1.type == item2.type;
		});

		expect(grouped).to.eql([[{
			name: 'dog',
			type: 'mammal'
		}, {
			name: 'cat',
			type: 'mammal'
		}], [{
			name: 'goldfish',
			type: 'fish'
		}, {
			name: 'guppy',
			type: 'fish'
		}], [{
			name: 'crocodile',
			type: 'reptile'
		}, {
			name: 'turtle',
			type: 'reptile'
		}]]);

	});
});
