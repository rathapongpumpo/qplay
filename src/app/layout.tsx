import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickPay TopUp | บริษัท ควิกเพย์ ท็อปอัพ จำกัด",
  description: "ผู้ให้บริการเติมเงินเกมและชำระเงินออนไลน์ รวดเร็ว ปลอดภัย เชื่อถือได้ ตลอด 24 ชั่วโมง Garena Shells, Free Fire, ROV, PUBG Mobile และอื่นๆ",
  keywords: "เติมเกม, เติมเงินเกม, QuickPay, ควิกเพย์, เติม ROV, เติม Free Fire, Garena, Steam Wallet, ภูเก็ต, เติมเงินมือถือ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" data-theme="dark">
      <head>
        {/* FontAwesome CDN for premium icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        {/* Script to prevent flash of light theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
