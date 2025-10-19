import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AIAssistant() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedReports, setUploadedReports] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Simulate AI analysis
      analyzeReport(file);
    }
  };

  const analyzeReport = (file) => {
    setIsLoading(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const mockAnalysis = {
        fileName: file.name,
        uploadDate: new Date().toLocaleDateString('en-IN'),
        uploadTime: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        overallHealth: "Good",
        riskLevel: "Low",
        summary: "The report indicates generally good health with minor areas for improvement.",
        detailedAnalysis: [
          {
            parameter: "Blood Test Results",
            status: "Normal",
            details: "All parameters within normal range. Cholesterol levels are optimal.",
            recommendation: "Maintain current diet and exercise routine."
          },
          {
            parameter: "ECG Report",
            status: "Normal",
            details: "Regular sinus rhythm observed. No abnormalities detected.",
            recommendation: "Continue regular cardiac monitoring."
          },
          {
            parameter: "Vitamin Levels",
            status: "Attention Needed",
            details: "Vitamin D levels are slightly below optimal range.",
            recommendation: "Consider Vitamin D supplements and increased sunlight exposure."
          },
          {
            parameter: "Liver Function",
            status: "Excellent",
            details: "All liver enzymes within optimal range.",
            recommendation: "Maintain healthy lifestyle habits."
          }
        ],
        recommendations: [
          "Increase Vitamin D intake through supplements or diet",
          "Continue regular exercise routine",
          "Schedule follow-up in 6 months",
          "Maintain hydration and balanced diet"
        ],
        warningSigns: [
          "Monitor Vitamin D levels regularly",
          "Watch for fatigue symptoms"
        ]
      };

      setAnalysis(mockAnalysis);
      setUploadedReports(prev => [mockAnalysis, ...prev]);
      setIsLoading(false);
    }, 3000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Excellent": return "text-green-600 bg-green-50";
      case "Normal": return "text-blue-600 bg-blue-50";
      case "Attention Needed": return "text-yellow-600 bg-yellow-50";
      case "Critical": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case "Low": return "text-green-600 bg-green-100";
      case "Medium": return "text-yellow-600 bg-yellow-100";
      case "High": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-20 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              🤖 AI Health Assistant
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Upload your medical reports and get instant AI-powered analysis, insights, and personalized health recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Upload & History */}
            <div className="lg:col-span-1 space-y-6">
              {/* Upload Section */}
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <span>📤</span>
                  <span>Upload Report</span>
                </h2>
                
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors duration-300">
                  <div className="text-4xl mb-3">📄</div>
                  <p className="text-gray-600 mb-3">Upload your medical report</p>
                  <p className="text-sm text-gray-500 mb-4">Supports: PDF, JPG, PNG</p>
                  
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                      Choose File
                    </div>
                  </label>
                  
                  {selectedFile && (
                    <p className="mt-3 text-sm text-gray-600">
                      Selected: <span className="font-semibold">{selectedFile.name}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Upload History */}
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <span>📋</span>
                  <span>Report History</span>
                </h2>
                
                {uploadedReports.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-3">📊</div>
                    <p className="text-gray-500">No reports analyzed yet</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {uploadedReports.map((report, index) => (
                      <div 
                        key={index}
                        className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                        onClick={() => setAnalysis(report)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-800 truncate">
                            {report.fileName}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRiskColor(report.riskLevel)}`}>
                            {report.riskLevel}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{report.uploadDate} • {report.uploadTime}</p>
                        <p className="text-sm font-medium mt-1">{report.overallHealth}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Analysis Results */}
            <div className="lg:col-span-2">
              {isLoading ? (
                /* Loading State */
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="animate-pulse">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">AI is Analyzing Your Report</h3>
                    <p className="text-gray-600 mb-6">This may take a few moments...</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse w-3/4"></div>
                    </div>
                  </div>
                </div>
              ) : analysis ? (
                /* Analysis Results */
                <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        AI Analysis Report
                      </h2>
                      <p className="text-gray-600">
                        {analysis.uploadDate} • {analysis.uploadTime}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`px-4 py-2 rounded-full font-semibold ${getRiskColor(analysis.riskLevel)}`}>
                        {analysis.riskLevel} Risk
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Overall: {analysis.overallHealth}</p>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <h3 className="font-semibold text-blue-800 mb-2 flex items-center space-x-2">
                      <span>📝</span>
                      <span>Executive Summary</span>
                    </h3>
                    <p className="text-blue-700">{analysis.summary}</p>
                  </div>

                  {/* Detailed Analysis */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                      <span>🔍</span>
                      <span>Detailed Analysis</span>
                    </h3>
                    
                    <div className="space-y-4">
                      {analysis.detailedAnalysis.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-800">{item.parameter}</h4>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(item.status)}`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2">{item.details}</p>
                          <p className="text-sm text-blue-600 font-medium">💡 {item.recommendation}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations & Warnings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Recommendations */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <h3 className="font-semibold text-green-800 mb-3 flex items-center space-x-2">
                        <span>✅</span>
                        <span>Recommendations</span>
                      </h3>
                      <ul className="space-y-2">
                        {analysis.recommendations.map((rec, index) => (
                          <li key={index} className="text-green-700 flex items-start space-x-2">
                            <span>•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Warning Signs */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <h3 className="font-semibold text-yellow-800 mb-3 flex items-center space-x-2">
                        <span>⚠️</span>
                        <span>Monitor These</span>
                      </h3>
                      <ul className="space-y-2">
                        {analysis.warningSigns.map((warning, index) => (
                          <li key={index} className="text-yellow-700 flex items-start space-x-2">
                            <span>•</span>
                            <span>{warning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* AI Disclaimer */}
                  <div className="mt-6 p-3 bg-gray-100 rounded-lg">
                    <p className="text-xs text-gray-600 text-center">
                      🤖 This analysis is powered by AI and should be used for informational purposes only. 
                      Please consult with a healthcare professional for medical advice.
                    </p>
                  </div>
                </div>
              ) : (
                /* Empty State */
                <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">No Report Analyzed</h3>
                  <p className="text-gray-600 mb-6">
                    Upload a medical report to get AI-powered insights and health recommendations.
                  </p>
                  <div className="text-4xl animate-bounce">👇</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}