const ParticipantDetails = ({ participant }) => {
    if (!participant) return null;
    return (
        <div className="max-w-sm mx-auto mt-6 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Participant Details</h2>
            <div className="space-y-3">
                <p><strong>Name:</strong> {participant.fullName}</p>
                <p><strong>Age:</strong> {participant.age}</p>
                <p><strong>Gender:</strong> {participant.gender}</p>
                <p><strong>Father's Name:</strong> {participant.fatherName}</p>
                <p><strong>Address:</strong> {participant.address}</p>
                <p><strong>Hometown:</strong> {participant.hometown}</p>
                <p><strong>WhatsApp:</strong> {participant.whatsappNumber}</p>
                <p><strong>Email:</strong> {participant.email}</p>
                <p><strong>School/College:</strong> {participant.schoolOrCollege}</p>
                <p><strong>Competition:</strong> {participant.competition}</p>
                <p><strong>Group:</strong> {participant.group}</p>
                <p><strong>Token:</strong> {participant.tokenNumber}</p>
            </div>
        </div>
    );
};

export default ParticipantDetails;
