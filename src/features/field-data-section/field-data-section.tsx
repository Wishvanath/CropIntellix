import './field-data-section.scss';
const FieldData = () => {
  return (
    <>
      <div className="container-fluid field-data-wrapper">
        <div className="row">
          <div className="col-4 left-section"></div>
          <div className="col-8 right-section">
            <div className="title-section">
              <div className="title">
                Get the most out of the field data..!!
              </div>
              <div className="mini-title">
                Accurate & Precise Crop Data Collection Tools
              </div>
            </div>
            <div className="title-text">
              <p>
                An end-to-end platform for field data collection using mobile
                applications and field survey & surveyor monitoring live from a
                centralized web dashboard.
              </p>
              <p>
                We bring all the needs of the crop/field survey activities under
                one platform for continuous monitoring and for better decision
                making & cost optimization.
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
export default FieldData;
