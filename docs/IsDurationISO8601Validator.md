# IsDurationISO8601Validator

The `IsDurationISO8601Validator` checks input to make sure it is valid [ISO-8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations).

## Usage

This validator can be used on any slot or entity that takes ISO-8601 duration format input.

Examples:
* Alexa: `AMAZON.DURATION` (ex: SCHEDULED_RELATIVE Reminders)

## Examples

```ts
//TypeScript
import { IsDurationISO8601Validator } from "jovo-community-validators";

async MyIntent() {
    // input: this.$inputs.duration

    const schema = {
        duration: [
            new IsDurationISO8601Validator()
        ],
    };

    const validation = this.validate(schema);

    // validation fail
    if (validation.failed('duration', 'IsDurationISO8601Validator')) {
        //return this.ask...
    }

    // validation success
}
```

```javascript
//JavaScript
const { IsDurationISO8601Validator } = require('jovo-community-validators');

async MyIntent() {
    // input: this.$inputs.duration

    const schema = {
        duration: [
            new IsDurationISO8601Validator(),
        ],
    };

    const validation = this.validate(schema);

    // validation fail
    if (validation.failed('duration', 'IsDurationISO8601Validator')) {
        //return this.ask...
    }

    // validation success
}
```

