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
      <body>{children}</body>
    </html>
  );
}
