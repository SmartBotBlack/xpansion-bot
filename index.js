(async () => {
  // Pause between tab switches (10 sec)
  const pauseBetweenTabSwitches = 10 * 1000;
  // Pause before and after mining
  const pauseBeforeAndAfterMinig = 10 * 1000;

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

      const claimBtns = [...document.querySelectorAll(".btn-claim")].slice(1);

      for (const claimBtn of claimBtns) {
        claimBtn.click();

        while (!document.querySelector(".btn-confirm")) {
          await new Promise((res) => setTimeout(res, 2 * 1000));
        }

        await new Promise((res) => setTimeout(res, pauseBeforeAndAfterMinig));

        document.querySelector(".btn-confirm")?.click();

        await new Promise((res) => setTimeout(res, pauseBeforeAndAfterMinig));
      }
    }

    await new Promise((res) => setTimeout(res, pauseBetweenTabSwitches));
  }
})();
