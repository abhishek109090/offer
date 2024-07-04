import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './edit.css'; // Import the CSS file
import NavbarMain from './NavbarMain';

const Edit = () => {
  const navigate = useNavigate();
  const [show,setShow]= useState(false)
  const [error,setError]=useState('')
  const [load, setLoad] = useState(false)
  const [formData, setFormData] = useState({
    accountHolder: '',
    accountNumber: '',
    bankBranch: '',
    bankName: '',
    currentAddress: '',
    declarationDate: '',
    degree1: '',
    degree2: '',
    department: '',
    dob: '',
    email: '',
    emergencyAddress: '',
    emergencyEmail: '',
    emergencyName: '',
    emergencyTelephone: '',
    fullName: '',
    gender: '',
    graduationYear1: '',
    graduationYear2: '',
    joiningDate: '',
    maritalStatus: '',
    nationality: '',
    permanentAddress: '',
    positionTitle: '',
    referenceContact1: '',
    referenceContact2: '',
    referenceEmail1: '',
    referenceEmail2: '',
    referenceName1: '',
    referenceName2: '',
    referenceNumber: '',
    referenceRelationship1: '',
    referenceRelationship2: '',
    relationship: '',
    school1: '',
    school2: '',
    supervisor: '',
    telephone: ''
  });

  useEffect(() => {
    const record = JSON.parse(localStorage.getItem('editRecord'));
    if (record) {
      ['dob', 'declarationDate', 'joiningDate'].forEach(dateField => {
        if (record[dateField]) {
          const date = new Date(record[dateField]);
          if (!isNaN(date.getTime())) {
            record[dateField] = date.toISOString().substring(0, 10);
          }
        }
      });
      setFormData(record);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true)

  
    // Assuming the formData contains the id
    const { id, ...updateData } = formData;
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`https://mrv1.indianwelfarefoundation.org.in/updatejoin/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(updateData),
      });
  
      if (response.ok) {
        setTimeout(() => {
            setShow(true);
            setError('Joining letter updated Successfully'); // Set the error message first

            setTimeout(() => {
              setShow(false);
              setLoad(false)
              navigate('/joining'); // Replace '/Offer' with the desired path
            }, 4000);
          }, 10);
      } else {
        setTimeout(() => {
            setLoad(false)
            setShow(true);
            setError('Unknown error in updating the joining letter'); // Set the error message first

            setTimeout(() => {
              setShow(false);
              // Replace '/Offer' with the desired path
            }, 4000);
          }, 10);
      }
    } catch (error) {
      
      alert('An error occurred. Please try again.');
    }
  };

  const formatLabel = (label) => {
    return label.replace(/([a-z])([A-Z])/g, '$1 $2');
  };

  return (
    <div>
      <NavbarMain/>
      <span>
       {show && (
                <div className="thought">
                    {error}
                    <div className="progress-line"></div>
                </div>
            )}
        </span>
      <div className="edit-page">
        <h2>Edit Employee Record</h2>
        <form onSubmit={handleSubmit} className="edit-form">
          {Object.keys(formData).map((key) => (
            key !== 'id' && key !== 'signature' && (
              <div key={key} className="form-group">
                <label>
                  {key === 'dob' ? 'Date of Birth (MM/DD/YYYY)' : key === 'declarationDate' ? 'Declaration Date (MM/DD/YYYY)' : key === 'joiningDate' ? 'Joining Date (MM/DD/YYYY)' : formatLabel(key)}:
                </label>
                {key === 'currentAddress' || key === 'emergencyAddress' || key === 'permanentAddress' ? (
                  <textarea
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    rows="4" // You can adjust the number of rows as needed
                  />
                ) : (
                  <input
                    type={key === 'dob' || key === 'declarationDate' || key === 'joiningDate' ? 'date' : 'text'}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                )}
              </div>
            )
          ))}
          <br></br>
          <button type='sumbit' style={{  height: 'fit-content', padding: '5px', fontWeight: 'bold',width:'120px' }}> {load ? (
      <center>  <div className="loading-spinner"></div></center>
    ) : (
      <p>Update</p>
    )}</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
