import { ReactComponent as Moon } from './../../assets/images/icon-moon.svg'
import style from './ThemeToggle.module.pcss'

const ThemeToggle = ({ handleToggle }) => {
  return (
    <div className={style['theme-toggle']}>
      <label className={style.switch}>
        <input className={style.checkbox} type='checkbox' aria-label='color theme toggle' onChange={handleToggle} />
        <span className={style.slider}></span>
      </label>
      <Moon />
    </div>
  )
}

export default ThemeToggle