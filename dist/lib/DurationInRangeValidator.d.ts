import { Validator } from 'jovo-core';
export declare class DurationInRangeValidator extends Validator {
    private _minDuration;
    private _maxDuration;
    constructor(minDuration?: string, maxDuration?: string);
    validate(): void;
}
