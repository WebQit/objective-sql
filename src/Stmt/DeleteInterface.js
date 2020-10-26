
/**
 * @imports
 */
import { IndependentExprInterface } from '@web-native-js/jsen';

/**
 * ---------------------------
 * DeleteInterface
 * ---------------------------
 */				

const Interface = class extends IndependentExprInterface {};
Object.defineProperty(Interface.prototype, 'jsenType', {
	get() { return 'DeleteStatement'; },
});
export default Interface;
