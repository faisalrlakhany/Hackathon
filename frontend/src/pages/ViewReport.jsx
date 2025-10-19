import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ViewReport() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const savedReports = JSON.parse(localStorage.getItem("reports")) || [];
    setReports(savedReports);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          View Uploaded Reports
        </h1>

        {reports.length === 0 ? (
          <p className="text-center text-gray-600">
            No reports uploaded yet. Please upload one first.
          </p>
        ) : (
          <div className="bg-white shadow-md rounded-2xl p-6 max-w-3xl mx-auto space-y-4">
            {reports.map((rep) => (
              <div
                key={rep.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{rep.type}</h3>
                  <p className="text-sm text-gray-500">
                    Date: {rep.date} | File: {rep.fileName}
                  </p>
                </div>
                <button className="text-blue-600 hover:underline text-sm">
                  View
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
