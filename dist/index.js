'use strict';

/**
 * @file
 * New Relic API wrapper. Wraps the New Relic API methods to avoid failing
 * apllication when using the methods withut New Relic being present.
 * Hte methods below will fail silently.
 * @see The New Relic documentation https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-apis/reporting-data-events-browser-agent-api#methods
 */

/**
 * addPageAction wrapper
 * @param {string} name
 * @param {Object} attributes
 */
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.addPageAction = addPageAction;

function addPageAction(name, attributes) {
  try {
    newrelic.addPageAction(name, attributes); // eslint-disable-line
  } catch (e) {// eslint-disable-line
  }
}