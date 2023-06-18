import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import UseClientProvider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <UseClientProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </UseClientProvider>
      </body>
    </html>
  );
}
