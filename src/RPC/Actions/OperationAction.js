/**
 * Copyright (c) Benjamin Ansbach - all rights reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const Payload = require('./../../Crypto/Payload');
const BaseAction = require('./BaseAction');
const Currency = require('./../../Types/Currency');

/**
 * An object that holds infos about an operation action. It extends the
 * BaseAction functionality by methods which are useful for operations.
 */
class OperationAction extends BaseAction {
  /**
     * Constructor
     *
     * @param {String} method
     * @param {Object} params
     * @param {Executor} executor
     */
  constructor(method, params, executor) {
    super(method, params, executor);
    this.params.fee = new Currency(0);
    this.params.payload = '';
    this.params.payload_method = Payload.METHOD_NONE;
  }

  /**
     * Sets the payload of the action.
     *
     * @param {String|ByteCollection} payload
     * @param {String} payloadMethod
     * @param {String} password
     * @returns {OperationAction}
     */
  withPayload(payload, payloadMethod = Payload.METHOD_NONE, password = null) {
    this.params.payload = payload;
    this.params.payload_method = payloadMethod;
    if (password !== null) {
      this.params.pwd = password;
    }

    return this;
  }

  /**
     * Sets the fee.
     *
     * @param {Number|Currency} fee
     * @returns {OperationAction}
     */
  withFee(fee) {
    this.fee = new Currency(fee);
    return this;
  }

  /**
     * Gets a flag indicating whether the current action is valid.
     *
     * @returns {boolean}
     */
  isValid() {
    return super.isValid();
  }
}

module.exports = OperationAction;
