import { Inter } from 'next/font/google';
import '../app/globals.css';
import SidebarWrapper from './SidebarWrapper';
import ChatWidgetWrapper from './ChatWidgetWrapper';
import FluentProviderWrapper from './providers/FluentProviderWrapper';
import { ChatIdProvider } from './providers/ChatIdProvider';
import Providers from '../providers';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'SAG Sales',
  description: 'SAG Sales',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>
          <FluentProviderWrapper>
            <ChatIdProvider>
              <SidebarWrapper>
                <ChatWidgetWrapper>
                  {children}
                </ChatWidgetWrapper>
              </SidebarWrapper>
            </ChatIdProvider>
          </FluentProviderWrapper>
        </Providers>
      </body>
    </html>
  );
}