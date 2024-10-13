/*

Usage: <ChordImageFetcher chordName="F#mMaj9" instrument="piano" />

*/
import "./ChordDetails.css";

import React, { useEffect, useState } from "react";

const fetchChordImage = (
  chordName,
  instrument,
  successCallback,
  failCallback
) => {
  const api_url = "https://www.scales-chords.com/api/scapi.1.3.php";

  // Prepare parameters to send, including the new instrument parameter
  const params = `chord=${encodeURIComponent(
    chordName
  )}&instrument=${encodeURIComponent(instrument)}`;

  // AJAX call using the provided logic
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback(xhr.responseText);
      } else {
        if (failCallback) {
          failCallback(xhr);
        }
      }
    }
  };

  xhr.open("POST", api_url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(params);
};

const ChordImageFetcher = ({ chordName, instrument }) => {
  const [chordImage, setChordImage] = useState(null); // To store the image
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error state

  // Fetch chord image when component mounts or chordName or instrument changes
  useEffect(() => {
    setLoading(true); // Start loading
    setError(null); // Reset error state

    fetchChordImage(
      chordName,
      instrument,
      (responseText) => {
        // Parse the response to extract the chord image
        const imageHtml = responseText.split("###RAWR###")[2];
        setChordImage(imageHtml); // Update the state with the chord image HTML
        setLoading(false); // Stop loading
      },
      (xhr) => {
        setError("Failed to fetch chord image");
        setLoading(false); // Stop loading
      }
    );
  }, [chordName, instrument]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {/* Render the fetched chord image */}
      <div
        className="chord-image"
        dangerouslySetInnerHTML={{ __html: chordImage }}
      />
    </>
  );
};

export default ChordImageFetcher;
