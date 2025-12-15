import styles from "./Header.module.css"

function Header() {
    return (
      <header className={styles.Header}>
        <h1 className={styles.Fi}>Белоусова Крситина и Журиленко Илья</h1>
        <p className={styles.Tayler}>Тайлер Дернёр</p>
        <nav className={styles.Men}>
          <ul className={styles.Menu}>
            <li>Пицца</li>
            <li>Бургер</li>
            <li>Роллы</li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;