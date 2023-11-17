'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Start from "/public/images/start.png";
import Bots from "/public/images/bots.png";
import Emails from "/public/images/emails.png";
import Goals from "/public/images/goals.png";
import Bot from "/public/images/bot.png";
import Main from "/public/images/main.png";
import ShowGoal from "/public/images/show-goal.png";
import ShowMail from "/public/images/show-mail.png";
import Compose from "/public/images/compose-email.png";
import Account from "/public/images/account.png";
import { Inter } from "next/font/google";
import { IoPerson, IoMail, IoHome, IoInformationCircle } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });
let index = 0;
export default function Home() {
  const [image, setImage] = useState<any>(Start);
  const images = [Start, Main, Emails, ShowMail, Compose, Bots,  Bot, Goals, ShowGoal, Account];

  useEffect(() => {
    const timer = setTimeout(() => {
      setImage(images[index]);
      if(index === images.length - 1) {
        index = 0;
      } else {
        console.log(index);
        index++;
      }
    }, 1500);
  }, [image]);

  const handleClick = () => {
    window.location.href = "mailto:bodhwanikanish@gmail.com";
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <nav className={styles.navigation}> */}
          <a href="#home" style={inter.style} className={styles.link}>
            <IoHome />
            Home
          </a>
          <a href="#about" style={inter.style} className={styles.link}>
            <IoInformationCircle />
            About
          </a>
          <a href="#home" style={inter.style} className={styles.app_text}>
            <Image
              // className={styles.mobile}
              src="/images/chip.png"
              alt="main"
              width={40}
              height={40}
              priority
            />
            AI App
          </a>
          <a href='#' onClick={() => handleClick()} style={inter.style} className={styles.link}>
            <IoMail />
            Contact
          </a>
        {/* </nav> */}
        <div>
          <a
            style={inter.style}
            href="https://kanishportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoPerson />
            Creator
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.mobile}
          src={image}
          alt="main"
          width={180}
          height={37}
          priority
        />

        {/* <h1> AI APP </h1> */}
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Emails <span>-&gt;</span>
          </h2>
          <p>Email automation helps schedule emails and automatically write the whole email with the help of AI</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Bots <span>-&gt;</span>
          </h2>
          <p>Bots created independently with specific purposes can assist you from business tasks to meditation.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Goals <span>-&gt;</span>
          </h2>
          <p>Set your goals, and the app will aid you in achieving them by providing reminders.</p>
        </a>

        <a
          href="https://github.com/kanishbodhwani/AI-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github <span>-&gt;</span>
          </h2>
          <p>
            Take a look at the code and gain insights of complex operations, algorithms and more.
          </p>
        </a>
      </div>

      <section id='about' style={inter.style} className={styles.container3}>
          <h3 style={{color: "#fff"}} className={styles.head_text}>About us</h3>
          <p style={{color: "#b8b8b8", textAlign: 'center'}}>
          If you're interested in the app, please get in touch for a collaborative release 🤝
          </p>
          <div className={styles.anonymous_container}>
            <Image className={styles.mobile} src={Main} alt="people" />
            <p className={styles.version_para} style={{color: "#eee"}}>
            Welcome to Synapse, the app designed to make a business person's life easier! It is your all-in-one solution for seamless business operations. We've combined smart AI technology with the practical needs of the business world to help you communicate effortlessly, automate tasks, and analyze performance.
            <br />
            <br />
            With cutting-edge features like email automation, user-friendly bots, and customizable goal tracking, we've crafted an app that understands the unique challenges faced by professionals. 
            <br />
            <br />
            Say goodbye to tedious tasks and hello to increased productivity. Whether you're handling emails, using bots, or setting and achieving goals, Synapse is here to be your go-to tool for success. Stay ahead in the fast-paced business world with Synapse – your partner in innovation and efficiency.
            <br />
            <br />
            Join now to discover how Synapse can revolutionize the way you work and elevate your business to new heights!
            <br />
            <br />
            <button className={styles.joinnow_button}>
              Join Now
            </button>
            </p>
          </div>
        </section>

    </main>
  )
}
