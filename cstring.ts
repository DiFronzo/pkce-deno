/**
 * @param {Number} length - The length of the string.
*/
export function cstring(length: number) {
	if (!length) throw 'missing string length'

	if (!Number.isInteger(length)) throw 'string length must be an integer'

	let string = '', values = crypto.getRandomValues(new Uint8Array(length))

	for (; length--;) {
		const _ = 63 & values[length]

		string += (_ < 36 ? _.toString(36) : _ < 62 ? (_ - 26).toString(36).toUpperCase() : _ < 63 ? '_' : '-')
	}

	return string
}
