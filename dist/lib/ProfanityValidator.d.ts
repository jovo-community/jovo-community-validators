import { Validator } from 'jovo-core';
export interface ProfanityValidatorConfig {
    allowlist?: string[];
    blocklist?: string[];
    includePermutations?: boolean;
}
export declare class ProfanityValidator extends Validator {
    private config?;
    constructor(config?: ProfanityValidatorConfig);
    validate(): void;
    private isProfanity;
}
