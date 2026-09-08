if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js", {
        scope: "./"
      });

      console.log("Day Wise offline service worker registered:", registration.scope);
    } catch (error) {
      console.error("Day Wise service worker registration failed:", error);
    }
  });
}
