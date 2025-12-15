import { useState } from "react";
import styles from "./About.module.css"

function About() {

    const [close, setClose] = useState(false);

    return (
        <>
            {close && <div className={styles.About}>
                <h1 className={styles.Pro}>Мы крутын студенты</h1>
                <p className={styles.Hoch}>Мы оченб хотим покушать</p>
            </div>}
            <button onClick={() => setClose(!close)}>Переключить элемент</button>
        </>
    );
}

export default About;