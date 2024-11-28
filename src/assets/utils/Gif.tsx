import React from "react";
export default function Gif() {
  return (
    <div
      style={
        {
          //width: "100%",
          //height: 0,
          //paddingBottom: "73%",
          //position: "relative",
        }
      }
    >
      <iframe
        src="https://giphy.com/embed/cYakuLvcUqHdBxtuTD"
        //width="100%"
        //height="100%"
        style={
          {
            // position: "absolute",
          }
        }
        frameBorder="0"
        allowFullScreen
        title="Gif"
      ></iframe>
      {/*<p>
        <a href="https://giphy.com/gifs/fall-turkey-thanksgiving-2020-cYakULvcUqHdBxtuTD"></a>
      </p>*/}
    </div>
  );
}
