// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge } from 'electron';
import { version } from '../package.json';
import Language from '../data/strings.json';

contextBridge.exposeInMainWorld('appContext', {
    version: version
});

contextBridge.exposeInMainWorld('languageText', Language);
