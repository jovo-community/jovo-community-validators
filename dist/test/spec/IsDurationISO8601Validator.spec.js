"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../../index");
describe('IsDurationISO8601Validator', () => {
    it('should pass on valid duration', () => {
        const v = new index_1.IsDurationISO8601Validator();
        const input = {
            name: 'name',
            value: 'PT1H'
        };
        v.setInputToValidate(input);
        v.validate();
    });
    it('should fail on bad duration', () => {
        const v = new index_1.IsDurationISO8601Validator();
        const input = {
            name: 'name',
            value: 'XX'
        };
        v.setInputToValidate(input);
        chai_1.expect(() => v.validate()).to.throw('IsDurationISO8601Validator failed - XX is not a valid ISO-8601 format.');
    });
});
