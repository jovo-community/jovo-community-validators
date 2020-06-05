
import { expect } from 'chai';
import { IsDurationISO8601Validator } from '../../index';

describe('IsDurationISO8601Validator', () => {
    it('should pass on valid duration', () => {
        const v = new IsDurationISO8601Validator();

        const input = {
            name: 'name',
            value: 'PT1H'
        };

        v.setInputToValidate(input);
        v.validate();
    });

    it('should fail on bad duration', () => {
        const v = new IsDurationISO8601Validator();

        const input = {
            name: 'name',
            value: 'XX'
        };

        v.setInputToValidate(input);
        expect(() => v.validate()).to.throw('IsDurationISO8601Validator failed - XX is not a valid ISO-8601 format.');
    });
});
