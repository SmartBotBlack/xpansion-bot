(async () => {
  // Pause between tab switches (10 sec)
  const pauseBetweenTabSwitches = 10 * 1000;
  // Pause after mining (20 sec)
  const pauseAndAfterMinig = 20 * 1000;

  // Close error popup if need
  setInterval(() => {
    const btnCancel = document.querySelector(
      ".container-card-error .btn-cancel"
    );

    if (btnCancel) btnCancel?.click();
  }, 10 * 1000);

  setInterval(() => {
    const btnConfirm = document.querySelector(
      ".container-setting .btn-confirm"
    );

    if (btnConfirm) btnConfirm?.click();
  }, 5 * 1000);

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
      await new Promise((res) => setTimeout(res, pauseBetweenTabSwitches));

      const claimBtns = [...document.querySelectorAll(".btn-claim")];

      for (let i = claimBtns.length; i > 0; --i) {
        const claimBtn = document.querySelector(
          `.container-menu-right .h-full:nth-child(${i - 1}) .btn-claim`
        );
        claimBtn.click();

        await new Promise((res) => setTimeout(res, pauseAndAfterMinig));
      }
    }

    await new Promise((res) => setTimeout(res, pauseBetweenTabSwitches));
  }
})();
