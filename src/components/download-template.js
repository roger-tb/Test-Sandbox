import React from "react";
import { MdCloudDownload } from "react-icons/md";

export function DownloadTemplate(props) {
    console.log(props)
  return (
    <div style={{ width: "100%" }}>
      <a>
        {props.downloadText}  <MdCloudDownload/>
      </a>
    </div>
  );
}
