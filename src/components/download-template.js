import React from "react";
import { MdCloudDownload } from "react-icons/md";

export function DownloadTemplate(props) {
  return (
    <div style={{ width: "100%" }}>
      <a>
        Download template <MdCloudDownload />
      </a>
    </div>
  );
}
