import { ReactComponent as Logo } from './assets/images/logo.svg'
import { ReactComponent as Moon } from './assets/images/icon-moon.svg'
import { ReactComponent as Play } from './assets/images/icon-play.svg'
import { ReactComponent as NewWindow } from './assets/images/icon-new-window.svg'

const App = () => {
  return (
    <div className='app'>
      <header>
        <Logo className='logo' />
        <div className='ui-controls'>
          <select>
            <option value='Inter, sans-serif'>Sans Serif</option>
            <option value='Lora, serif'>Serif</option>
            <option value='Inconsolata, monospace'>Monospace</option>
          </select>
          <div className='vertical-divider'></div>
          <div className='theme-toggle'>
            <input type='checkbox' aria-label='color theme toggle' />
            <Moon />
          </div>
        </div>
        <input type='search' aria-label='search' placeholder='Search for any word…' minLength='1' autoFocus />
      </header>
      <main>
        <section className='word'>
          <div>
            <h1>keyboard</h1>
            <p>/ˈkiːbɔːd/</p>
          </div>

          <button aria-label='play'>
            <Play />
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
            <h4>Synonyms</h4>
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
        <h5>Source</h5>
        <a
          href='https://en.wiktionary.org/wiki/keyboard'
          target='_blank'
          rel='noreferrer'
        >https://en.wiktionary.org/wiki/keyboard <NewWindow />
        </a>
      </footer>
    </div>
  )
}

export default App
