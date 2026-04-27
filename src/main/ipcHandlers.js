import { ipcMain } from "electron";

export function registerHandlers() {
	ipcMain.on("ping", () => console.log("pong"));

	ipcMain.handle("get-app-versions", () => {
		return {
			node: process.versions.node,
			chrome: process.versions.chrome,
			electron: process.versions.electron,
		};
	});
}
