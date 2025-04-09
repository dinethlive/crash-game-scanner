function startCrashPredictionLoop(intervalMs = 100) {
    let lastPlayerCount = 0;
    let peakPlayerCount = 0;
    let timeSinceLastGrowth = 0;
    const maxWaitAfterPeak = 2000; // now waits for 2 seconds before triggering prediction

    let predictedCrash = 0;
    let lastValidWinnings = 0;

    let state = 'waiting'; // 'waiting' → 'watching' → 'predicted' → 'finished'

    console.log("🚀 Crash Predictor Fully Running...");

    setInterval(() => {
        const playerEl = document.querySelector('.crash-total__value--players');
        const betEl = document.querySelector('.crash-total__value--bets');
        const winEl = document.querySelector('.crash-total__value--prize');

        if (!playerEl || !betEl || !winEl) return;

        const playerCount = parseInt(playerEl.innerText.replace(/[^\d]/g, ''), 10);
        const totalBets = parseInt(betEl.innerText.replace(/[^\d]/g, ''), 10);
        const totalWinnings = parseInt(winEl.innerText.replace(/[^\d]/g, ''), 10);

        if (totalWinnings > 0) {
            lastValidWinnings = totalWinnings;
        }

        if (state === 'waiting' && playerCount > 0) {
            console.log(`🎬 New round detected. Watching player growth...`);
            state = 'watching';
            peakPlayerCount = playerCount;
            timeSinceLastGrowth = 0;
        }

        if (state === 'watching') {
            if (playerCount > peakPlayerCount) {
                peakPlayerCount = playerCount;
                timeSinceLastGrowth = 0;
            } else {
                timeSinceLastGrowth += intervalMs;
            }

            if (timeSinceLastGrowth >= maxWaitAfterPeak) {
                predictedCrash = Math.floor(totalBets * 0.6);
                console.log("=======================================");
                console.log(`🎯 Prediction triggered after 2s freeze`);
                console.log(`👥 Max Players: ${peakPlayerCount.toLocaleString()}`);
                console.log(`💰 Total Bets: ${totalBets.toLocaleString()} LKR`);
                console.log(`📉 Predicted Crash Cap (60%): ${predictedCrash.toLocaleString()} LKR`);
                console.log("=======================================");

                state = 'predicted';
            }
        }

        if (state === 'predicted' && playerCount === 0) {
            console.log(`🏁 Round Finished`);
            console.log(`🧾 Last Total Winnings: ${lastValidWinnings.toLocaleString()} LKR`);

            if (lastValidWinnings <= predictedCrash) {
                console.log("✅ SUCCESS: Winnings were within predicted cap.");
            } else {
                console.log("❌ FAILURE: Winnings exceeded prediction.");
            }
            console.log("=======================================");

            // Reset for next round
            state = 'waiting';
            peakPlayerCount = 0;
            lastValidWinnings = 0;
            timeSinceLastGrowth = 0;
        }

        lastPlayerCount = playerCount;
    }, intervalMs);
}
