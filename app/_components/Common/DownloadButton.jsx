
const DownloadButton = ({ data, filename }) => {
    const downloadCSV = () => {
        if (!data || data.length === 0) return;

        const headers = Object.keys(data[0]).join(","); // Get column headers
        const rows = data.map(row => Object.values(row).join(",")); // Convert data to CSV format
        const csvContent = [headers, ...rows].join("\n"); // Join headers and rows

        const blob = new Blob([csvContent], { type: "text/csv" }); // Create CSV file
        const url = URL.createObjectURL(blob); // Generate download URL
        const link = document.createElement("a"); // Create a download link
        link.href = url;
        link.download = filename || "data.csv"; // Set file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button
            onClick={downloadCSV}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            Download CSV
        </button>
    )
}

export default DownloadButton
