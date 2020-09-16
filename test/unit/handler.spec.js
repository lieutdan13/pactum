const expect = require('chai').expect;
const handler = require('../../src/exports/handler');

describe('Expect Handler', () => {

  it('invalid handler name', () => {
    let err;
    try {
      handler.addExpectHandler();
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('empty handler name', () => {
    let err;
    try {
      handler.addExpectHandler('');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('invalid handler function', () => {
    let err;
    try {
      handler.addExpectHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`func` is required');
  });

});

describe('Retry Handler', () => {

  it('invalid handler name', () => {
    let err;
    try {
      handler.addRetryHandler();
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('empty handler name', () => {
    let err;
    try {
      handler.addRetryHandler('');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('invalid handler function', () => {
    let err;
    try {
      handler.addRetryHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`func` is required');
  });

});

describe('Return Handler', () => {

  it('invalid handler name', () => {
    let err;
    try {
      handler.addReturnHandler();
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('empty handler name', () => {
    let err;
    try {
      handler.addReturnHandler('');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('invalid handler function', () => {
    let err;
    try {
      handler.addReturnHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`func` is required');
  });

});

describe('State Handler', () => {

  it('invalid handler name', () => {
    let err;
    try {
      handler.addStateHandler();
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('empty handler name', () => {
    let err;
    try {
      handler.addStateHandler('');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('invalid handler function', () => {
    let err;
    try {
      handler.addStateHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`func` is required');
  });

});

describe('Data Handler', () => {

  it('invalid handler name', () => {
    let err;
    try {
      handler.addDataHandler();
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('empty handler name', () => {
    let err;
    try {
      handler.addDataHandler('');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('invalid handler function', () => {
    let err;
    try {
      handler.addDataHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`func` is required');
  });

  it('get invalid handler function', () => {
    let err;
    try {
      handler.getDataHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('Custom Data Handler Not Found - hello');
  });

});

describe('Basic Interaction Handler', () => {

  it('invalid handler name', () => {
    let err;
    try {
      handler.addInteractionHandler();
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('empty handler name', () => {
    let err;
    try {
      handler.addInteractionHandler('');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('invalid handler function', () => {
    let err;
    try {
      handler.addInteractionHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`func` is required');
  });

  it('get invalid handler function', () => {
    let err;
    try {
      handler.getInteractionHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('Custom Interaction Handler Not Found - hello');
  });

});

describe('Mock Interaction Handler', () => {

  it('invalid handler name', () => {
    let err;
    try {
      handler.addMockInteractionHandler();
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('empty handler name', () => {
    let err;
    try {
      handler.addMockInteractionHandler('');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('invalid handler function', () => {
    let err;
    try {
      handler.addMockInteractionHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`func` is required');
  });

  it('get invalid handler function', () => {
    let err;
    try {
      handler.getMockInteractionHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('Custom Mock Interaction Handler Not Found - hello');
  });

});

describe('Pact Interaction Handler', () => {

  it('invalid handler name', () => {
    let err;
    try {
      handler.addPactInteractionHandler();
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('empty handler name', () => {
    let err;
    try {
      handler.addPactInteractionHandler('');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`name` is required');
  });

  it('invalid handler function', () => {
    let err;
    try {
      handler.addPactInteractionHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('`func` is required');
  });

  it('get invalid handler function', () => {
    let err;
    try {
      handler.getPactInteractionHandler('hello');
    } catch (error) {
      err = error;
    }
    expect(err.message).equals('Custom Pact Interaction Handler Not Found - hello');
  });

});