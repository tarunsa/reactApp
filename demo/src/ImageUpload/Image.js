import React from "react";
import axios from "axios";
import "./image.css";
export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: null,
      progress: "",
      urls: [],
      uploaded: false,
    };
  }
  fileHandler = (e) => {
    console.log(e.target.files);
    this.setState({ selectedFiles: e.target.files });
  };
  fileUpload = () => {
    let files = [];
    for (let i = 0; i < this.state.selectedFiles.length; i++) {
      let formData = new FormData();
      formData.append("file", this.state.selectedFiles[i]);
      formData.append("upload_preset", "iagnum1o");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/tarunsai-react/image/upload",
          formData,
          {
            onUploadProgress: (progressEvent) => {
              this.setState({
                progress:
                  Math.round(
                    (progressEvent.loaded / progressEvent.total) * 100
                  ) + "%",
              });
            },
          }
        )
        .then((response) => {
          files.push(response.data.url);
          let urls = [...this.state.urls];
          urls.push(response.data.url);
          this.setState({ urls });
          if (files.length === this.state.selectedFiles.length) {
            this.setState({ uploaded: true });
            this.fileInput.value = "";
            setTimeout(() => {
              this.setState({ uploaded: false, progress: "" });
            }, 3000);
          }
        });
    }
  };
  render() {
    return (
      <div>
        <h1 className="heading">Uploading images using cloudinary api</h1>
        <form className="main">
          <input
            className="input1"
            ref={(ref) => (this.fileInput = ref)}
            type="file"
            multiple
            onChange={this.fileHandler}
          />
          <input
            onClick={this.fileUpload}
            className="submit"
            type="button"
            value={
              this.state.progress
                ? "Uploading.." + this.state.progress
                : "Upload"
            }
          />
        </form>
        {this.state.uploaded && (
          <h1 style={{ textAlign: "center", color: "white" }}>
            Uploaded Successfully
          </h1>
        )}
        <div style={{ textAlign: "center" }}>
          {this.state.urls.length > 0 &&
            this.state.urls.map((url) => (
              <img src={url} key={url} alt="Cloudinary pic" />
            ))}
        </div>
      </div>
    );
  }
}
