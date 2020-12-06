import { Command } from 'commander';
import * as SharePoint from '@wmfs/sharepoint';

import { version } from '../../package.json';

export class Client {
  program = new Command();

  constructor(public argv: string[]) {
    this.loadProgram();
  }

  loadProgram(): void {
    this.program.version(version, '-v, --version', 'print current version');
    this.program.option('-p, --profile <name>', 'upload config profile');
    this.program.parse(this.argv);
  }
}
