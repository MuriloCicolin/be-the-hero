const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should be generate an Unique Id', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});