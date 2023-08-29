import "@/styles/globals.scss";
import { Inter, Roboto } from "next/font/google";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const bodyStyle = classNames(inter.className, roboto.className);

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyStyle}>{children}</body>
    </html>
  );
}