import './crop-data-section.scss';
const CropData = () => {
  return (
    <>
      <div className="container-fluid crop-data-wrapper">
        <div className="row">
          <div className="col-4 left-section">
            <video autoPlay loop muted id="video">
              <source src="../../CropService.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="col-8 right-section">
            <div className="title-section">
              <div className="title">Get the most out of the Crop data..!!</div>
              <div className="mini-title">
                Accurate & Precise Crop Analytics
              </div>
            </div>
            <div className="title-text">
                <p>
                A complete information on crop acreages, sowing status, harvesting progress and time series analysis derived from different satellite images and sensors
                </p>
                <p>
                We go beyond surface-level analysis and delve into the intricate details of crop growth, monitoring both above and below the ground. By studying this data, we can accurately predict your crop's specific requirements and expected growth patterns.
                </p>
                <p>
                Our advanced technology enables us to swiftly detect any deviations in crop development and identify early-stage field variability, ensuring timely intervention
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CropData;
