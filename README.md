
````markdown
# 🎮 Multi-Discord Bot for FiveM

This resource allows you to run **multiple Discord bots** directly from your FiveM server.  
Each bot can have its own **status, activities (Playing, Streaming, Listening, Watching)**, and simple commands like `!ping`.

---

## 🚀 Features
- ✅ Support for **multiple Discord bots** in one script.  
- 🎭 Rotating bot activities every 10 seconds.  
- 🟢 Customizable status (`online`, `idle`, `dnd`).  
- 💬 Basic `!ping` → `Pong!` command.  
- 🔗 Can be hosted as a **FiveM resource**.  

---

## 📦 Installation
1. Download or clone this repository into your `resources` folder:
   ```bash
   cd resources
   git clone https://github.com/pxscripts/fivem-rich-presence-bot.git
````

2. Navigate into the folder and install dependencies:

   ```bash
   cd fivem-rich-presence-bot
   npm install
   ```

3. Configure your bots in **`index.js`**:

   ```js
   {
     token: 'YOUR_BOT_TOKEN',
     activities: [
       { name: 'Playing cool games', type: 'PLAYING' },
       { name: 'Listening to the community', type: 'LISTENING' }
     ],
     status: 'online'
   }
   ```

   ⚠️ **Important:** Each bot requires its own token from the [Discord Developer Portal](https://discord.com/developers/applications).

4. Add the resource to your `server.cfg`:

   ```cfg
   ensure fivem-rich-presence-bot
   ```

5. Start your FiveM server — all bots will automatically log in.

---

## 🛠 Requirements

* [Node.js](https://nodejs.org/) v16 or newer
* A valid **Discord bot token** for each bot
* FiveM server (Windows or Linux)

---

## 📂 Resource Structure

```
multi-discord-bot/
│── index.js        # Main bot logic
│── fxmanifest.lua  # Fxmanifest
│── package.json    # Dependencies
│── README.md       # Documentation
```

---

## ✨ Example Command

In any Discord server where your bot is added, type:

```
!ping
```

The bot will reply:

```
Pong!
```

---

## 📜 License

This project is released under the **MIT License** – free to use, modify, and share.

---

## ❤️ Credits

Made for the FiveM community.
If you like this resource, don’t forget to ⭐ the repo!

```

---


