import './vision-and-mission-section.scss';

const VisionAndMissionSection = () => {
  return (
    <>
      <div className="container-fluid vision-section-wrapper">
        <div className="row">
          <div className="col-4 left-aside"></div>
          <div className="col-8 right-aside">
            <div className="first-section">
              <div className="title-small">WHAT WE ASPIRE TO BE</div>
              <div className="title">OUR VISION</div>
              <div className="title-text">
                Our vision is to revolutionize the agricultural landscape by
                providing comprehensive and cutting-edge solutions that empower
                all stakeholders working diligently to support and uplift
                farmers. We are committed to bridging the gap between
                technological advancements and the agrarian community, creating
                a more sustainable, efficient, and prosperous future for
                everyone involved in agriculture.
              </div>
            </div>

            <div className="second-section">
              <div className="title-small">WHO WE ARE..WHAT WE DO</div>
              <div className="title">OUR MISSION</div>
              <div className="title-text">
                Our mission is to collaborate with agri-stakeholders, including
                corporates, governments, NGOs, cooperatives, institutions, and
                researchers, to develop and deploy solutions that directly
                address the challenges faced by farmers. By combining our deep
                understanding of modern agricultural practices with the latest
                advancements in technology, data analytics, and sustainable
                practices, we aim to create a holistic ecosystem that ensures
                the well-being of farmers while enhancing agricultural
                productivity
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VisionAndMissionSection;
