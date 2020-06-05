# DurationInRangeValidator

The `DurationInRangeValidator` checks input for an [ISO-8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) that it is within `min` and `max` values.

## Usage

This validator can be used on any slot or entity that takes ISO-8601 duration format input.

Examples:
* Alexa: `AMAZON.DURATION` (ex: SCHEDULED_RELATIVE Reminders)

The constructor takes in values for `minDuration` and `maxDuration` with these default values:
* minDuration: 'PT1H'
* maxDuration: 'P30D'

## Examples

```ts
//TypeScript
import { DurationInRangeValidator } from "jovo-community-validators";

async MyIntent() {
    // input: this.$inputs.duration

    const schema = {
    query: [
        new DurationInRangeValidator(), // default values
        // new DurationInRangeValidator('PT1H', 'PT8H'), // 1 to 8 hours
    ],
    };

    const validation = this.validate(schema);

    // validation fail
    if (validation.failed('query', 'DurationInRangeValidator')) {
        //return this.ask...
    }

    // validation success
}
```

```javascript
//JavaScript
const { DurationInRangeValidator } = require('jovo-community-validators');

async MyIntent() {
    // input: this.$inputs.query

    const schema = {
    query: [
        new DurationInRangeValidator(), // default values
        // new DurationInRangeValidator('PT1H', 'PT8H'), // 1 to 8 hours
    ],
    };

    const validation = this.validate(schema);

    // validation fail
    if (validation.failed('query', 'DurationInRangeValidator')) {
        //return this.ask...
    }

    // validation success
}
```

