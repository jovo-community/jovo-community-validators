
import { Validator, ValidationError } from 'jovo-core';
import profaneWords from 'profane-words';
import combinatorics from 'js-combinatorics';

export class ProfanityValidator extends Validator {
  public validate() {
    const input = this.inputToValidate;
    if (input && input.value && this.isProfanity(input.value)) {
      throw new ValidationError(
        this.constructor.name,
        `${this.constructor.name} failed - ${input.value} contains profanity.`,
      );
    }
  }

  private isProfanity(text: string) {
    let result = false;

    const words = text.toLowerCase().split(' ');
    const powerWords = combinatorics.permutationCombination(words);

    const combinations: string[] = [];
    powerWords.forEach((e: any) => {
      if (e) {
        combinations.push(e.join(' '));
      }
    });

    if (combinations.some((w) => profaneWords.includes(w))) {
      result = true;
    }

    return result;
  }
}
