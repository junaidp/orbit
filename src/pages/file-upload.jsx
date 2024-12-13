import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const FileUpload = () => {
  const { loading } = useSelector((state) => state?.common);
  const fileInputRef = React.useRef(null);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const onApiCall = async (file) => {
    if (!loading) {
      const formData = new FormData();
      formData.append("file", file);
      dispatch(setupUploadFile(formData));
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      onApiCall(selectedFile);
    } else {
      toast.error("No file selected.");
    }
  };


  return (
    <div>
      <div className="row my-3">
        <div className="col-lg-12">
          <div className="sub-heading  fw-bold">Supporting Documents</div>
        </div>
      </div>
      <div className="row position-relative">
        <div className="col-lg-12 text-center settings-form">
          <form>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} />
            <p className="mb-0">Click in this area.</p>
          </form>
        </div>
        <p className="my-2">
          {selectedFile?.name ? selectedFile?.name : "Select file"}
        </p>
      </div>
      <div className="row my-3">
        <div className="col-lg-12 text-end">
          <button
            className={`btn btn-labeled btn-primary px-3 mt-3 shadow ${
              loading && "disabled"
            }`}
            onClick={handleFileUpload}
          >
            <span className="btn-label me-2">
              <i className="fa fa-save"></i>
            </span>
            {loading ? "Loading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
