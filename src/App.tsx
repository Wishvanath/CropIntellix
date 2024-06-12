import BodySection from './features/body-section/body-section';
import VisionAndMissionSection from './features/vision-and-mission-section/vision-and-mission-section';
import AboutUs from './features/about-us/about-us';
import CropData from './features/crop-data-section/crop-data-section';
import FieldData from './features/field-data-section/field-data-section';
import PayoutSection from './features/payout-section/payout-section';
import RetentionSection from './features/retention-section/retention-section';
import FooterSection from './features/footer-section/footer-section';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}

      {/* Body secction */}
      <BodySection />

      {/* Vision and Mission section */}
      <VisionAndMissionSection />

      {/* About Us section */}
      <AboutUs />

      {/* Crop data section */}
      <CropData />

      {/* Field data section */}
      <FieldData />

      {/* Payout section */}
      <PayoutSection />

      {/* Retention section */}
      <RetentionSection />

      {/* footer section */}
      <FooterSection />

    </div>
  );
}

export default App;
