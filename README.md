# Fitbit Urge Meter

A personal Fitbit app for tracking urge levels (to snack or eat outside of goals). Displays a simple color-coded meter with 5 levels that you can adjust up or down.

## Urge Levels

| Level   | Color   | Meaning                              |
|---------|---------|--------------------------------------|
| NONE    | 🟢 Green  | No urge at all                       |
| LOW     | 🟡 Light Green | Slight awareness, easily ignored |
| MEDIUM  | 🟠 Yellow | Noticeable urge, manageable         |
| HIGH    | 🟠 Orange | Strong urge, requires active effort |
| URGENT  | 🔴 Red    | Very strong, hard to resist          |

## Features

- **Simple UI**: Large color-coded bar showing current level
- **Up/Down buttons**: Tap to adjust your current urge level
- **Persistent storage**: Level is saved to device local storage and persists across app restarts
- **No external services**: Everything runs on-device, no companion app or API needed

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- A Fitbit device that supports apps (Versa 3/4, Sense/Sense 2)
- Fitbit mobile app on your phone
- Developer Bridge enabled on your Fitbit device

## Setup & Development

### 1. Install the Fitbit SDK CLI

```bash
npm install --global @fitbit/sdk-cli
```

### 2. Install project dependencies

```bash
npm install
```

### 3. Enable Developer Bridge on your Fitbit

1. Open the **Fitbit app** on your phone
2. Go to your device settings
3. Enable **Developer Bridge** (Settings > Developer Bridge)
4. Your watch should show "Connected to Developer Bridge"

### 4. Login to Fitbit CLI

```bash
fitbit login
```

Follow the browser authentication flow.

### 5. Build the app

```bash
npx fitbit-build
```

Or use the interactive CLI:

```bash
npx fitbit
# Then type: build
```

### 6. Install to your device

From the interactive `fitbit` shell:

```
fitbit$ install
```

Or combined build + install:

```bash
npx fitbit
# Then type: bi
```

## Project Structure

```
fitbit-urge-meter/
├── app/
│   └── index.js          # Main app logic (runs on device)
├── resources/
│   ├── index.gui         # UI layout (SVG-based)
│   └── styles.css        # Stylesheet
├── package.json          # Project config & Fitbit SDK settings
├── .gitignore
└── README.md
```

## How It Works

- The app displays your current urge level as a large color-coded bar
- Tap **▲ UP** to increase the level (None → Low → Medium → High → Urgent)
- Tap **▼ DOWN** to decrease the level
- Your current level is automatically saved to the device filesystem
- When you reopen the app, it loads your last saved level

## Supported Devices

Configured for:
- **Versa 3** (build target: `meson`)
- **Versa 4** (build target: `rhea`)
- **Sense / Sense 2** (build target: `hera`)

To change target devices, edit the `buildTargets` array in `package.json`.

## Troubleshooting

### Can't connect to device
- Make sure Developer Bridge is enabled on your Fitbit
- Ensure your phone and watch are on the same WiFi network
- Restart the Fitbit app on your phone

### Build errors
- Run `npm install` to ensure dependencies are installed
- Check you're using a compatible Node.js version (LTS recommended)

### App doesn't persist level
- The app uses the device filesystem (`fs` module) to save state
- If storage is cleared (e.g., factory reset), the level resets to NONE

## Notes

This is a personal-use sideloaded app — not published to the Fitbit App Gallery.
FitBit Urge Meter
