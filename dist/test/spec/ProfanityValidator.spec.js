"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("./../../index");
describe('ProfanityValidator', () => {
    it('should pass on clean word', () => {
        const v = new index_1.ProfanityValidator();
        const input = {
            name: 'name',
            value: 'clean'
        };
        v.setInputToValidate(input);
        v.validate();
    });
    it('should fail on bad word', () => {
        const v = new index_1.ProfanityValidator();
        const input = {
            name: 'name',
            value: 'damn'
        };
        v.setInputToValidate(input);
        chai_1.expect(() => v.validate()).to.throw('ProfanityValidator failed - damn contains profanity.');
    });
    it('should fail on bad phrase when includePermutations is true', () => {
        const v = new index_1.ProfanityValidator();
        const input = {
            name: 'name',
            value: 'booty call'
        };
        v.setInputToValidate(input);
        chai_1.expect(() => v.validate()).to.throw('ProfanityValidator failed - booty call contains profanity.');
    });
    it('should fail on bad phrase reverse when includePermutations is true', () => {
        const v = new index_1.ProfanityValidator();
        const input = {
            name: 'name',
            value: 'call booty'
        };
        v.setInputToValidate(input);
        chai_1.expect(() => v.validate()).to.throw('ProfanityValidator failed - call booty contains profanity.');
    });
    it('should fail on bad phrase when includePermutations is false', () => {
        const config = {
            includePermutations: false,
        };
        const v = new index_1.ProfanityValidator(config);
        const input = {
            name: 'name',
            value: 'booty call'
        };
        v.setInputToValidate(input);
        chai_1.expect(() => v.validate()).to.throw('ProfanityValidator failed - booty call contains profanity.');
    });
    it('should pass on bad phrase reverse when includePermutations is false', () => {
        const config = {
            includePermutations: false,
        };
        const v = new index_1.ProfanityValidator(config);
        const input = {
            name: 'name',
            value: 'call booty'
        };
        v.setInputToValidate(input);
        v.validate();
    });
    it('should pass on clean word: apple', () => {
        const v = new index_1.ProfanityValidator();
        const input = {
            name: 'name',
            value: 'apple'
        };
        v.setInputToValidate(input);
        v.validate();
    });
    it('should fail on word added to blocklist: apple', () => {
        const config = {
            blocklist: ['apple'],
        };
        const v = new index_1.ProfanityValidator(config);
        const input = {
            name: 'name',
            value: 'apple'
        };
        v.setInputToValidate(input);
        // tslint:disable-next-line: max-line-length
        chai_1.expect(() => v.validate()).to.throw('ProfanityValidator failed - apple contains profanity.');
    });
    it('should fail on bad word: snatch', () => {
        const v = new index_1.ProfanityValidator();
        const input = {
            name: 'name',
            value: 'snatch'
        };
        v.setInputToValidate(input);
        // tslint:disable-next-line: max-line-length
        chai_1.expect(() => v.validate()).to.throw('ProfanityValidator failed - snatch contains profanity.');
    });
    it('should pass on word added to allowlist: snatch', () => {
        const config = {
            allowlist: ['snatch'],
        };
        const v = new index_1.ProfanityValidator(config);
        const input = {
            name: 'name',
            value: 'snatch'
        };
        v.setInputToValidate(input);
        v.validate();
    });
    it('should pass on bad phrase when includePermutations is true and allowlist', () => {
        const config = {
            includePermutations: true,
            allowlist: ['booty call'],
        };
        const v = new index_1.ProfanityValidator(config);
        const input = {
            name: 'name',
            value: 'booty call'
        };
        v.setInputToValidate(input);
        v.validate();
    });
    it('should pass on bad phrase reverse when includePermutations is true and allowlist', () => {
        const config = {
            includePermutations: true,
            allowlist: ['booty call'],
        };
        const v = new index_1.ProfanityValidator(config);
        const input = {
            name: 'name',
            value: 'call booty'
        };
        v.setInputToValidate(input);
        v.validate();
    });
    it('should pass on bad phrase when includePermutations is false and allowlist', () => {
        const config = {
            includePermutations: false,
            allowlist: ['booty call'],
        };
        const v = new index_1.ProfanityValidator(config);
        const input = {
            name: 'name',
            value: 'booty call'
        };
        v.setInputToValidate(input);
        v.validate();
    });
    it('should pass on bad phrase reverse when includePermutations is false and allowlist', () => {
        const config = {
            includePermutations: false,
            allowlist: ['booty call'],
        };
        const v = new index_1.ProfanityValidator(config);
        const input = {
            name: 'name',
            value: 'call booty'
        };
        v.setInputToValidate(input);
        v.validate();
    });
});
