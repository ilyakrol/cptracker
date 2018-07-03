const { addProject, getAllProjects } = require('../src/db/queries');

describe('add project', () => {
  it('should export a function', () => {
    expect(typeof addProject).toBe('function');
  });
});

describe('get all projects', () => {
  it('should export a function', () => {
    expect(typeof getAllProjects).toBe('function');
  });
});
