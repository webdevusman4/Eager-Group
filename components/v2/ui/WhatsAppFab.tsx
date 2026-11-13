import React from 'react';
import { content, getWhatsAppUrl } from '@/lib/content-v2';

export const WhatsAppFab: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(content.contact.whatsappConsultMessage);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Eager Consulting & Training"
      className="fixed right-5 bottom-20 md:bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.632-.929-2.235-.244-.588-.493-.508-.678-.517-.176-.009-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.079 2.909 1.23 3.11 0.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.514 2 2.028 6.486 2.028 12.012c0 1.849.504 3.652 1.464 5.235L2 22l4.896-1.44a10.005 10.005 0 0 0 5.144 1.452h.005c5.524 0 10.012-4.486 10.012-10.012C22.057 6.486 17.567 2 12.04 2zm0 18.283h-.004a8.273 8.273 0 0 1-4.223-1.162l-.303-.18-3.14.923.938-3.061-.197-.314a8.28 8.28 0 0 1-1.272-4.477c0-4.57 3.718-8.288 8.289-8.288 2.215 0 4.297.863 5.863 2.43 1.566 1.567 2.428 3.65 2.428 5.865 0 4.571-3.718 8.289-8.289 8.289z" />
      </svg>
    </a>
  );
};
