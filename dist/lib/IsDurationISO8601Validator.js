"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDurationISO8601Validator = void 0;
var jovo_core_1 = require("jovo-core");
// @ts-ignore
var duration_iso_8601_1 = require("duration-iso-8601");
var IsDurationISO8601Validator = /** @class */ (function (_super) {
    __extends(IsDurationISO8601Validator, _super);
    function IsDurationISO8601Validator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDurationISO8601Validator.prototype.validate = function () {
        var input = this.inputToValidate;
        if (input && input.value && !duration_iso_8601_1.convertDuration(input.value)) {
            throw new jovo_core_1.ValidationError(this.constructor.name, this.constructor.name + " failed - " + input.value + " is not a valid ISO-8601 format.");
        }
    };
    return IsDurationISO8601Validator;
}(jovo_core_1.Validator));
exports.IsDurationISO8601Validator = IsDurationISO8601Validator;
