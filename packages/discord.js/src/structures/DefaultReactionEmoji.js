'use strict';

const { Emoji } = require('./Emoji');

/**
 * Represents an emoji shown in the add reaction button on a thread in a guild forum channel
 * @extends {Emoji}
 */
class DefaultReactionEmoji extends Emoji {}

module.exports = DefaultReactionEmoji;
