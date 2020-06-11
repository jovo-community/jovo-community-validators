# ProfanityValidator

The `ProfanityValidator` checks input for words or phrases that might be questionable.

## Usage

This validator can be used on any slot or entity that takes string input.

Examples:
* Alexa: `AMAZON.SearchQuery`
* Dialogflow: `@sys.any`

## Examples

```ts
//TypeScript
import { ProfanityValidator } from "jovo-community-validators";

async MyIntent() {
    // input: this.$inputs.query

    const schema = {
        query: [
            new ProfanityValidator(),
        ],
    };

    const validation = this.validate(schema);

    // validation fail
    if (validation.failed('query', 'ProfanityValidator')) {
        //return this.ask...
    }

    // validation success
}
```

```javascript
//JavaScript
const { ProfanityValidator } = require('jovo-community-validators');

async MyIntent() {
    // input: this.$inputs.query

    const schema = {
        query: [
            new ProfanityValidator(),
        ],
    };

    const validation = this.validate(schema);

    // validation fail
    if (validation.failed('query', 'ProfanityValidator')) {
        //return this.ask...
    }

    // validation success
}
```

## Configuration
The `ProfanityValidator` takes an optional `ProfanityValidatorConfig` in the constructor. The default values for the config is:

```json
{
    includePermutations: true,
    allowlist: [],
    blocklist: []
}
```

You can set the validator config as follows:

```ts
//TypeScript
import { ProfanityValidator, ProfanityValidatorConfig } from "jovo-community-validators";

...

const config: ProfanityValidatorConfig = {
    includePermutations: false,
    allowlist: ['word1'],
    blocklist: ['word2', 'word3', 'word4 word5'],
};

const schema = {
    query: [
        new ProfanityValidator(config),
    ],
};

...
```

```javascript
//JavaScript
const { ProfanityValidator } = require('jovo-community-validators');

...

const config = {
    includePermutations: false,
    allowlist: ['word1'],
    blocklist: ['word2', 'word3', 'word4 word5'],
};

const schema = {
    query: [
        new ProfanityValidator(config),
    ],
};

...
```



### includePermutations
- `true` - check all permutations of input against profanity list
- `false` - only check the exact input against the profanity list

Let's suppose that the list of profane words includes the phrase: "word1 word2"

#### `includePermutations` is `false`:

If the voice input was "word1 word2" then the validator would fail and the word would be correctly flagged as profanity.

If the user was being clever and reversed the voice input to "word2 word1" then the validator would pass and the phrase would be considered safe.

#### `includePermutations` is `true`:

It doesn't matter the order of the input, because both "word1 word2" and "word2 word1" would be checked against the profanity list and if any matches, the validator fails.

The more words in the phrase, the more permutations are checked.

For example:

    "word1 word2 word3"

would result in the following checks:
- word1
- word2
- word3
- word1 word2
- word1 word3
- word2 word3
- word2 word1
- word3 word1
- word3 word2
- word1 word2 word3
- word1 word3 word2
- word2 word3 word1
- word2 word1 word3
- word3 word1 word2
- word3 word2 word1

If any of those matched a word in the profane list, then the phrase would be marked as profanity.


### allowlist

A list of words or phrases that are always allowed, even if they are in the `blocklist` or internal `profanity list`. The check against `allowlist` happens first and passes validation if the word, phrase, or any permutations match the list.

### blocklist

A list of words to add to the internal `profanity list`. The check against `allowlist` happens first, so if the same word or phrase is in the `allowlist` and `blocklist` it will pass validation.