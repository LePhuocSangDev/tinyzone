import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import '../../style/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />
        <div className="grid grid-cols-12 gap-2">
          <Sidebar />

          <div className="col-span-12 lg:col-span-10 p-4 lg:p-0 bg-[#151515]">{children}</div>
        </div>
      </body>
    </html>
  );
}
