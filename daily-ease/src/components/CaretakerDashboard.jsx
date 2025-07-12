const PatientCard = ({ patient }) => (
  <div className="card">
    <div className="avatar"></div>
    <h3>{patient.name}</h3>
    <p>{patient.age} years old</p>
    <div className="section-title">🩺 Medical History</div>
    {patient.history.map((tag, index) => (
      <div key={index} className="tag">{tag}</div>
    ))}
    <div className="section-title">📞 Emergency Contact</div>
    <p>{patient.contact.name}</p>
    <p>{patient.contact.phone}</p>
  </div>
);

export default PatientCard;
