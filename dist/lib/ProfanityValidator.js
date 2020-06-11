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
    constructor(config) {
        super();
        this.config = {
            blocklist: [],
            allowlist: [],
            includePermutations: true,
        };
        if (config) {
            this.config = Object.assign(Object.assign({}, this.config), config);
        }
    }
    validate() {
        const input = this.inputToValidate;
        if (input && input.value && this.isProfanity(input.value)) {
            throw new jovo_core_1.ValidationError(this.constructor.name, `${this.constructor.name} failed - ${input.value} contains profanity.`);
        }
    }
    isProfanity(text) {
        const words = text.toLowerCase().split(' ');
        const combinations = [];
        if (this.config.includePermutations) {
            const powerWords = js_combinatorics_1.default.permutationCombination(words);
            powerWords.forEach((e) => {
                if (e) {
                    combinations.push(e.join(' '));
                }
            });
        }
        else {
            combinations.push(text);
        }
        const allowlist = this.config.allowlist;
        if (combinations.some((w) => allowlist.includes(w))) {
            return false;
        }
        const blocklist = this.config.blocklist;
        const allProfaneWords = [...profane_words_1.default, ...blocklist];
        if (combinations.some((w) => allProfaneWords.includes(w))) {
            return true;
        }
        return false;
    }
}
exports.ProfanityValidator = ProfanityValidator;
