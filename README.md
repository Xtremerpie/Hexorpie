# 🤖 Hexorpie

Hexorpie is a Minecraft Java Edition bot built with Mineflayer and Node.js.

The goal of Hexorpie is to become a powerful Minecraft assistant capable of navigation, automation, resource gathering, combat, and AI-powered interactions.

This repository currently contains **Phase 1 (Core Bot System)**.

---

## ✨ Features

### Phase 1

- ✅ Join Minecraft servers
- ✅ Support for cracked/offline-mode servers
- ✅ Owner-only command system
- ✅ Auto reconnect after disconnect
- ✅ Pathfinding support
- ✅ Follow player
- ✅ Walk to player
- ✅ Stop movement
- ✅ Jump command
- ✅ Ping command
- ✅ Command help system

---

## 📋 Commands

| Command | Description |
|----------|------------|
| `!help` | Show all available commands |
| `!ping` | Test bot responsiveness |
| `!jump` | Make the bot jump |
| `!follow` | Follow the owner |
| `!come` | Walk to the owner's location |
| `!stop` | Stop current movement |

---

## 🛠 Requirements

### Software

- Node.js 18+
- Minecraft Java Edition
- VS Code (recommended)

### Minecraft

- Java Edition
- Offline / Cracked servers supported
- Tested on Aternos

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/Hexorpie.git
cd Hexorpie
```

Install dependencies:

```bash
npm install
```

---

## 📥 Required Packages

```bash
npm install mineflayer
npm install mineflayer-pathfinder
npm install minecraft-data
```

---

## ⚙ Configuration

Create a file named:

```text
config.json
```

Example:

```json
{
  "host": "YOUR_SERVER_IP",
  "port": 25565,
  "username": "Hexorpie",
  "owner": "YourMinecraftUsername"
}
```

### Configuration Fields

| Field | Description |
|---------|------------|
| host | Server IP |
| port | Server port |
| username | Bot username |
| owner | Username allowed to control the bot |

---

## 🚀 Running Hexorpie

Start the bot:

```bash
node index.js
```

Expected output:

```text
✅ Hexorpie joined the server!
```

---

## 📂 Project Structure

```text
Hexorpie/
│
├── index.js
├── config.json
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔒 Owner Protection

Hexorpie only accepts commands from the configured owner.

Example:

```json
{
  "owner": "Xtremerpie"
}
```

Any commands sent by other players will be ignored.

---

## 🔄 Auto Reconnect

If the bot disconnects:

```text
Server Restart
↓
Bot Disconnects
↓
Wait 10 Seconds
↓
Bot Reconnects Automatically
```

---

## 🧠 Current Technology Stack

- JavaScript
- Node.js
- Mineflayer
- Mineflayer Pathfinder
- Minecraft Data

---

## 🗺 Roadmap

### Phase 1 (Current)

- [x] Join Server
- [x] Owner Commands
- [x] Follow Owner
- [x] Come Command
- [x] Stop Command
- [x] Auto Reconnect

### Phase 2

- [ ] Position Command
- [ ] Health Command
- [ ] Inventory Command
- [ ] Goto Coordinates
- [ ] Item Management

### Phase 3

- [ ] Mining System
- [ ] Resource Collection
- [ ] Tool Selection
- [ ] Auto Eating

### Phase 4

- [ ] Combat System
- [ ] Mob Detection
- [ ] Guard Owner
- [ ] Auto Defense

### Phase 5

- [ ] Farming
- [ ] Crafting
- [ ] Building Assistance
- [ ] Storage Management

### Phase 6

- [ ] AI Assistant
- [ ] Natural Language Commands
- [ ] Discord Integration
- [ ] VPS Deployment

---

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

Feel free to fork the repository and create pull requests.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Created by Xtremerpie.

Building Hexorpie one phase at a time.
