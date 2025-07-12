import { useState } from 'react';

const AddPatientModal = ({ show, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [history, setHistory] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');

  const handleSave = () => {
    if (!name || !age || !emergencyName || !emergencyPhone) {
      alert('Please fill in all required fields.');
      return;
    }

    onSave({
      name,
      age: parseInt(age),
      history: history.split(',').map(h => h.trim()),
      contact: { name: emergencyName, phone: emergencyPhone }
    });

    setName('');
    setAge('');
    setHistory('');
    setEmergencyName('');
    setEmergencyPhone('');
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Patient</h2>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="Age" type="number" />
        <input value={history} onChange={e => setHistory(e.target.value)} placeholder="Medical History (comma separated)" />
        <input value={emergencyName} onChange={e => setEmergencyName(e.target.value)} placeholder="Emergency Contact Name" />
        <input value={emergencyPhone} onChange={e => setEmergencyPhone(e.target.value)} placeholder="Emergency Contact Phone" />
        <div style={{ textAlign: 'right' }}>
          <button onClick={handleSave}>Save</button>
          <button className="modal-close" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddPatientModal;
