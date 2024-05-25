import './about-us.scss';
const AboutUs = () => {
  return (
    <>
      <div className="container-fluid about-us-wrapper">
        <div className="row">
          <div className="col-4 left-aside">
            <video autoPlay loop muted id="video">
              <source src="../../CropIntellix.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="col-8 right-aside">
            <div className="title">About Us</div>
            <div className="row">
              <div className="col-6 left-section">
                <div className="title-small">From Humble</div>
                <div className="title-green">Beginnings</div>
                <div className="title-text">
                  <p>
                    We are same as you are, but our exprtise may diverge..!!
                  </p>

                  <p>
                    CropIntellix is an Agtech compnay that has been delivering
                    Agriculture services and solutions to the clients across the
                    globe. We offer an impressive portfolio of professional Crop
                    Mapping and Crop Intelligence services digitally that are
                    completely customizable for your business.
                  </p>

                  <p>Whatever your needs may be, we can make it happen.</p>
                </div>
              </div>
              <div className="col-6 right-section">
                <div className="title-small">Looking Towards</div>
                <div className="title-green">the Future</div>
                <div className="title-text">
                  <p>The best way to predict the future is tocreate it..!!</p>

                  <p>
                    Recognizing the transformative power of technology,
                    cultivating tomorrow embraces the latest advancements in
                    agricultural innovation. We leverage data analytics,
                    artificial intelligence, and the Internet of Things (IoT) to
                    optimize agriculture operations to make data-driven
                    decisions.
                  </p>

                  <p>
                    Whatever it takes, we conitnue to sow the seeds of change.
                  </p>
                </div>
              </div>
            </div>
            <div className="row footer-description">
                <p>
                "We bring all the information you need to <span>
                keep you at your best </span>..!!"
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
