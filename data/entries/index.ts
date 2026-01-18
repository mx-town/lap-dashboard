// ============================================================================
// ENTRIES INDEX - Combines all category entries
// ============================================================================

import type { Entry } from '../types';
import { entries as schutzkonzepteEntries } from './schutzkonzepte';
import { entries as etGesetzeEntries } from './et-gesetze';
import { entries as schaltkastenEntries } from './schaltkasten';
import { entries as halbleitertechnikEntries } from './halbleitertechnik';
import { entries as kabelLeitungenEntries } from './kabel-leitungen';
import { entries as mBearbeitungEntries } from './m-bearbeitung';
import { entries as mMessenEntries } from './m-messen';
import { entries as pneumatikEntries } from './pneumatik';
import { entries as steuerungstechnikEntries } from './steuerungstechnik';
import { entries as netzsystemeEntries } from './netzsysteme';

export const entries: Entry[] = [
  ...schutzkonzepteEntries,
  ...etGesetzeEntries,
  ...schaltkastenEntries,
  ...halbleitertechnikEntries,
  ...kabelLeitungenEntries,
  ...mBearbeitungEntries,
  ...mMessenEntries,
  ...pneumatikEntries,
  ...steuerungstechnikEntries,
  ...netzsystemeEntries,
];
