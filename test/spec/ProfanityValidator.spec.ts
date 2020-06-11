
import { expect } from 'chai';
import { ProfanityValidator, ProfanityValidatorConfig } from './../../index';

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

    it('should fail on bad phrase when includePermutations is true', () => {
        const v = new ProfanityValidator();

        const input = {
            name: 'name',
            value: 'booty call'
        };

        v.setInputToValidate(input);
        expect(() => v.validate()).to.throw('ProfanityValidator failed - booty call contains profanity.');
    });

    it('should fail on bad phrase reverse when includePermutations is true', () => {
        const v = new ProfanityValidator();

        const input = {
            name: 'name',
            value: 'call booty'
        };

        v.setInputToValidate(input);
        expect(() => v.validate()).to.throw('ProfanityValidator failed - call booty contains profanity.');
    });

    it('should fail on bad phrase when includePermutations is false', () => {
        const config: ProfanityValidatorConfig = {
            includePermutations: false,
        };
        const v = new ProfanityValidator(config);

        const input = {
            name: 'name',
            value: 'booty call'
        };

        v.setInputToValidate(input);
        expect(() => v.validate()).to.throw('ProfanityValidator failed - booty call contains profanity.');
    });

    it('should pass on bad phrase reverse when includePermutations is false', () => {
        const config: ProfanityValidatorConfig = {
            includePermutations: false,
        };
        const v = new ProfanityValidator(config);

        const input = {
            name: 'name',
            value: 'call booty'
        };

        v.setInputToValidate(input);
        v.validate();
    });

    it('should pass on clean word: apple', () => {
        const v = new ProfanityValidator();

        const input = {
            name: 'name',
            value: 'apple'
        };

        v.setInputToValidate(input);
        v.validate();
    });

    it('should fail on word added to blocklist: apple', () => {
        const config: ProfanityValidatorConfig = {
            blocklist: ['apple'],
        };
        const v = new ProfanityValidator(config);
        const input = {
            name: 'name',
            value: 'apple'
        };

        v.setInputToValidate(input);
        // tslint:disable-next-line: max-line-length
        expect(() => v.validate()).to.throw('ProfanityValidator failed - apple contains profanity.');
    });

    it('should fail on bad word: snatch', () => {
        const v = new ProfanityValidator();

        const input = {
            name: 'name',
            value: 'snatch'
        };

        v.setInputToValidate(input);
        // tslint:disable-next-line: max-line-length
        expect(() => v.validate()).to.throw('ProfanityValidator failed - snatch contains profanity.');
    });

    it('should pass on word added to allowlist: snatch', () => {
        const config: ProfanityValidatorConfig = {
            allowlist: ['snatch'],
        };
        const v = new ProfanityValidator(config);

        const input = {
            name: 'name',
            value: 'snatch'
        };

        v.setInputToValidate(input);
        v.validate();
    });

    it('should pass on bad phrase when includePermutations is true and allowlist', () => {
        const config: ProfanityValidatorConfig = {
            includePermutations: true,
            allowlist: ['booty call'],
        };
        const v = new ProfanityValidator(config);

        const input = {
            name: 'name',
            value: 'booty call'
        };

        v.setInputToValidate(input);
        v.validate();
    });

    it('should pass on bad phrase reverse when includePermutations is true and allowlist', () => {
        const config: ProfanityValidatorConfig = {
            includePermutations: true,
            allowlist: ['booty call'],
        };
        const v = new ProfanityValidator(config);

        const input = {
            name: 'name',
            value: 'call booty'
        };

        v.setInputToValidate(input);
        v.validate();
    });

    it('should pass on bad phrase when includePermutations is false and allowlist', () => {
        const config: ProfanityValidatorConfig = {
            includePermutations: false,
            allowlist: ['booty call'],
        };
        const v = new ProfanityValidator(config);

        const input = {
            name: 'name',
            value: 'booty call'
        };

        v.setInputToValidate(input);
        v.validate();
    });

    it('should pass on bad phrase reverse when includePermutations is false and allowlist', () => {
        const config: ProfanityValidatorConfig = {
            includePermutations: false,
            allowlist: ['booty call'],
        };
        const v = new ProfanityValidator(config);

        const input = {
            name: 'name',
            value: 'call booty'
        };

        v.setInputToValidate(input);
        v.validate();
    });

});
