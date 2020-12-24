
import { Validator, ValidationError } from 'jovo-core';
import profaneWords from 'profane-words';
import combinatorics from 'js-combinatorics';

export interface ProfanityValidatorConfig {
  allowlist?: string[];
  blocklist?: string[];
  includePermutations?: boolean;
}

export class ProfanityValidator extends Validator {

  private config?: ProfanityValidatorConfig = {
    allowlist: [],
    blocklist: [],
    includePermutations: true,
  };

  constructor(config?: ProfanityValidatorConfig) {
    super();

    if (config) {
      this.config = {
        ...this.config,
        ...config,
      };
    }

  }

  public validate() {
    const input = this.inputToValidate;
    if (input && input.value && this.isProfanity(input.value)) {
      throw new ValidationError(
        this.constructor.name,
        `${this.constructor.name} failed - ${input.value} contains profanity.`,
      );
    }
  }

  public isProfanity(text: string) {
    const words = text.toLowerCase().split(' ');

    const combinations: string[] = [];

    if (this.config!.includePermutations) {
      const powerWords = combinatorics.permutationCombination(words);

      powerWords.forEach((e: any) => {
        if (e) {
          combinations.push(e.join(' '));
        }
      });
    } else {
      combinations.push(text);
    }

    const allowlist: string[] = this.config!.allowlist!;

    if (combinations.some((w) => allowlist.includes(w))) {
      return false;
    }

    const blocklist: string[] = this.config!.blocklist!;
    const allProfaneWords = [...profaneWords, ...blocklist];

    if (combinations.some((w) => allProfaneWords.includes(w))) {
      return true;
    }

    return false;
  }
}
