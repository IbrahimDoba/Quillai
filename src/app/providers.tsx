import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Toaster } from '@/components/ui/sonner';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' enableSystem disableTransitionOnChange>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
    </ThemeProvider>
  );
}

export default Providers;
