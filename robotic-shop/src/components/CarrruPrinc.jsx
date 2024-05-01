const CarruPrinc = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="./public/img/banner1.jpg"
                  className="d-block w-100"
                  style={{ height: "400px", objectFit: "cover" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./public/img/banner2.jpg"
                  className="d-block w-100"
                  style={{ height: "400px", objectFit: "cover" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./public/img/banner2.jpg"
                  className="d-block w-100"
                  style={{ height: "400px", objectFit: "cover" }}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarruPrinc;
