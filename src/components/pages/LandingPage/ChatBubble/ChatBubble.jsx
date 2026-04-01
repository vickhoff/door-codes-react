import styles from "./ChatBubble.module.css"

function ChatBubble({color, text}) {
    return <div className={`${styles.chatBubble} ${color === "yellow" ? styles.yellow : styles.green}`}>{text}</div>
}

export default ChatBubble