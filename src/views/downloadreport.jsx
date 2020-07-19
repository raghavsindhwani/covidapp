import React from 'react';
import axios from 'axios';


const DownloadReport = () => {

    return(
        <img className='commonbx__download' src='/images/download.svg' width="20px" title="Download Report" onClick={ downloadFile } alt='download'  />
    );
}

export default DownloadReport;

const downloadFile = () => {

    axios({
        url: "https://covid-compliance-application.herokuapp.com/report",
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response] ));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'DownloadFile.xls');
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
      });
}