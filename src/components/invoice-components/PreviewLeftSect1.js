import React from "react";

function PreviewLeftSect1() {
  // Get receipt date
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  var newdate = year + "/" + month + "/" + day;

  return (
    <div className="preview-left-sect-1">
      <div className="preview-sect-1-left">
        <div className="preview-company-detalls">
          <div className="preview-company-image">
            <img src="/assets/bg/support2.png" />
          </div>
          <h2>Flex Arena</h2>
        </div>
        <div className="preview-address">
          <p>Alagomeji, Yaba Lagos</p>
        </div>
        <div className="preview-email">
          <p>oluwaniyiropo11@gmail.com</p>
        </div>
        <div className="preview-phone">
          <p>08181347934</p>
        </div>
      </div>
      <div className="preview-sect-1-right">
        <div className="invoice-date invoice">
          <h4>Receipt Date</h4>
          <p className="pt-1">{newdate} </p>
        </div>
      </div>
    </div>
  );
}

export default PreviewLeftSect1;
