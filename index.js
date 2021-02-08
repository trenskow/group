'use strict';

exports = module.exports = (array, tester) => {

	tester = tester || ((i1, i2) => i1 === i2);

	let groups = [];

	// First we copy the input as we need to slice it up.
	let copy = [].concat(array);

	// Iterate through the array.
	while (copy.length > 0) {

		// Find the first item and add it to a new group.
		const outer = copy.splice(0, 1)[0];
		let group = [outer];

		// Add the new group to our result.
		groups.push(group);

		// Find, add to group and remove from input any items that matches group.
		for (let iIdx = 0 ; iIdx < copy.length ; iIdx++) {
			if (tester(outer, copy[iIdx])) {
				group.push(copy.splice(iIdx--, 1)[0]);
			}
		}
	}

	return groups;

};
