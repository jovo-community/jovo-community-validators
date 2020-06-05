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
exports.ProfanityValidator = void 0;
var jovo_core_1 = require("jovo-core");
var profane_words_1 = __importDefault(require("profane-words"));
var js_combinatorics_1 = __importDefault(require("js-combinatorics"));
var ProfanityValidator = /** @class */ (function (_super) {
    __extends(ProfanityValidator, _super);
    function ProfanityValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfanityValidator.prototype.validate = function () {
        var input = this.inputToValidate;
        if (input && input.value && this.isProfanity(input.value)) {
            throw new jovo_core_1.ValidationError(this.constructor.name, this.constructor.name + " failed - " + input.value + " contains profanity.");
        }
    };
    ProfanityValidator.prototype.isProfanity = function (text) {
        var result = false;
        var words = text.toLowerCase().split(' ');
        var powerWords = js_combinatorics_1.default.permutationCombination(words);
        var combinations = [];
        powerWords.forEach(function (e) {
            if (e) {
                combinations.push(e.join(' '));
            }
        });
        if (combinations.some(function (w) { return profane_words_1.default.includes(w); })) {
            result = true;
        }
        return result;
    };
    return ProfanityValidator;
}(jovo_core_1.Validator));
exports.ProfanityValidator = ProfanityValidator;
