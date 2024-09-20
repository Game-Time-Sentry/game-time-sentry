// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { version } from '../package.json';
import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('context', {
    version: version
});
