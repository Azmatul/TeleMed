import React from "react";
import { QRCode } from 'qrcode.react'; // Correct import
import { jsPDF } from "jspdf"; // jsPDF package

// Define type for prescription
type Prescription = {
  id: string;
  title: string;
  doctorName: string;
  doctorProfileLink: string;
  hashId: string;
  issueDate: string;
};

export const PrescriptionMenu = () => {
  const prescriptions: Prescription[] = [
    {
      id: "1",
      title: "Prescription for Fever",
      doctorName: "Dr. John Doe",
      doctorProfileLink: "/doctors/john-doe",
      hashId: "0xabc123def456",
      issueDate: "Mon 22 Dec 2024",
    },
    {
      id: "2",
      title: "Prescription for Back Pain",
      doctorName: "Dr. Jane Smith",
      doctorProfileLink: "/doctors/jane-smith",
      hashId: "0xghi789jkl012",
      issueDate: "Wed 24 Dec 2024",
    },
  ];

  const generatePDF = (prescription: Prescription) => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text("Prescription for: " + prescription.title, 10, 20);

    // Doctor's Name
    doc.setFontSize(12);
    doc.text("Issued by: " + prescription.doctorName, 10, 30);

    // Doctor Profile Link
    doc.text("Doctor Profile: " + prescription.doctorProfileLink, 10, 40);

    // Unique Hash ID
    doc.text("Hash ID: " + prescription.hashId, 10, 50);

    // Issue Date
    doc.text("Issue Date: " + prescription.issueDate, 10, 60);

    // QR Code - Convert it to Image and add to PDF
    const qrCodeCanvas = document.createElement("canvas");
    const qrCode = new QRCode(qrCodeCanvas, {
      text: prescription.hashId,
      width: 100,
      height: 100,
    });
    const qrCodeImage = qrCodeCanvas.toDataURL("image/png");

    doc.addImage(qrCodeImage, "PNG", 10, 70, 30, 30);

    doc.save("Prescription_" + prescription.id + ".pdf");
  };

  return (
    <div className="container text-center mt-4">
      <h3 className="mb-4">Your Prescriptions</h3>
      <div className="row">
        {prescriptions.map((prescription) => (
          <div className="col-md-4 mb-4" key={prescription.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa-solid fa-file-prescription"></i> {prescription.title}
                </h5>
                <p>
                  <i className="fa-solid fa-user-md"></i>{" "}
                  <a
                    href={prescription.doctorProfileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {prescription.doctorName}
                  </a>
                </p>
                <p>
                  <i className="fa-solid fa-hashtag"></i> Hash ID: {prescription.hashId}
                </p>

                <div className="text-center my-3">
                  <QRCode
                    value={prescription.hashId}
                    size={100}
                    level={"H"}
                    includeMargin={true}
                  />
                </div>

                <p>
                  <i className="fa-solid fa-calendar-days"></i> Issue Date:{" "}
                  {prescription.issueDate}
                </p>

                <button
                  className="btn btn-primary mt-3"
                  onClick={() => generatePDF(prescription)}
                >
                  <i className="fa-solid fa-download"></i> Download Prescription
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrescriptionMenu;
