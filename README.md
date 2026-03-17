# Crash Point Signal Pro v3

Advanced pattern-based betting signals for Crash Point (Game 601) with latency analysis, tick leak detection, and smart risk scoring.

![Crash Point Signal Pro Interface](images/crash-point-scanner-ss-1.png)

> ⚠️ **Note:** The old version (v1) has been moved to [`legacy-README.md`](legacy-README.md). That version is no longer maintained or functional.

---

## Quick Overview

**Crash Point Signal Pro** is a sophisticated userscript that intercepts WebSocket traffic on Melbet's Crash Point game (Game 601) to analyze network-level patterns and provide intelligent betting signals. The system uses multiple detection strategies to identify impending crashes before they occur.

For **detailed documentation** on all features, patterns, and configuration options, please refer to the main repository:

**[📚 Full Documentation →](https://github.com/dinethlive/crash-point-scanner.git)**

### Supported URLs

- `https://melbet-srilanka.com/games-frame/games/601*`
- `https://*.melbet*.com/games-frame/games/601*`

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Network Pattern Detection** | 6 distinct patterns to detect imminent crashes |
| **Risk Scoring (0-100)** | Pre-round risk assessment with multiple factors |
| **Real-Time Alerts** | CASH OUT NOW warnings when patterns trigger |
| **Live Statistics** | Delta time, consecutive profits, streak tracking |
| **History Tracking** | Last 20 crash values with accuracy tracking |

---

## Installation

1. Install a userscript manager (Tampermonkey, Greasemonkey, or Violentmonkey)
2. Create a new userscript
3. Paste the contents of `crash-point-scanner.js`
4. Save and navigate to a supported Melbet Crash Point URL
5. The signal panel will appear in the top-right corner

---

## Usage Guidelines

- **Wait for Data:** Allow at least 3 rounds for the system to gather sufficient data
- **Trust P1 Pattern:** Tick leak indicator is the most reliable — cash out immediately when triggered
- **Default to OBSERVE:** System defaults to OBSERVE, not BET

---

## License

This software is proprietary and licensed under the **Crash Point Signal Pro License**. See the [LICENSE](LICENSE) file for full terms and conditions.

- **Personal Use Only** - For educational and analytical purposes
- **No Commercial Use** - Redistribution is strictly prohibited

---

## Disclaimer

This tool is for educational and analytical purposes only. Gambling involves financial risk. Use responsibly at your own discretion.
