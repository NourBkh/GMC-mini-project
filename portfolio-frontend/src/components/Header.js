import React from "react";
import "../public/css/style.css"; // keep your template styles
import "../public/css/bootstrap.min.css"; // bootstrap styles

export default function Header() {
  return (
    <div className="container-fluid bg-light my-6 mt-0" id="home">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* Left column with text and buttons */}
          <div className="col-lg-6 py-6 pb-0 pt-lg-0">
            <h3 className="text-primary mb-3">I'm</h3>
            <h1 className="display-3 mb-3">Nour Benkhairia</h1>

            {/* Typed text placeholder */}
            <h2 className="typed-text-output d-inline"></h2>
            <div className="typed-text d-none">
              Software engineer, Devops Engineer, Cloud Computing Engineer
            </div>

            {/* Buttons */}
            <div className="d-flex align-items-center pt-5">
              {/* React CV button */}
              <button
                className="btn btn-primary py-3 px-4 me-5"
                onClick={() => {
                  fetch("http://127.0.0.1:8000/download-cv")
                    .then((res) => res.blob())
                    .then((blob) => {
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "nour-benkhairia-cv.pdf";
                      a.click();
                    })
                    .catch((err) => console.error(err));
                }}
              >
                Download CV
              </button>

              {/* Play video button */}
              <button
                type="button"
                className="btn-play"
                data-bs-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                data-bs-target="#videoModal"
              >
                <span></span>
              </button>
              <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
            </div>
          </div>

          {/* Right column with profile image */}
          <div className="col-lg-6 profile-container">
            <img
              className="profile-img"
              src="/img/nour.png"
              alt="Nour"
              style={{ width: "550px", height: "auto" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
