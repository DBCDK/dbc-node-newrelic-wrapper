# dbc-node-newrelic-wrapper
[![David](https://img.shields.io/david/DBCDK/dbc-node-newrelic-wrapper.svg?style=flat-square)](https://david-dm.org/DBCDK/dbc-node-newrelic-wrapper#info=dependencies)
[![David](https://img.shields.io/david/dev/DBCDK/dbc-node-newrelic-wrapper.svg?style=flat-square)](https://david-dm.org/DBCDK/dbc-node-newrelic-wrapper#info=devDependencies)

## Description
Simple wrapper for the New Relic clientside API, that ensures no errors if the newrelic object is not defined.
The modules simply wraps the New Relic methods in a try/catch 

## Example
```javascript
import * as dbcrelic from 'dbc-node-newrelic-wrapper';
dbcrelic.addPageAction('someEvent, {data: someData});
```

## API
Currently only the addPageAction method is implemented, more will follow whenever they are needed.


## Links
[New Relic Browser Agent API](https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-apis/reporting-data-events-browser-agent-api)

