
function About() {

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Nasa Gallery</h1>

        </div>
        <div className="row my-4">
          <div> <h5>Resources</h5></div>
        </div>

        <div className="row">
          <p>We use NASA Open API - <i>APOD</i> to take image  of the day. </p>
          <p>You have option to select date from the recent week.</p>
        </div>

        <div className="row my-4"><h6>APOD</h6></div>
        <div>
          <p>
            One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.

            The full documentation for this API can be found in the APOD API Github repository.
          </p>
        </div>
        <div className="row my-4">
        <h6>HTTP Request</h6>
        </div>
        <p>https://api.nasa.gov/planetary/apod , params : date </p>
        
      </div>
    </>
  );
}

export default About;
