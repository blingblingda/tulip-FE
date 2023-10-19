import React, { useState, useEffect } from "react";

export default function DownloadBtn() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    setInstallPrompt(null);
  };

  return (
    <button id="install" onClick={handleInstallClick} hidden={!installPrompt}>
      Install
    </button>
  );
}
