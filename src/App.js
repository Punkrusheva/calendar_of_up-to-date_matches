import logo from './logo.svg';
import './App.css';
import './stylesheets/main.css';
import './stylesheets/normalize.css';

function App() {
  function calendar(e) {
    const message = document.getElementById('message');
    message.innerText = "Клик"
};

  document.addEventListener('DOMContentLoaded', function() {
    const pixel = document.getElementById('match');
    pixel.addEventListener('click', calendar);
});

  return (
    <div className="calendar">
      <header className="calendar-header">
        <a id="match"
                      className="calendar-link"
                      href="https://parimatch.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Play</a>
      <ul className="calendar-list"><h1> </h1>
      <li>
          <h2>Monday</h2>
          <span>
              <ul className="calendar-day-list">
                  <li className="calendar-day-list-item">
                  <div>NAVI 21:00 Kyiv</div>
                    <a id="match"
                      className="calendar-link"
                      href="https://parimatch.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Play</a>
                      <span id="message"></span>
                  </li>
                  <li className="calendar-day-list-item">
                      <div>NAVI 21:00 Kyiv</div>
                      <a id="match"
                      className="calendar-link"
                      href="https://parimatch.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >Play</a>
                  <span id="message"></span>
                  </li>
              </ul>
          </span>
          </li>
          <li><h2>Tuesday</h2><span>
    <ul className="calendar-day-list">
        <li className="calendar-day-list-item">NAVI 21:00 Kyiv</li>
        <li className="calendar-day-list-item">NAVI 21:00 Kyiv</li>
        <li className="calendar-day-list-item">NAVI 21:00 Kyiv</li>
        <li className="calendar-day-list-item">NAVI 21:00 Kyiv</li>
        <li className="calendar-day-list-item">NAVI 21:00 Kyiv</li>
    </ul>
</span></li>
<li><h2>Wednesday</h2><span>
    <ul className="calendar-day-list">
        <li className="calendar-day-list-item">NAVI 21:00 Kyiv</li>
        <li className="calendar-day-list-item">NAVI 21:00 Kyiv</li>
        <li className="calendar-day-list-item">NAVI 21:00 Kyiv</li>
        <li className="calendar-day-list-item">NAVI 21:00 Kyiv</li>
        <li className="calendar-day-list-item">NAVI 21:00 Kyiv</li>
    </ul>
</span></li>
<li><h2>Thursday</h2><span>
    <ul className="calendar-day-list">
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
    </ul>
</span></li>
<li><h2>Friday</h2><span>
    <ul className="calendar-day-list">
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
    </ul>
</span></li>
<li><h2>Saturday</h2><span>
    <ul className="calendar-day-list">
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
    </ul>
</span></li>
<li><h2>Sunday</h2><span>
    <ul className="calendar-day-list">
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
        <li>NAVI 21:00 Kyiv</li>
    </ul>
</span></li>
  </ul>        
      </header>
    </div>
  );
}

export default App;
/** <img src={logo} className="App-logo" alt="logo" /> */
