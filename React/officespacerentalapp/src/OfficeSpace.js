import React from 'react';

const OfficeSpace = () => {
  const offices = [
    { id: 1, name: 'Downtown Tech Hub', rent: 55000, address: '123 Downtown St', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300' },
    { id: 2, name: 'Uptown Business Park', rent: 85000, address: '456 Uptown Blvd', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300' },
    { id: 3, name: 'Suburban Co-working', rent: 45000, address: '789 Suburban Lane', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300' }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Available Office Spaces</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {offices.map(office => (
          <div key={office.id} style={{ border: '1px solid #ccc', borderRadius: '8px', margin: '15px', padding: '15px', width: '300px' }}>
            <img src={office.image} alt={office.name} style={{ width: '100%', borderRadius: '4px' }} />
            <h2>{office.name}</h2>
            <p>{office.address}</p>
            <p style={{ fontWeight: 'bold', fontSize: '18px', color: office.rent < 60000 ? 'red' : 'green' }}>
              Rent: Rs. {office.rent.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeSpace;
