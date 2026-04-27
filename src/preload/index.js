import { contextBridge, ipcRenderer } from "electron";
import log from "electron-log/renderer";

const api = {
	ping: () => ipcRenderer.send("ping"),
	getVersions: () => ipcRenderer.invoke("get-app-versions"),
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld("logger", {
			info: (msg) => log.info(msg),
			error: (msg) => log.error(msg),
			warn: (msg) => log.warn(msg),
		});
		contextBridge.exposeInMainWorld("api", api);
	} catch (error) {
		log.error("Error in the Preload:", error);
	}
} else {
	window.api = api;
	window.logger = log;
}
