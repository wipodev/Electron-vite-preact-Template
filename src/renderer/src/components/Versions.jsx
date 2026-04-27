import { useState, useEffect } from "preact/hooks";

function Versions() {
	// We initialize with empty values ​​to avoid "undefined" errors
	const [versions, setVersions] = useState({
		electron: "",
		chrome: "",
		node: "",
	});

	useEffect(() => {
		// We define an asynchronous function to obtain the data
		const fetchVersions = async () => {
			try {
				const data = await window.api.getVersions();
				setVersions(data); // We updated the status with the actual data.
			} catch (error) {
				console.error("Error obteniendo versiones:", error);
			}
		};

		fetchVersions();
	}, []); // The empty array [] ensures that this only runs once.

	return (
		<ul class="versions">
			<li class="electron-version">Electron v{versions.electron}</li>
			<li class="chrome-version">Chromium v{versions.chrome}</li>
			<li class="node-version">Node v{versions.node}</li>
		</ul>
	);
}

export default Versions;
