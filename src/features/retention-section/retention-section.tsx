import './retention-section.scss';

const RetentionSection = () => {
  return (
    <>
      <div className="container-fluid retention-wrapper">
        <div className="row">
          <div className="col-4 left-section"></div>
          <div className="col-8 right-section">
            <div className="title-section">
              <div className="title">
              Emission to Retention..!!
              </div>
              <div className="mini-title">
              Most accurate and preicede application to capture AWD process..!!
              </div>
            </div>
            <div className="title-text">
              <p>
              An End-to-End digital platform tailored for crop insurance companies with a solution from field data collections & monitoring to crop loss assessment & crop loss percentage at plot level.
              </p>
              <p>
              We integrate crop models, satellite imagery and weather forecast data alongside the Crop Indices like NDVI, EVI, SAVI, CI etc from the optical sensors and RVI, DRVI, RVI4S1 and more from the microwave sensors to derive the accurate crop loss % and create crop-specific analysis.
              </p>
            </div>
            <div className="row key-features-section">
              <div className="col-6 key-features">
                <div className="title">Key Features</div>
                <li>Works in both offline and online mode</li>
                <li>Collects farm plots along with the Goe coordinates</li>
                <li>Captures field photos with Geo locations</li>
                <li>Collects all the information required by the users</li>
                <li>Live syncing to the centralized dashboard</li>
              </div>
              <div className="col-6 key-advantage">
                <div className="title">Key Advantages</div>
                <li>Reduces cost of field survey, saves time & resources</li>
                <li>50% - 60% cheaper than actual field survey cost</li>
                <li>Downloadable in all GIS supportive formats</li>
                <li>Becomes a digital library for the users</li>
                <li>Enables the users to check the accuracy of the data</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RetentionSection;
