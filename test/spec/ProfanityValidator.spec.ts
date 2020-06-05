
import { expect } from 'chai';
import { ProfanityValidator } from './../../index';

describe('ProfanityValidator', () => {
    it('should pass on clean word', () => {
        const v = new ProfanityValidator();

        const input = {
            name: 'name',
            value: 'clean'
        };

        v.setInputToValidate(input);
        v.validate();
    });

    it('should fail on bad word', () => {
        const v = new ProfanityValidator();

        const input = {
            name: 'name',
            value: 'damn'
        };

        v.setInputToValidate(input);
        expect(() => v.validate()).to.throw('ProfanityValidator failed - damn contains profanity.');
    });
});
