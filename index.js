const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Fetch the exchange rate between two currencies.
 *
 * @param {string} baseCurrency - The base currency (e.g., 'EUR').
 * @param {string} targetCurrency - The target currency (e.g., 'TRY').
 * @returns {Promise<string|null>} - The exchange rate or null if it couldn't be fetched.
 */
async function fetchExchangeRate(baseCurrency, targetCurrency) {
    const url = `https://www.google.com/finance/quote/${targetCurrency}-${baseCurrency}`;
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    };

    try {
        const response = await axios.get(url, { headers });
        const $ = cheerio.load(response.data);
        const exchangeRate = $('.YMlKec.fxKbKc').text();
        return exchangeRate;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        return null;
    }
}

/**
 * A simple function to get the exchange rate.
 *
 * @param {string} baseCurrency - The base currency (default 'EUR').
 * @param {string} targetCurrency - The target currency (default 'TRY').
 * @returns {Promise<object>} - A JSON object with the exchange rate or an error.
 */
async function getExchangeRate(baseCurrency = 'EUR', targetCurrency = 'TRY') {
    const rate = await fetchExchangeRate(baseCurrency, targetCurrency);

    if (rate) {
        return {
            base_currency: baseCurrency,
            target_currency: targetCurrency,
            exchange_rate: rate
        };
    } else {
        throw new Error('Could not fetch exchange rate');
    }
}

module.exports = {
    getExchangeRate
};
