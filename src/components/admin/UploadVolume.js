import React, { useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
const UploadVolume = () => {
  const storage = getStorage();
  const storageRef = ref(storage, "volumes", "volume1");
  const [file, setFile] = useState(false);
  const onHandleChange = (e) => {
    console.log("calling");
    setFile(e.target.files[0]);
  };
  const addFile = async (e) => {
    e.preventDefault();
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };
  return (
    <div>
      <input
        type="file"
        onChange={onHandleChange}
        placeholder="Select Input File"
      />
      <button onClick={(e) => addFile(e)}>Submit</button>
    </div>
  );
};

export default UploadVolume;
