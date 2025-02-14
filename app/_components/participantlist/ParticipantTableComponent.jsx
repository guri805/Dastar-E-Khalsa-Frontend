import DownloadButton from "../Common/DownloadButton";

const ParticipantTableComponent = ({ participants }) => {
    return (
        <div className="overflow-x-auto">
            {/* Download Button */}
            <div className="flex justify-end mb-2">
                <DownloadButton data={participants} filename="participants.csv" />
            </div>

            {/* Table */}
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Full Name</th>
                        <th className="border border-gray-300 px-4 py-2">Age</th>
                        <th className="border border-gray-300 px-4 py-2">Gender</th>
                        <th className="border border-gray-300 px-4 py-2">Father's Name</th>
                        <th className="border border-gray-300 px-4 py-2">Address</th>
                        <th className="border border-gray-300 px-4 py-2">Hometown</th>
                        <th className="border border-gray-300 px-4 py-2">Whatsapp Number</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">School/College</th>
                        <th className="border border-gray-300 px-4 py-2">Competition</th>
                        <th className="border border-gray-300 px-4 py-2">Group</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.length > 0 ? (
                        participants.map((participant) => (
                            <tr key={participant._id}>
                                <td className="border border-gray-300 px-4 py-2">{participant._id}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.fullName}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.age}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.gender}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.fatherName}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.address}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.hometown}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.whatsappNumber}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.schoolOrCollege}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.competition}</td>
                                <td className="border border-gray-300 px-4 py-2">{participant.group}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="12" className="text-center py-4">No participants found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ParticipantTableComponent;
