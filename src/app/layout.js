import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LenisWrap from "@/components/layout/lenis";

const clashCrotesk = localFont({
  src: "./font/ClashGrotesk.ttf",
  variable: "--font-clash",
  weight: "100 900",
});
const satoshi = localFont({
  src: "./font/Satoshi.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
});

export const metadata = {
  title: "Social Boosts",
  description: "Social Boosts is a social media marketing platform that allows you to boost your social media presence by buying followers, likes, and views.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LenisWrap>
        <body
          className={`${clashCrotesk.variable} ${satoshi.className} antialiased dark:!bg-[#000000]`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </LenisWrap>
    </html>
  );
}
