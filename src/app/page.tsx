import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400"],
});

export default function Home() {
  return (
    <main className={`${inter.className} ${poppins.className}`}>
      <div className="font-poppins text-9xl">Hello world!</div>
    </main>
  );
}
