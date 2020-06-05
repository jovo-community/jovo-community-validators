
import { Validator, ValidationError } from 'jovo-core';

// @ts-ignore
import convertToSecond from 'duration-iso-8601';

export class DurationInRangeValidator extends Validator {

  private _minDuration: string;
  private _maxDuration: string;

  constructor(minDuration?: string, maxDuration?: string) {
    super();

    this._minDuration = minDuration || 'PT1H';
    this._maxDuration = maxDuration || 'P30D';
  }
  public validate() {
    const input = this.inputToValidate;
    if (input && input.value) {
      const minSeconds = convertToSecond(this._minDuration);
      const maxSeconds = convertToSecond(this._maxDuration);

      if (!minSeconds || !maxSeconds) {
        throw new ValidationError(
          this.constructor.name,
          `${this.constructor.name} failed - minDuration or maxDuration values not valid.`,
        );
      }

      const inputSeconds = convertToSecond(input.value);

      if (!inputSeconds) {
        throw new ValidationError(
          this.constructor.name,
          `${this.constructor.name} failed - input is not a valid ISO-8601 format.`,
        );
      }

      if (inputSeconds < minSeconds || inputSeconds > maxSeconds) {
        throw new ValidationError(
          this.constructor.name,
          `${this.constructor.name} failed - input is out of range.`,
        );
      }
    }
  }
}
