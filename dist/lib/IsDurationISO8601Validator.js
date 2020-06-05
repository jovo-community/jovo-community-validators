"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDurationISO8601Validator = void 0;
const jovo_core_1 = require("jovo-core");
// @ts-ignore
const duration_iso_8601_1 = require("duration-iso-8601");
class IsDurationISO8601Validator extends jovo_core_1.Validator {
    validate() {
        const input = this.inputToValidate;
        if (input && input.value && !duration_iso_8601_1.convertDuration(input.value)) {
            throw new jovo_core_1.ValidationError(this.constructor.name, `${this.constructor.name} failed - ${input.value} is not a valid ISO-8601 format.`);
        }
    }
}
exports.IsDurationISO8601Validator = IsDurationISO8601Validator;
