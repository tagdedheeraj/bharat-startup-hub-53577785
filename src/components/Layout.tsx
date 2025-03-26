
import { ReactNode } from 'react';
import OvalHeader from './3DHeader/OvalHeader';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-brand-900 via-brand-800 to-brand-700">
      <OvalHeader />
      <main className="flex-grow pt-2">{children}</main>
      <Footer />
    </div>
  );
}
