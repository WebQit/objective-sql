
/**
 * @imports
 */
import { IndependentExprInterface } from '@webqit/subscript/src/grammar.js';

/**
 * ---------------------------
 * SelectInterface
 * ---------------------------
 */				

const Interface = class extends IndependentExprInterface {};
Object.defineProperty(Interface.prototype, 'jsenType', {
	get() { return 'SelectStatement'; },
});
export default Interface;
