import { Outlet } from 'react-router-dom';
import FloatingButtons from './FloatingButtons';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#f0fbff_0%,#f8fafc_38%,#f8fafc_100%)] dark:bg-[linear-gradient(180deg,#020617_0%,#020617_35%,#020617_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[540px] bg-grid bg-[size:22px_22px] opacity-70" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
