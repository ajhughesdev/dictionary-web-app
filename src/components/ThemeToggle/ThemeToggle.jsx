import { ReactComponent as Moon } from './../../assets/images/icon-moon.svg'
import styles from './themeToggle.module.css'

const ThemeToggle = ({ handleToggle }) => {
  return (
    <div className={styles['theme-toggle']}>
      <label className={styles.switch}>
        <input className={styles.checkbox} type='checkbox' aria-label='color theme toggle' onChange={handleToggle} />
        <span className={styles.slider}></span>
      </label>
      <Moon />
    </div>
  )
}

export default ThemeToggle