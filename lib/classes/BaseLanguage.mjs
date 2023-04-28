import AbstractLanguage from './AbstractLanguage.mjs';

/**
 * Creates new common language class that uses a highest matching word value algorithm.
 * Number matching word {@link cards} must be provided for this to work.
 * See {@link AbstractLanguage} for further requirements.
 * @classdesc Common class for (mostly european) languages.
 */
export default class extends AbstractLanguage {
  #cards;

  /**
   * @param {object} options Options for class.
   * @param {string} [options.negativeWord = ''] Word that precedes a negative number (if any).
   * @param {string} options.separatorWord Word that separates cardinal numbers (i.e. "and").
   * @param {string} options.zero Word for 0 (i.e. "zero").
   * @param {string} [options.spaceSeparator = ' '] Character that separates words.
   * @param {Array} cards Array of number matching "cards" from highest-to-lowest.
   */
  constructor(options, cards) {
    super(options);

    this.#cards = cards;
  }

  /**
   * Get array of number matching "cards" from highest-to-lowest.
   * First element in card array is the number to match while the second is the word to use.
   * @example
   * [
   *   ...
   *   [100, 'hundred'],
   *   ...
   *   [1, 'one'],
   * ]
   * @returns {Array} Array of number matching "cards" from highest-to-lowest.
   */
  get cards() {
    return this.#cards;
  }

  /**
   * Get word for number if it matches a language card.
   * @param {number} number Card number value.
   * @returns {string|undefined} Return card word or undefined if no card.
   */
  getCardWord(number) {
    // Get matching card from number
    const card = this.cards.find(_card => _card[0] == number);

    // Return card word or undefined if no card found
    return (Array.isArray(card) ? card[1] : undefined);
  }

  /**
   * Convert a number value into words sets for further processing.
   * @param {number} value The number value to convert to cardinal form.
   * @returns {object} Word sets (and pairs) from value.
   * @todo Simplify return object.
   */
  splitNum(value) {
    // Loop through all cards
    // NOTE: Language cards should be ordered from highest to lowest
    for (let i = 0; i < this.cards.length; i++) {
      const number = this.cards[i][0];

      // If card number is greater than value skip to next card
      if (number > value) {
        continue;
      }

      const out = [];
      let div; // Quantity of card set values
      let mod; // Remaining value

      // Calculate quantity and remaining value
      // Override variables for 0 as math will fail
      if (value == 0) {
        div = 1;
        mod = 0;
      } else {
        div = Math.floor(value / number);
        mod = value % number;
      }

      // Is value perfect match of card number?
      if (div == 1) {
        /** @todo Merge word set pairs together (if possible) to simplify return object */
        out.push({
          [this.getCardWord(1)]: 1,
        });
      } else {
        /** @todo Understand the logic for this */
        if (div == value) {
          return [(div * this.getCardWord(number), div * number)];
        }

        /**
         * @todo Understand.
         * @todo Remove reciprocating calls.
         */
        out.push(this.splitNum(div));
      }

      // Add matching word set to output list
      out.push({
        [this.cards[i][1]]: number,
      });

      // Send remaining value back through this function and add resulting word set to output list
      /** @todo Remove reciprocating calls */
      if (mod) {
        out.push(this.splitNum(mod));
      }

      return out;
    }
  }

  scanNum(value) {
    return value.split('').map(v => this.getCardWord(Number(v)));
  }

  /**
   * Process word sets (including pairs).
   * @param {Array} words
   * @returns {Array}
   */
  clean(words) {
    let out = words;

    // Loop through word sets while array size is greater or less than 1
    /** @todo Change logic to work in for loop to better understand loop intentions */
    while (words.length != 1) {
      out = [];
      const left = words[0];
      const right = words[1];

      // Are the first & second word sets arrays?
      if (!Array.isArray(left) && !Array.isArray(right)) {
        // Merge word set pair and add to output array
        out.push(this.merge(left, right));

        /** @todo Understand */
        if (words.slice(2).length > 0) {
          out.push(words.slice(2));
        }
      } else {
        // Loop through
        for (let i = 0; i < words.length; i++) {
          const elem = words[i];

          if (Array.isArray(elem)) {
            if (elem.length == 1) out.push(elem[0]);
            else out.push(this.clean(elem));
          } else {
            out.push(elem);
          }
        }
      }

      words = out;
    }

    return out[0];
  }

  postClean(out0) {
    return out0.trimRight();
  }

  /**
   * Convert a whole number to written format.
   * @param {number} value The number value to convert to cardinal form.
   * @returns {string} Value in written format.
   */
  toCardinal(value) {
    // Convert value to word sets
    const words = this.splitNum(value);

    // Process word sets
    const preWords = Object.keys(this.clean(words))[0];

    // Process word sets some more and return result
    /** @todo Look into language functions/events */
    return this.postClean(preWords);
  }
}
