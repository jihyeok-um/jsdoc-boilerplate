// @author Movie
// @author Harry

/**
 * Buy drinks.
 * @constructor
 * @see {@link https://techcourse.woowahan.com/s/dSWvXWYI/ls/f9hI3wM3|LMS}
 * @see {@link https://github.com/woowacourse/javascript-vendingmachine|GitHub}
 */
 function VendingMachine() {}

 /**
	* Buy americano depending on the price.
	* If you enter an amount less than 1,000 won, you will get a warm Americano,
	* and if you enter an amount more than 1,000 won, you will get a cold Americano.
	* @param {number} inputMoney Money for purchase.
	* @example <caption>예시</caption>
	* vendingMachine.getItem(1000);
	* @example
	* // === 아이스 아메리카노(1/10개)를 1000원에 구매했습니다. ===
	* vendingMachine.getItem(900);
	* @example
	* // === 따뜻한 아메리카노(1/5개)를 900원에 구매했습니다. ===
	* @see VendingMachine
	*/
 VendingMachine.prototype.getItem = function (inputMoney) {};