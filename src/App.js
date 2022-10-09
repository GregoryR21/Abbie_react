import logo from './logo.svg';
import './App.css';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <div className="App">
      <h1>Calendly Help Center</h1>
      <h2>Please select a date and time below</h2>
      <div>
        {/* Replace below with your solution */}
        <iframe
          src="https://calendly.com/cx-ops-systems-analyst-assignment/support"
          width={"100%"}
          height={"700px"}
        />
      </div>
      <hr />
      <h3>Comments</h3>
      <div>
        <Comments />
      </div>
    </div>
    </div>
  );
}

export default App;
