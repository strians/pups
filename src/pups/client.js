import { Command } from 'commander';
import * as SharePoint from '@wmfs/sharepoint';

import { version } from '../../package.json';

export class Client {
  constructor(argv) {
    this.program = new Command();
    this.program.version(version, '-v, --version', 'print current version');
    this.program.parse(argv);
  }
}
