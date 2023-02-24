import { useRef, useState } from 'react'

import { ReactComponent as Logo } from './assets/images/logo.svg'
import { ReactComponent as Play } from './assets/images/icon-play.svg'
import { ReactComponent as NewWindow } from './assets/images/icon-new-window.svg'

import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import FontSelector from './components/FontSelector/FontSelector'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [font, setFont] = useState('Lora, Lora-fallback, serif')

  const [showDropdown, setShowDropdown] = useState(false)
  const selectRef = useRef(null)

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleSelect = (value) => {
    setFont(value)
  }

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setShowDropdown(false)
    }
  }

  const options = [
    { id: 1, value: 'Sans Serif', fontFamily: 'Inter, Inter-fallback, sans-serif' },
    { id: 2, value: 'Serif', fontFamily: 'Lora, Lora-fallback, serif' },
    { id: 3, value: 'Mono', fontFamily: 'Inconsolata, Inconsolata-fallback, monospace' },
  ]

  return (
    <div
      className={`app ${theme}`}
      style={{ fontFamily: font }}
      onClick={handleClickOutside}
    >
      <header>
        <Logo className='logo' />
        <div className='ui-controls'>
          <FontSelector
            options={options}
            handleSelect={handleSelect}
            selectRef={selectRef}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            handleClickOutside={handleClickOutside}
          />
          <div className='vertical-divider'></div>
          <ThemeToggle handleToggle={handleToggle} />
        </div>
      </header>
      <input
        className='search'
        type='search'
        aria-label='search'
        placeholder='Search for any word…'
        minLength='1'
        autoFocus
      />
      <main>
        <section className='word'>
          <div>
            <h1>keyboard</h1>
            <p className='phonetics'>/ˈkiːbɔːd/</p>
          </div>

          <button aria-label='play'>
            <Play width={48} height={48} />
          </button>
        </section>
        <section className='definition'>
          <div className='part-of-speech'>
            <h2>noun</h2>
            <div className='horizontal-divider'></div>
          </div>
          <h3>Meaning</h3>
          <ul>
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
          <div className='synonyms'>
            <h3>Synonyms</h3>
            <ul>
              <li>electronic keyboard</li>
            </ul>
          </div>

          <div className='part-of-speech'>
            <h2>verb</h2>
            <div className='horizontal-divider'></div>
          </div>
          <h3>Meaning</h3>
          <ul>
            <li>
              <p>To type on a computer keyboard.</p>
            </li>
          </ul>
          <p>"Keyboarding is the part of this job I hate the most."</p>
        </section>
        <div className='horizontal-divider'></div>
      </main>
      <footer>
        <h4>Source</h4>
        <a
          href='https://en.wiktionary.org/wiki/keyboard'
          target='_blank'
          rel='noreferrer'
        >
          https://en.wiktionary.org/wiki/keyboard <NewWindow />
        </a>
      </footer>
    </div>
  )
}

export default App
