import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body className="min-h-screen w-screen overflow-x-hidden flex flex-col bg-background-primary-color text-foregroundcolor">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
