'use client';

import { useEffect } from 'react';

// Define the shape of the Telegram user object
interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

// Define the props for the component
interface TelegramLoginButtonProps {
  botName: string; // The username of your Telegram bot
  onAuth: (user: TelegramUser) => void; // Callback function to handle authentication
}

const TelegramLoginButton = ({ botName, onAuth }: TelegramLoginButtonProps) => {
  useEffect(() => {
    // Make the callback function available globally for the Telegram script
    (window as any).onTelegramAuth = onAuth;

    // Load the Telegram widget script
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', botName);
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');

    // Find the container and append the script
    const container = document.getElementById('telegram-login-container');
    if (container) {
      container.appendChild(script);
    }

    // Cleanup function to remove the global callback
    return () => {
      delete (window as any).onTelegramAuth;
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, [botName, onAuth]);

  return <div id="telegram-login-container" />;
};

export default TelegramLoginButton;
