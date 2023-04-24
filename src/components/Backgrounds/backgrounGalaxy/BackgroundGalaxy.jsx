import React, { Component } from "react";

class Galaxy extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://c1.wallpaperflare.com/preview/766/728/849/black-blue-gray-night.jpg)",
          backgroundSize: "cover",
        }}
      ></div>
    );
  }
}
export default Galaxy;
