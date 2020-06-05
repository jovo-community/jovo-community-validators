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
});
