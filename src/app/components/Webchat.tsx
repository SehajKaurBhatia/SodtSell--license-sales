// // components/Webchat.js
// 'use client'; // Ensure this is here to run client-side

// import { useEffect } from 'react';

// const Webchat = () => {
//   useEffect(() => {
//     // Check if Botpress is available on the window object
//     if (typeof window !== 'undefined' && window.botpress) {
//       window.botpress.on('webchat:ready', () => {
//         // Initialize the Botpress Webchat
//         window.botpress.init({
//           botId: '803e2180-8d98-4342-b132-e8af0a8b4e02',  // Replace with your bot ID
//           clientId: '9b547e5d-928b-470f-b81b-3df23ab77946',  // Replace with your client ID
//           selector: '#webchat',
//           configuration: {
//             botName: 'ChatBot',
//             fabImage: 'https://files.bpcontent.cloud/2025/05/13/18/20250513181109-5KRV7UBH.png', // Optional custom FAB image
//             color: '#5eb1ef',
//             variant: 'soft',
//             themeMode: 'light',
//             fontFamily: 'inter',
//             radius: 1
//           }
//         });
        
//         window.botpress.open();  // Open the chat window once ready
//       });
//     }
//   }, []);

//   return <div id="webchat" className='bg-white' style={{ position: 'fixed', bottom: '20px', right: '20px', width: '350px', height: '400px', zIndex: 1000 }}></div>;
// };

// export default Webchat;
