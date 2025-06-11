import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/all-venders`);
      const data = await response.json();
      setVendorData(data?.venders || []); // Ensure it’s an array
    } catch (error) {
      alert("Failed to fetch data");
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  return (
    <section className="ChainsSection">
      {vendorData.map((vendor, index) => (
        <div className="vendorsBox" key={index}>
          {vendor.firm?.map((item, idx) => (
            <div key={idx}>
              {item.firmName}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Chains;
