import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UploadReport() {
  const [report, setReport] = useState({
    reportType: "",
    date: "",
    file: null,
  });

  const handleChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setReport({ ...report, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!report.file) {
    alert("Please upload a file!");
    return;
  }

  // Create new report object
  const newReport = {
    id: Date.now(),
    type: report.reportType,
    date: report.date,
    fileName: report.file.name,
  };

  // Save to localStorage
  const existing = JSON.parse(localStorage.getItem("reports")) || [];
  existing.push(newReport);
  localStorage.setItem("reports", JSON.stringify(existing));

  alert(`✅ ${report.reportType} report uploaded successfully!`);
  setReport({ reportType: "", date: "", file: null });
  e.target.reset();
};
    
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Upload Medical Report
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6 max-w-lg mx-auto space-y-4"
        >
          {/* Report Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Report Type
            </label>
            <select
              name="reportType"
              value={report.reportType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
            >
              <option value="">Select report type</option>
              <option value="X-Ray">X-Ray</option>
              <option value="MRI">MRI</option>
              <option value="CT Scan">CT Scan</option>
              <option value="Blood Test">Blood Test</option>
              <option value="Urine Test">Urine Test</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Date of Report
            </label>
            <input
              type="date"
              name="date"
              value={report.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload File
            </label>
            <input
              type="file"
              name="file"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={handleFileChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">
              Accepted formats: PDF, PNG, JPG
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Upload Report
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
