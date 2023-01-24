import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import '../../style/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="https://tinyzonetv.to/images/group_2/theme_1/logo.png?v=0.1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Best website to watch movies for free" />

        <title>Tinyzone</title>
      </head>
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
