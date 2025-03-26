
import { ReactNode } from 'react';
import OvalHeader from './3DHeader/OvalHeader';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-india-saffron via-india-white to-india-green">
      <OvalHeader />
      <main className="flex-grow pt-8 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
}
