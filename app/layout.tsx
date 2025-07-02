import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A professional portfolio website.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white antialiased">{children}</body>
    </html>
  );
}