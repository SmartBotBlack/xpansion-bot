(async () => {
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  // Pause between tab switches (10 sec)
  const pauseBetweenTabSwitches = [5 * 1000, 15 * 1000];
  // Pause after mining (20 sec)
  const pauseAndAfterMinig = [15 * 1000, 25 * 1000];

  // Close error popup if need
  setInterval(() => {
    const btnCancel = document.querySelector(
      ".container-card-error .btn-cancel"
    );

    if (btnCancel) btnCancel?.click();
  }, random(8 * 1000, 12 * 1000));

  setInterval(() => {
    const btnConfirm = document.querySelector(
      ".container-setting .btn-confirm"
    );

    if (btnConfirm) btnConfirm?.click();
  }, random(3 * 1000, 7 * 1000));

  // Let's start
  const leftPanelBts = [
    ...(
      document.querySelector(".tab-right") ||
      document.querySelector(".tab-left")
    )
      .closest("div")
      .querySelectorAll("button"),
  ];

  while (1) {
    for (const leftPanelBt of leftPanelBts) {
      leftPanelBt.click();
      await new Promise((res) =>
        setTimeout(res, random(...pauseBetweenTabSwitches)));

      const claimBtn = document.querySelector(".Claim All");
	  try { claimBtn.click(); } catch {}

	  await new Promise((res) =>
          setTimeout(res, random(...pauseAndAfterMinig)));
    }

    await new Promise((res) =>
      setTimeout(res, random(...pauseBetweenTabSwitches)));
  }
})();
