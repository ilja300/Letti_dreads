import { useNavigate } from "react-router-dom";

import { useState, useRef, useEffect } from "react";

import styles from "./Header.module.scss";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const menu = useRef();
  const navigate = useNavigate();

  /* const handleClik = (e) => {
    if (menu.current && !menu.current.contains(e.target)) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClik);
    return () => document.removeEventListener("mousedown", handleClik);
  }, []);*/
  return (
    <>
      <div className={styles.header}>
        <div className={styles.nav}>
          <button onClick={() => setIsVisible((prev) => !prev)}>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                fill="#ffffff"
              />
              <path
                d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                fill="#ffffff"
              />
              <path
                d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>

        <div className={styles.logo} onClick={() => navigate("/")}>
          <h1>Letti</h1>
          <img src="/image_no_bg__1_-removebg-preview.png" alt="logo" />
          <h1>Dreads</h1>
        </div>

        <div className={styles.menu}>
          <button>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title />
              <path
                d="M20.56,18.44l-4.67-4.67a7,7,0,1,0-2.12,2.12l4.67,4.67a1.5,1.5,0,0,0,2.12,0A1.49,1.49,0,0,0,20.56,18.44ZM5,10a5,5,0,1,1,5,5A5,5,0,0,1,5,10Z"
                fill="#ffffff"
              />
            </svg>
          </button>
          <button>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title />
              <circle cx="12" cy="8" fill="#ffffff" r="4" />
              <path
                d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z"
                fill="#ffffff"
              />
            </svg>
          </button>
          <button>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g data-name="1" id="_1">
                <path
                  d="M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z"
                  fill="#ffffff"
                />
                <path
                  d="M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z"
                  fill="#ffffff"
                />
                <path
                  d="M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z"
                  fill="#ffffff"
                />
                <path
                  d="M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z"
                  fill="#ffffff"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${styles.dropMenu} ${isVisible ? styles.visible : ""}`}
        ref={menu}
      >
        <ul className={styles.menuList}>
          <li
            onClick={() => {
              setIsVisible(false);
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              setIsVisible(false);
              navigate("/cart");
            }}
          >
            Cart
          </li>
          <li
            onClick={() => {
              setIsVisible(false);
              navigate("/contacts");
            }}
          >
            Contacts
          </li>
          <li
            onClick={() => {
              setIsVisible(false);
              navigate("/made to order");
            }}
          >
            Made to order
          </li>
        </ul>
        <ul className={styles.menuList}>
          <li
            onClick={() => {
              setIsVisible(false);
              navigate("/shop");
            }}
          >
            Shop
          </li>
          <li
            onClick={() => {
              setIsVisible(false);
              navigate("/shop/dreads");
            }}
          >
            Dreads
          </li>
          <li
            onClick={() => {
              setIsVisible(false);
              navigate("/shop/curls");
            }}
          >
            Curls
          </li>
          <li
            onClick={() => {
              setIsVisible(false);
              navigate("/shop/Braids");
            }}
          >
            Braids
          </li>
        </ul>
        <ul className={styles.menuList}>
          <li onClick={() => {}}>Canikalons</li>
        </ul>
      </div>
    </>
  );
}
