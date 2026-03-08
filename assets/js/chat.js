function toggleChat() {
    const window = document.getElementById('chatWindow');
    window.style.display = window.style.display === 'none' ? 'flex' : 'none';
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    addUserMessage(message);
    input.value = '';
    setTimeout(() => handleUserMessage(message), 500);
}

function addUserMessage(message) {
    const messagesDiv = document.getElementById('chatMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'user-message';
    msgDiv.textContent = message;
    messagesDiv.appendChild(msgDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function addBotMessage(message) {
    const messagesDiv = document.getElementById('chatMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'bot-message';
    msgDiv.innerHTML = message;
    messagesDiv.appendChild(msgDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function handleUserMessage(message) {
    const lower = message.toLowerCase();

    if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
        addBotMessage('For a free quote, call <strong>(562) 525-6091</strong>.');
    } else {
        addBotMessage('Call us at <strong>(562) 525-6091</strong> and we’ll help you right away!');
    }
}