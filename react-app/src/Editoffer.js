import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './edit.css'; // Import the CSS file
import NavbarMain from './NavbarMain';

const Editoffer = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [load, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    position: '',
    ref: '',
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    location: '',
    salary: '0',
    joiningDate: '',
    basicMonthly: '0',
    hraMonthly: '0',
    paMonthly: '0',
    convMonthly: '0',
    medMonthly: '0',
    ptaxMonthly: '0',
    pfMonthly: '0',
    grossMonthly: '0',
    grossAnnual: '0',
    ptaxAnnual: '0',
    pfAnnual: '0',
    netPayMonthly: '0',
    netPayAnnual: '0',
    basicAnnual: '0',
    hraAnnual: '0',
    paAnnual: '0',
    convAnnual: '0',
    medAnnual: '0',
    email: ''
  });

  useEffect(() => {
    const record = JSON.parse(localStorage.getItem('editoffer'));
    if (record) {
      ['date', 'declarationDate', 'joiningDate'].forEach(dateField => {
        if (record[dateField]) {
          const date = new Date(record[dateField]);
          if (!isNaN(date.getTime())) {
            record[dateField] = date.toISOString().substring(0, 10); // Remove time part
          }
        }
      });
      setFormData(record);
    }
  }, []);

  const numberFormatter = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Handle special date fields
    if (name === 'joiningDate' || name === 'date' || name === 'declarationDate') {
      const date = new Date(value);
      updatedValue = date.toISOString().substring(0, 10); // Keep only date part
    }

    setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);

    const { id, ...updateData } = formData;
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`https://mrv1.indianwelfarefoundation.org.in/updateoffer/${id}`, {
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
          setError('Joining letter updated Successfully');

          setTimeout(() => {
            setShow(false);
            setLoad(false);
            navigate('/offer');
          }, 4000);
        }, 10);
      } else {
        setTimeout(() => {
          setLoad(false);
          setShow(true);
          setError('Unknown error in updating the joining letter');

          setTimeout(() => {
            setShow(false);
          }, 4000);
        }, 10);
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };
  const storedToken = localStorage.getItem('token')
  useEffect(() => {
    const checkToken = async () => {


      if (!storedToken) {
        navigate('/LoginPage');
        return;
      }

      try {
        const response = await fetch('https://mrv1.indianwelfarefoundation.org.in/validate-token', {
          method: 'POST',
          headers: {

            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: storedToken }),
        });

        const data = await response.json();

        if (data.isValid) {
          
        } else {
          localStorage.removeItem('token')
          
          navigate('/LoginPage');
        }
      } catch (error) {
        localStorage.removeItem('token')

       
        navigate('/LoginPage');
      }
    };

    checkToken();
  }, [navigate]);
  useEffect(() => {
    if (!storedToken) {
      navigate('/LoginPage');
    }
  })
  const formatLabel = (label) => {
    return label.replace(/([a-z])([A-Z])/g, '$1 $2');
  };

  const calculateAnnualValues = (monthlyValue) => monthlyValue * 12;

  const calculateAllValues = (updatedData) => {
    const { salary } = updatedData;
    const annualSalary = parseFloat(salary.replace(/,/g, '') || 0);
    const monthlySalary = annualSalary / 12;

    const basicPercentage = 0.45;
    const hraPercentage = 0.20;
    const paPercentage = 0.125;
    const convPercentage = 0.165;
    const medPercentage = 0.06;
    const ptaxPercentage = 0.01;
    const pfPercentage = 0.128;

    const basicMonthly = (annualSalary * basicPercentage) / 12;
    const hraMonthly = (annualSalary * hraPercentage) / 12;
    const paMonthly = (annualSalary * paPercentage) / 12;
    const convMonthly = (annualSalary * convPercentage) / 12;
    const medMonthly = (annualSalary * medPercentage) / 12;
    const ptaxMonthly = annualSalary < 500000 ? 200 : (annualSalary * ptaxPercentage) / 12;
    const pfMonthly = (basicMonthly * 12 * pfPercentage) / 12;

    const grossMonthly = basicMonthly + hraMonthly + paMonthly + convMonthly + medMonthly;
    const netMonthly = grossMonthly - ptaxMonthly - pfMonthly;

    return {
      ...updatedData,
      salary: numberFormatter.format(annualSalary),
      basicMonthly: numberFormatter.format(basicMonthly),
      hraMonthly: numberFormatter.format(hraMonthly),
      paMonthly: numberFormatter.format(paMonthly),
      convMonthly: numberFormatter.format(convMonthly),
      medMonthly: numberFormatter.format(medMonthly),
      ptaxMonthly: numberFormatter.format(ptaxMonthly),
      pfMonthly: numberFormatter.format(pfMonthly),
      basicAnnual: numberFormatter.format(calculateAnnualValues(basicMonthly)),
      hraAnnual: numberFormatter.format(calculateAnnualValues(hraMonthly)),
      paAnnual: numberFormatter.format(calculateAnnualValues(paMonthly)),
      convAnnual: numberFormatter.format(calculateAnnualValues(convMonthly)),
      medAnnual: numberFormatter.format(calculateAnnualValues(medMonthly)),
      ptaxAnnual: numberFormatter.format(calculateAnnualValues(ptaxMonthly)),
      pfAnnual: numberFormatter.format(calculateAnnualValues(pfMonthly)),
      grossMonthly: numberFormatter.format(grossMonthly),
      grossAnnual: numberFormatter.format(calculateAnnualValues(grossMonthly)),
      netPayMonthly: numberFormatter.format(netMonthly),
      netPayAnnual: numberFormatter.format(calculateAnnualValues(netMonthly)),
    };
  };

  return (
    <div>
      <NavbarMain />
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
            key !== 'id' && key !== 'signature' && key !== 'joining'&& key !== 'random' && (
              <div key={key} className="form-group">
                <label>
                  {key === 'date' ? 'Date (MM/DD/YYYY)' : key === 'declarationDate' ? 'Declaration Date (MM/DD/YYYY)' : key === 'addressLine1' ? 'Fathers Name': key === 'addressLine2' ? 'Address Line1'  : key === 'joiningDate' ? 'Joining Date (MM/DD/YYYY)' : formatLabel(key)}:
                </label>
                {key === 'currentAddress' || key === 'emergencyAddress' || key === 'addressLine2' ? (
                  <textarea
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    rows="4" // You can adjust the number of rows as needed
                  />
                ) : (
                  <input
                    type={key === 'date' || key === 'declarationDate' || key === 'joiningDate' ? 'date' : 'text'}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    disabled={key !== 'salary' && (key.includes('Monthly') || key.includes('Annual') || key.includes('ref'))}
                  />
                )}
              </div>
            )
          ))}
          <br></br>
          <button type='submit' style={{ height: 'fit-content', padding: '5px', fontWeight: 'bold', width: '120px' }}>
            {load ? (
              <center><div className="loading-spinner"></div></center>
            ) : (
              <p>Update</p>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editoffer;
