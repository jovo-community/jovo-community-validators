"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { verify, anything, spy, capture } from 'ts-mockito';
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
        // expect(() => v.validate()).toThrow('IsRequiredValidator failed.');
    });
});
