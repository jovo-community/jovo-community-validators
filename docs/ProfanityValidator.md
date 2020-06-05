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

