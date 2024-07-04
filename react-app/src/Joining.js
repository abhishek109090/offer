import React, { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';
import './pdf.css'; // Import your CSS file here
import NavbarMain from './NavbarMain';
import { useNavigate } from 'react-router-dom';
const OfferLetter = React.forwardRef(({ formData = {} }, ref) => {
    const {

        declarationDate='',
        dob = '',



        joiningDate = ''
    } = formData;
    const positionReferenceMap = {
        'BPO voice': 'BPV/BPVA',
        'BPO non voice': 'BPN/BPNA',
        'Customer support executive CSR': 'CSE/CSRA',
        'Jr. Software engineer': 'JRSE/JRSEA',
        'Jr. Software test engineer': 'JRSTE/JRSTEA',
        'Hr executive': 'HRE/HREA',
        'Hr Manager': 'HRM/HRMA',
        'General manager': 'GM/GMA',
        'Xml trainer': 'JRXML/JRXMLA',
        'Web designer': 'WD/WDA',
    };

    const getPositionReference = () => {
        console.log(formData.position)

        return positionReferenceMap[formData.position] || '';
    };
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const declarationDate = new Date(dateStr);
        return declarationDate.toISOString().split('T')[0].split('-').reverse().join('-');
    };
    const formatDate1 = (dateStr) => {
        if (!dateStr) return '';
        const dob = new Date(dateStr);
        return dob.toISOString().split('T')[0].split('-').reverse().join('-');
    };
    const formatDate2 = (dateStr) => {
        if (!dateStr) return '';
        const joiningDate = new Date(dateStr);
        return joiningDate.toISOString().split('T')[0].split('-').reverse().join('-');
    };

    return (
        <div ref={ref} className="offer-letter-container" style={{textTransform:'capitalize'}}>
            <div className="offer-letter1">
                <div className="header">
                    <div className="header-left">
                        <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
                    </div>
                    <div className="header-right">
                        <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
                    </div>
                </div>
                <div className="content" >
                    <table >
                        <thead >
                            <tr >
                                <th colSpan="2" style={{ textAlign: 'center' }}>Personal Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td style={{ width: '500px' }}>{formData.fullName}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{formData.gender}</td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>{formatDate(dob)}</td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td>{formData.nationality}</td>
                            </tr>
                            <tr>
                                <td>Marital Status</td>
                                <td>{formData.maritalStatus}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table >
                        <thead >
                            <tr >
                                <th colSpan="2" style={{ textAlign: 'center' }}>Contact Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Permanent
                                    Address</td>
                                <td style={{ width: '500px' }}>{formData.permanentAddress}</td>
                            </tr>
                            <tr>
                                <td>Current Address</td>
                                <td>{formData.currentAddress}</td>
                            </tr>
                            <tr>
                                <td>Telephone Number</td>
                                <td>{formData.telephone}</td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td style={{textTransform:'lowercase'}}>{formData.email}</td>
                            </tr>

                        </tbody>
                    </table>
                    <table >
                        <thead >
                            <tr >
                                <th colSpan="2" style={{ textAlign: 'center' }}>Emergency Contact Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td style={{ width: '500px' }}>{formData.emergencyName}</td>
                            </tr>
                            <tr>
                                <td>Relationship</td>
                                <td>{formData.relationship}</td>
                            </tr>
                            <tr>
                                <td>Telephone Number</td>
                                <td>{formData.emergencyTelephone}</td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td style={{textTransform:'lowercase'}}>{formData.emergencyEmail}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{formData.emergencyAddress}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="offer-letter1">
                <div className="header">
                    <div className="header-left">
                        <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
                    </div>
                    <div className="header-right">
                        <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
                    </div>
                </div>
                <div className="content" >
                    <table >
                        <thead >
                            <tr >
                                <th colSpan="2" style={{ textAlign: 'center' }}>Job Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Position Title</td>
                                <td style={{ width: '500px' }}>{formData.positionTitle}</td>
                            </tr>
                            <tr>
                                <td>Department</td>
                                <td>{formData.department}</td>
                            </tr>
                            <tr>
                                <td>Supervisor/Manager</td>
                                <td>{formData.supervisor}</td>
                            </tr>
                            <tr>
                                <td>Date of Joining</td>
                                <td>{formatDate(joiningDate)}</td>
                            </tr>

                        </tbody>
                    </table>
                    <table >
                        <thead >
                            <tr >
                                <th colSpan="2" style={{ textAlign: 'center' }}>Education Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>School/University</td>
                                <td style={{ width: '500px' }}>{formData.school1}</td>
                            </tr>
                            <tr>
                                <td>Degree/Diploma</td>
                                <td>{formData.degree1}</td>
                            </tr>
                            <tr>
                                <td>Year of Graduation</td>
                                <td>{formData.graduationYear1}</td>
                            </tr>
                            <tr>
                                <td>School/University</td>
                                <td>{formData.school2}</td>
                            </tr>
                            <tr>
                                <td>Degree/Diploma</td>
                                <td>{formData.degree2}</td>
                            </tr>
                            <tr>
                                <td>Year of Graduation</td>
                                <td>{formData.graduationYear2}</td>
                            </tr>

                        </tbody>
                    </table>
                    <table >
                        <thead >
                            <tr >
                                <th colSpan="2" style={{ textAlign: 'center' }}>Banking Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bank Name</td>
                                <td style={{ width: '500px' }}>{formData.bankName}</td>
                            </tr>
                            <tr>
                                <td>Account Number</td>
                                <td>{formData.accountNumber}</td>
                            </tr>
                            <tr>
                                <td>Account Holder's Name</td>
                                <td>{formData.accountHolder}</td>
                            </tr>
                            <tr>
                                <td>Bank Branch</td>
                                <td>{formData.bankBranch}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="offer-letter1">
                <div className="header">
                    <div className="header-left">
                        <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
                    </div>
                    <div className="header-right">
                        <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
                    </div>
                </div>
                <div className="content" >

                    <table >
                        <thead >
                            <tr >
                                <th colSpan="2" style={{ textAlign: 'center' }}>-References</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td style={{ width: '500px' }}>{formData.referenceName1? formData.referenceName1 : 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Relationship</td>
                                <td>{formData.referenceRelationship1? formData.referenceRelationship1 : 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Contact Number</td>
                                <td>{formData.referenceContact1? formData.referenceContact1 : 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{formData.referenceEmail1? formData.referenceEmail1 : 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{formData.referenceName2? formData.referenceName2 : 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Relationship</td>
                                <td>{formData.referenceRelationship2? formData.referenceRelationship2 : 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Contact Number</td>
                                <td>{formData.referenceContact2? formData.referenceContact2 : 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{formData.referenceEmail2? formData.referenceEmail2 : 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{ fontFamily: 'cursive', marginLeft: '40px' }}>I hereby confirm that all the above information is accurate to the best of my knowledge</p>

                    <table >
                        <thead >
                            <tr >
                                <th colSpan="2" style={{ textAlign: 'center' }}>Declaration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Signature</td>
                                <td style={{ width: '500px' }}><img src={formData.signature}></img></td>
                            </tr>

                            <tr>
                                <td>Date</td>
                                <td>{formatDate(declarationDate)}</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div></div>
    )
});
const EmployeeFormPDF = () => {
    const offerLetterRef = useRef();
    const navigate = useNavigate('')
    const [noReference, setNoReference] = useState(false);
    const [currentRecord, setCurrentRecord] = useState({});
    const [shouldPrint, setShouldPrint] = useState(false);
    const formData ={}
    const {

        declarationDate='',
        dob = '',



        joiningDate = ''
    } = formData;
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(7);
    const [searchQuery, setSearchQuery] = useState('');

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = Array.isArray(tableData) ? tableData.slice(indexOfFirstRecord, indexOfLastRecord) : [];
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {
        const referenceFields = [
            "referenceName1",
            "referenceRelationship1",
            "referenceContact1",
            "referenceEmail1",
            "referenceName2",
            "referenceRelationship2",
            "referenceContact2",
            "referenceEmail2"
        ];
        referenceFields.forEach((field) => {
            const element = document.getElementById(field);
            if (element) {
                element.disabled = noReference;
                element.required = !noReference;
            }
        });
    }, [noReference]);
    const storedToken = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${storedToken}`,
    };
    useEffect(() => {
        if (!storedToken) {
            navigate('/LoginPage');
        }
    })
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
                    // Token is valid, stay on the current page
                } else {
                    localStorage.removeItem('token')
                    // Token is not valid, navigate to login page
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
        const fetchData = async () => {
            try {
                const response = await fetch('https://mrv1.indianwelfarefoundation.org.in/fetchjoin', {
                    headers: headers,
                });
                const data = await response.json();

if (Array.isArray(data)) {
    setTableData(data);
} else if (data && typeof data === 'object') {
    setTableData([data]);
} else {
  
}
            } catch (error) {
               
            }
        };

        fetchData();
    }, []);
    const handlePrint = useReactToPrint({
        content: () => offerLetterRef.current,
        documentTitle: `Offer_Letter_${currentRecord}`
    });
    const printRecord = (record) => {
        setCurrentRecord(record);
        setShouldPrint(true);
    };

    useEffect(() => {
        if (shouldPrint) {
            handlePrint();
            setShouldPrint(false); // Reset the print trigger
        }
    }, [shouldPrint, handlePrint]);
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const declarationDate = new Date(dateStr);
        return declarationDate.toISOString().split('T')[0].split('-').reverse().join('-');
    };
    const filteredData = tableData.filter(record => 
        record.fullName && searchQuery ? record.fullName.toLowerCase().includes(searchQuery.toLowerCase()) : true
      );
      const handleEdit = (record) => {
        localStorage.setItem('editRecord', JSON.stringify(record));
        navigate('/Edit'); // Replace with your actual edit page route
      };
    
      return (
        <div>
          <NavbarMain />
          <center><h2>Joining Letters Received</h2></center>
          <div className="App">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ float: 'right', marginRight: '20px', marginBottom: '10px' }}
            />
            <table className="styled-table" style={{ textTransform: 'capitalize', textAlign: 'center' }}>
              <thead>
                <tr>
                  <th>Declaration Date</th>
                  <th>Position</th>
                  <th>Reference</th>
                  <th>Name</th>
                  <th>D O J</th>
                  <th colSpan={2} style={{textAlign:'center'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(indexOfFirstRecord, indexOfLastRecord).map((item, index) => (
                  <tr key={index}>
                    <td>{formatDate(item.declarationDate)}</td>
                    <td>{item.positionTitle}</td>
                    <td>{item.referenceNumber}</td>
                    <td>{item.fullName}</td>
                    <td>{formatDate(item.joiningDate)}</td>
                    <td>
                      <button onClick={() => printRecord(item)}>Print</button></td>
                      <td><button onClick={() => handleEdit(item)}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              {filteredData.length > recordsPerPage && (
                <ul>
                  {Array(Math.ceil(filteredData.length / recordsPerPage))
                    .fill()
                    .map((_, index) => (
                      <li key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                        {index + 1}
                      </li>
                    ))}
                </ul>
              )}
            </div>
            <div style={{ display: 'none' }}>
              <OfferLetter ref={offerLetterRef} formData={currentRecord} />
            </div>
          </div>
        </div>
      );
    };
    

export default EmployeeFormPDF;
