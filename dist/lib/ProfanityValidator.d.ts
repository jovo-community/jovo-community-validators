import { Validator } from 'jovo-core';
export interface ProfanityValidatorConfig {
    blocklist?: string[];
    allowlist?: string[];
    includePermutations?: boolean;
}
export declare class ProfanityValidator extends Validator {
    private config?;
    constructor(config?: ProfanityValidatorConfig);
    validate(): void;
    private isProfanity;
}
