document.addEventListener("DOMContentLoaded", () => {
  const discordLink = "https://discord.gg/arezstoreofficial";

  document.getElementById("joinDiscord").addEventListener("click", () => {
    window.open(discordLink, "_blank");
  });

  /* ===== ADMIN STATUS SYSTEM ===== */

  const ONLINE_START = 10; // 10.00 WIB

  function updateAdminStatus() {
    const now = new Date();

    const wibHour = (now.getUTCHours() + 7) % 24;
    const wibMinute = now.getUTCMinutes();
    const wibSecond = now.getUTCSeconds();

    const statusDot = document.getElementById("statusDot");
    const statusText = document.getElementById("statusText");
    const statusTime = document.getElementById("statusTime");

    if (!statusDot || !statusText || !statusTime) return;

    const currentSeconds = wibHour * 3600 + wibMinute * 60 + wibSecond;

    const startSeconds = ONLINE_START * 3600;
    const endSeconds = 23 * 3600 + 59 * 60 + 59;

    const isOnline =
      currentSeconds >= startSeconds && currentSeconds <= endSeconds;

    if (isOnline) {
      statusDot.className = "status-dot online";
      statusText.textContent = "Admin Online • Pesanan sedang diproses";
    } else {
      statusDot.className = "status-dot offline";
      statusText.textContent = "Admin Offline • Online pukul 10.00 WIB";
    }

    statusTime.textContent = `${String(wibHour).padStart(2, "0")}:${String(
      wibMinute
    ).padStart(2, "0")}:${String(wibSecond).padStart(2, "0")} WIB`;
  }

  updateAdminStatus();
  setInterval(updateAdminStatus, 1000); // update tiap detik
});
