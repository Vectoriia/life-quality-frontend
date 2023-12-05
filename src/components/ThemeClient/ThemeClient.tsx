'use client';

import { theme } from '@/src/constants/theme';
import { ThemeProvider } from '@emotion/react';

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
