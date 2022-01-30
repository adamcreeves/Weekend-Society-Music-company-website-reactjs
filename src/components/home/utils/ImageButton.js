import React from "react";

function ImageButton() {
  return (
    <a
      target="_blank"
      href="https://www.theknot.com/marketplace/redirect-2049269"
      rel="noreferrer"
    >
      <div
        style={{
          display: "inline-block",
          fontSize: "10px",
          textAlign: "center",
          margin: "20px",
        }}
      >
        <img
          src="//s3.amazonaws.com/tkpro-assets/bow_2022/section_4_3.png"
          width="90"
          height="90"
          alt="The Knot Best of Weddings - 2022 Pick"
          border="0"
          style={{ margin: 0, display: "block" }}
        />
      </div>
    </a>
  );
}

export default ImageButton;
