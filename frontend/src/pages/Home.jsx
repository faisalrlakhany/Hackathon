import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-20">
        {/* Welcome Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Welcome to HealthMate Dashboard
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Manage your health records easily — track your vitals, upload reports,
            and monitor your progress anytime.
          </p>
        </section>

        {/* User Health Summary */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🧍‍♂️ User Health Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-100 p-4 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-blue-700">Heart Rate</h3>
              <p className="text-2xl font-bold text-blue-800">76 bpm</p>
            </div>
            <div className="bg-green-100 p-4 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-green-700">Blood Pressure</h3>
              <p className="text-2xl font-bold text-green-800">120 / 80</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-yellow-700">BMI</h3>
              <p className="text-2xl font-bold text-yellow-800">22.3</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-purple-700">Oxygen Level</h3>
              <p className="text-2xl font-bold text-purple-800">98%</p>
            </div>
          </div>
        </section>

        {/* Recent Reports */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            📄 Recent Reports
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100">
              <div>
                <h3 className="font-semibold text-gray-800">Blood Test Report</h3>
                <p className="text-sm text-gray-500">Uploaded: 18 Oct 2025</p>
              </div>
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100">
              <div>
                <h3 className="font-semibold text-gray-800">X-Ray Chest Scan</h3>
                <p className="text-sm text-gray-500">Uploaded: 12 Oct 2025</p>
              </div>
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100">
              <div>
                <h3 className="font-semibold text-gray-800">Lipid Profile Report</h3>
                <p className="text-sm text-gray-500">Uploaded: 5 Oct 2025</p>
              </div>
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
