"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DurationInRangeValidator = void 0;
const jovo_core_1 = require("jovo-core");
// @ts-ignore
const duration_iso_8601_1 = require("duration-iso-8601");
class DurationInRangeValidator extends jovo_core_1.Validator {
    constructor(minDuration, maxDuration) {
        super();
        this._minDuration = minDuration || 'PT1H';
        this._maxDuration = maxDuration || 'P30D';
    }
    validate() {
        const input = this.inputToValidate;
        if (input && input.value) {
            const minSeconds = duration_iso_8601_1.convertToSecond(this._minDuration);
            const maxSeconds = duration_iso_8601_1.convertToSecond(this._maxDuration);
            if (!minSeconds || !maxSeconds) {
                throw new jovo_core_1.ValidationError(this.constructor.name, `${this.constructor.name} failed - minDuration or maxDuration values not valid.`);
            }
            const inputSeconds = duration_iso_8601_1.convertToSecond(input.value);
            if (!inputSeconds) {
                throw new jovo_core_1.ValidationError(this.constructor.name, `${this.constructor.name} failed - input is not a valid ISO-8601 format.`);
            }
            if (inputSeconds < minSeconds || inputSeconds > maxSeconds) {
                throw new jovo_core_1.ValidationError(this.constructor.name, `${this.constructor.name} failed - input is out of range.`);
            }
        }
    }
}
exports.DurationInRangeValidator = DurationInRangeValidator;
