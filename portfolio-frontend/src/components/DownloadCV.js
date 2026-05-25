import React from "react";

export default function DownloadCV() {

  const handleDownload = () => {
    fetch("http://127.0.0.1:8000/download-cv")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "nour-benkhairia-cv.pdf";  // correct attribute
        a.click();
      })
      .catch((error) => console.error("Error downloading the file:", error));
  };

  return (
    <button 
      onClick={handleDownload}
      style={{ padding: "10px 20px", marginTop: "20px" }}
    >
      Download CV
    </button>
  );
}
