import { ButtonLink } from "../../shared/Button/ButtonLink";
import LogoBlack from "../../../assets/images/logo-black.svg";
import Hero1 from "../../../assets/images/hero-1.png";
import Hero2 from "../../../assets/images/hero-2.png";
import styles from "./LandingPage.module.css";
import { Link } from "react-router";
import Menu from "../../shared/Menu/Menu";
import ChatBubble from "./ChatBubble/ChatBubble";

function LandingPage() {
  const pages = [
    { title: "How does it work?", url: "/" },
    { title: "User stories", url: "#stories" },
    { title: "Prices", url: "#prices" },
    { title: "Contact us", url: "#contact" },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <Menu pages={pages} theme={"light"}>
          <Link to="/login">Login</Link>
        </Menu>
        <section className={styles.hero}>
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>When you need the code - Right now</h1>
            <p>
              Do you also keep forgetting your friends door codes? Never
              again{" "}
            </p>
          </div>
          <ButtonLink
            path={"/signup"}
            variant="primary"
            text="Create an account"
          />
        </section>
        <section className={styles.heroContainer}>
          <div className={styles.imgContainer}>
            <div className={styles.chatGroup}>
              <ChatBubble
                color={"green"}
                text={"Oh shit, forgot the code again 🤬"}
              />
              <ChatBubble
                color={"green"}
                text={"Should be an app for this..."}
              />
            </div>
            <img src={Hero1} alt="Man asking friend for door code" />
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.chatGroup}>
              <ChatBubble color={"yellow"} text={"I’m here now"} />
              <ChatBubble color={"yellow"} text={"what’s the code again 😣"} />
            </div>
            <img src={Hero2} alt="Woman asking friend for door code" />
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
