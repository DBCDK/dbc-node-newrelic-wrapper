'use strict';

import * as dbcrelic from '../index.js';
import {assert} from 'chai';

describe('Test methods in index.js', () => {
  it('Assert addPageAction doesn\'t throw when newrelic is not defined globally', () => {
    assert.doesNotThrow(dbcrelic.addPageAction, 'addPageAction doens\'t throw when newrelic isn\'t undefined');
  });
});
