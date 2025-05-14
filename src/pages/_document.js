// import Document, { Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           {/* Botpress WebChat Inject Script */}
//           <script src="https://cdn.botpress.cloud/webchat/v2.4/inject.js" async></script>

//           {/* WebChat Configuration Script */}
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//                 window.botpressWebChat = window.botpressWebChat || {};
//                 window.botpressWebChat.init({
//                   botId: '803e2180-8d98-4342-b132-e8af0a8b4e02',
//                   clientId: '9b547e5d-928b-470f-b81b-3df23ab77946',
//                   hostUrl: 'https://cdn.botpress.cloud/webchat/v2',
//                   messagingUrl: 'https://messaging.botpress.cloud',
//                   botName: 'ChatBot',
//                   avatarUrl: 'https://files.bpcontent.cloud/2025/05/13/18/20250513181109-5KRV7UBH.png',
//                   theme: {
//                     color: '#5eb1ef',
//                     variant: 'soft',
//                     mode: 'light',
//                     fontFamily: 'inter',
//                     radius: 1
//                   }
//                 });

//                 window.botpressWebChat.on('webchat:ready', function () {
//                   window.botpressWebChat.open();
//                 });
//               `,
//             }}
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
