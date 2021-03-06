/**
 * Copyright (c) Benjamin Ansbach - all rights reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const Abstract = require('./../Abstract');

const P_VER = Symbol('ver');
const P_VER_A = Symbol('verA');

/**
 * Holds information about a nodes version.
 */
class NetProtocol extends Abstract {
  /**
     * Constructor
     *
     * @param {Object} data
     */
  constructor(data) {
    super(data);
    this[P_VER] = parseInt(data.ver, 10);
    this[P_VER_A] = parseInt(data.verA, 10);
  }

  /**
     * Gets the wallets protocol version.
     *
     * @returns {Number}
     */
  get ver() {
    return this[P_VER];
  }

  /**
     * Gets the miners protocol version.
     *
     * @returns {Number}
     */
  get verA() {
    return this[P_VER_A];
  }
}

module.exports = NetProtocol;
