import React, { useState } from "react";
import QRCode from "react-qr-code"; // QR code component

function App() {
  const [eid, seteid] = useState(""); // Employee ID input state
  const [qrCode, setQrCode] = useState(""); // Store generated QR code URL

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the employee ID is filled
    if (!eid) {
      alert("Please enter the Employee ID!");
      return;
    }

    // Generate QR code URL using employee ID (eid)
    const qrCodeURL = `https://cloudinsta24-india.firebaseapp.com/employee/${eid}`;

    // Set the generated QR code URL
    setQrCode(qrCodeURL);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-indigo-400 flex items-center justify-center py-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-6">
          Create QR Code
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter Employee ID"
              value={eid}
              onChange={(e) => seteid(e.target.value)}
              className="w-full px-4 py-3 text-lg border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Generate QR Code
          </button>
        </form>

        {qrCode && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
              Scan this QR Code
            </h2>
            <QRCode value={qrCode} size={200} />
            <p className="mt-4 text-sm text-indigo-600">
              Scan the QR code to visit the employee page with ID:{" "}
              <strong>{eid}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
