import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belted out",
  description: "あなたのカラオケライフをもっと楽しく、もっと便利に",
};

export default function Home() {
  return (
    <div className="background-container">
        <div className="overlay"></div>
        <div className="hero">
            <h1>あなたのカラオケライフをもっと楽しく、もっと便利に</h1>
            <button>
                <Link href="/about">詳しくはこちら</Link>
            </button>
        </div>
    </div>
  );
}
