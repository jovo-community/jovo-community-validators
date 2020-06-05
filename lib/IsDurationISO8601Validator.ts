
import { Validator, ValidationError } from 'jovo-core';
// @ts-ignore
import { convertDuration } from 'duration-iso-8601';

export class IsDurationISO8601Validator extends Validator {
  public validate() {
    const input = this.inputToValidate;
    if (input && input.value && !convertDuration(input.value)) {
      throw new ValidationError(
        this.constructor.name,
        `${this.constructor.name} failed - ${input.value} is not a valid ISO-8601 format.`,
      );
    }
  }
}
