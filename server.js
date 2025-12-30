const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('.'));

app.post('/api/chat', async (req, res) => {
    const API_KEY = process.env.OPENROUTER_API_KEY;

    if (!API_KEY) {
        return res.status(500).json({
            error: 'API key not configured. Please add OPENROUTER_API_KEY to Replit Secrets.'
        });
    }

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`,
                'HTTP-Referer': req.headers.referer || 'https://replit.com',
                'X-Title': 'AI Prompt Reversal Game'
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to communicate with AI service' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ai-prompt-game.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
