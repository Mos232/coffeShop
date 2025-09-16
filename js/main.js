const chatButton = document.getElementById('chat-button');
        const chatBox = document.getElementById('chat-box');
        const closeBtn = document.querySelector('.close-btn');
        const messageInput = document.getElementById('message-input');
        const sendBtn = document.getElementById('send-btn');
        const chatMessages = document.getElementById('chat-messages');

        chatButton.addEventListener('click', () => {
            chatBox.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            chatBox.style.display = 'none';
        });

        sendBtn.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        function sendMessage() {
            const message = messageInput.value.trim();
            if (message) {
                // نمایش پیام کاربر
                const userMessage = document.createElement('div');
                userMessage.classList.add('message', 'sent');
                userMessage.textContent = message;
                chatMessages.appendChild(userMessage);
                
                // پاک کردن فیلد ورودی
                messageInput.value = '';
                
                // پاسخ خودکار (در حالت واقعی به سرور وصل می‌شود)
                setTimeout(() => {
                    const botMessage = document.createElement('div');
                    botMessage.classList.add('message', 'received');
                    botMessage.textContent = 'پیام شما دریافت شد. به زودی پاسخگوی شما خواهیم بود!';
                    chatMessages.appendChild(botMessage);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
                
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }