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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DurationInRangeValidator = void 0;
var jovo_core_1 = require("jovo-core");
var duration_iso_8601_1 = __importDefault(require("duration-iso-8601"));
var DurationInRangeValidator = /** @class */ (function (_super) {
    __extends(DurationInRangeValidator, _super);
    function DurationInRangeValidator(minDuration, maxDuration) {
        var _this = _super.call(this) || this;
        _this._minDuration = minDuration || 'PT1H';
        _this._maxDuration = maxDuration || 'P30D';
        return _this;
    }
    DurationInRangeValidator.prototype.validate = function () {
        var input = this.inputToValidate;
        if (input && input.value) {
            var minSeconds = duration_iso_8601_1.default(this._minDuration);
            var maxSeconds = duration_iso_8601_1.default(this._maxDuration);
            if (!minSeconds || !maxSeconds) {
                throw new jovo_core_1.ValidationError(this.constructor.name, this.constructor.name + " failed - minDuration or maxDuration values not valid.");
            }
            var inputSeconds = duration_iso_8601_1.default(input.value);
            if (!inputSeconds) {
                throw new jovo_core_1.ValidationError(this.constructor.name, this.constructor.name + " failed - input is not a valid ISO-8601 format.");
            }
            if (inputSeconds < minSeconds || inputSeconds > maxSeconds) {
                throw new jovo_core_1.ValidationError(this.constructor.name, this.constructor.name + " failed - input is out of range.");
            }
        }
    };
    return DurationInRangeValidator;
}(jovo_core_1.Validator));
exports.DurationInRangeValidator = DurationInRangeValidator;
