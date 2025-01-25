# Exchange Rate Library

A simple Node.js library to fetch exchange rates from Google Finance.

## Installation

Install the package using npm:

```bash
npm install rate-exchange-lib
```

## Usage

Import the library and use the `getExchangeRate` function:

```javascript
const { getExchangeRate } = require('rate-exchange-lib');

(async () => {
    try {
        const result = await getExchangeRate('USD', 'EUR');
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
})();
```

## API

### `getExchangeRate(baseCurrency, targetCurrency)`

Fetches the exchange rate between two currencies.

#### Parameters
- `baseCurrency` (string) - The base currency (default: `EUR`).
- `targetCurrency` (string) - The target currency (default: `TRY`).

#### Returns
A promise that resolves to an object:

```json
{
  "base_currency": "USD",
  "target_currency": "EUR",
  "exchange_rate": "1.10"
}
```

## Error Handling

If the exchange rate cannot be fetched, an error will be thrown.

## License

This project is licensed under the MIT License.

