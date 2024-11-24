"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`${styles.header} ${isHidden ? styles.hidden : ""}`}>
            <h1 onClick={() => window.location.href = "/"}>Belted out</h1>
            <div className={styles.hamburger}>☰</div>
        </header>
    );
}