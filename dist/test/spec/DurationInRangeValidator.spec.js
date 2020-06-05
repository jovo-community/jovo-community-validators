"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../../index");
describe('DurationInRangeValidator', () => {
    describe('default range', () => {
        it('should pass inside default range', () => {
            const v = new index_1.DurationInRangeValidator();
            const input = {
                name: 'name',
                value: 'PT1H'
            };
            v.setInputToValidate(input);
            v.validate();
        });
        it('should fail outside default range', () => {
            const v = new index_1.DurationInRangeValidator();
            const input = {
                name: 'name',
                value: 'P31D'
            };
            v.setInputToValidate(input);
            chai_1.expect(() => v.validate()).to.throw('DurationInRangeValidator failed - input is out of range.');
        });
    });
    describe('specified range', () => {
        it('should pass inside specified range', () => {
            const v = new index_1.DurationInRangeValidator('PT1H', 'PT2H');
            const input = {
                name: 'name',
                value: 'PT1H'
            };
            v.setInputToValidate(input);
            v.validate();
        });
        it('should fail outside specified range', () => {
            const v = new index_1.DurationInRangeValidator('PT1H', 'PT2H');
            const input = {
                name: 'name',
                value: 'PT3H'
            };
            v.setInputToValidate(input);
            chai_1.expect(() => v.validate()).to.throw('DurationInRangeValidator failed - input is out of range.');
        });
    });
});
