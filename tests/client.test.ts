import 'core-js/stable';

// Mock this here, since it is imported in src/pups.js
jest.mock('../package.json', () => ({
  version: '11.12.13'
}), { virtual: true });

import * as Pups from '../src/pups';

describe('Pups.Client', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('command-line arguments', () => {
    test('version', () => {
      // Commander uses process.stdout.write to print version
      jest.spyOn(global.process.stdout, 'write');
      // Commander calls process.exit after printing version, so stub it
      jest.spyOn(process, 'exit').mockReturnValueOnce(null as never);
      new Pups.Client(['node', 'pups', '-v']);
      expect(process.stdout.write).toHaveBeenCalledWith('11.12.13\n');
    });
  });
});
