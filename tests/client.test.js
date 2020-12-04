import 'core-js/stable';

// Mock this here, since it is imported in src/pups.js
jest.mock('../package.json', () => ({
  version: '11.12.13'
}), { virtual: true });

const Pups = require('../src/pups');

describe('Pups.Client', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('version', async () => {
    // Commander uses process.stdout.write to print version
    jest.spyOn(global.process.stdout, 'write');
    // Commander calls process.exit after printing version, so stub it
    jest.spyOn(process, 'exit').mockImplementation(() => {});
    new Pups.Client(['node', 'pups', '-v']);
    expect(process.stdout.write).toHaveBeenCalledWith('11.12.13\n');
  });
});
