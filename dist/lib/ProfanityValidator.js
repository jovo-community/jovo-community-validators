"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfanityValidator = void 0;
const jovo_core_1 = require("jovo-core");
const profane_words_1 = __importDefault(require("profane-words"));
const js_combinatorics_1 = __importDefault(require("js-combinatorics"));
class ProfanityValidator extends jovo_core_1.Validator {
    validate() {
        const input = this.inputToValidate;
        if (input && input.value && this.isProfanity(input.value)) {
            throw new jovo_core_1.ValidationError(this.constructor.name, `${this.constructor.name} failed - ${input.value} contains profanity.`);
        }
    }
    isProfanity(text) {
        let result = false;
        const words = text.toLowerCase().split(' ');
        const powerWords = js_combinatorics_1.default.permutationCombination(words);
        const combinations = [];
        powerWords.forEach((e) => {
            if (e) {
                combinations.push(e.join(' '));
            }
        });
        if (combinations.some((w) => profane_words_1.default.includes(w))) {
            result = true;
        }
        return result;
    }
}
exports.ProfanityValidator = ProfanityValidator;
