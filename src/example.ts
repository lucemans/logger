import { Logger } from ".";

const log = new Logger('APPLICATION');
log.dumb('HEY!');
log.info('Hey there this is information');
log.warn('SOMETHING IS UP');
log.error('CRASH REPORT HELP HERE THING')
log.success('All servers online!')