# AI Prompt Reversal Game

The tables have turned. AI will prompt YOU.

An interactive browser game where you run an AI company and respond to client requests. The AI generates questions for you to answer, then grades your responses and pays you accordingly.

## Features

- Dynamic AI-generated client requests
- Difficulty scaling based on performance
- Shop system to purchase upgrades
- Level progression and reputation system
- Real-time grading and feedback
- 10 unlockable achievements with celebration animations
- Streak system with bonus multipliers
- Random VIP special events for extra rewards
- Particle effects and smooth animations
- Retro-style sound effects (toggle with 🔊 button)

## How to Deploy on Replit

### Step 1: Create a New Repl

1. Go to [Replit](https://replit.com)
2. Click "Create Repl"
3. Select "Import from GitHub"
4. Paste your repository URL
5. Click "Import from GitHub"

### Step 2: Configure Secrets

1. In your Repl, click on the "Tools" icon in the left sidebar
2. Click "Secrets" (it looks like a lock icon)
3. Add a new secret:
   - **Key**: `OPENROUTER_API_KEY`
   - **Value**: Your OpenRouter API key (get one from https://openrouter.ai)
4. Click "Add new secret"

### Step 3: Install Dependencies

Replit should automatically detect the `package.json` file and install dependencies. If not, run:

```bash
npm install
```

### Step 4: Run the Application

Click the green "Run" button at the top of the Repl. The server will start and your game will be accessible via the Replit webview.

### Step 5: Access Your Game

Once running, Replit will provide you with a URL (usually `https://your-repl-name.your-username.repl.co`). Click "Open in new tab" to play the game.

## Local Development

If you want to run this locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```
   OPENROUTER_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser to `http://localhost:3000`

## How to Play

1. Enter your AI company name
2. Read the client's request
3. Type your response
4. Submit and get graded by AI
5. Earn money and XP
6. Level up and buy upgrades
7. Build your reputation

## Project Structure

- `ai-prompt-game.html` - The game frontend
- `server.js` - Backend server that handles API requests securely
- `package.json` - Node.js dependencies
- `.replit` - Replit configuration
- `.env` - Environment variables (local development only, not committed to git)

## API Key Security

**Important**: Your API key is stored securely in Replit Secrets and is never exposed to the browser. The backend server handles all API requests, keeping your credentials safe.

- The frontend JavaScript cannot access your API key
- All API calls go through the `/api/chat` endpoint on your server
- The server reads the API key from environment variables (`process.env.OPENROUTER_API_KEY`)
- Never commit `.env` files to version control

## Getting an OpenRouter API Key

1. Go to [OpenRouter](https://openrouter.ai)
2. Sign up for an account
3. Navigate to your API Keys section
4. Create a new API key
5. Copy the key and add it to Replit Secrets

## Troubleshooting

### "API key not configured" error

- Make sure you've added `OPENROUTER_API_KEY` to Replit Secrets
- Check that the key name is exactly `OPENROUTER_API_KEY` (case-sensitive)
- Try stopping and restarting your Repl

### Server won't start

- Check that `package.json` exists
- Run `npm install` manually in the Shell
- Check the Console for error messages

### Game loads but requests don't generate

- Verify your API key is valid
- Check that you have credits on your OpenRouter account
- Look at the browser console (F12) for errors

## Credits

Built with:
- Express.js for the backend server
- OpenRouter API for AI capabilities
- Pure HTML/CSS/JavaScript for the frontend

## License

MIT
