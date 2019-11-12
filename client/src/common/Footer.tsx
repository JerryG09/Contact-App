import React from 'react';

const Footer: React.FC<{}> = () => {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex justify-content-center py-3" style={{backgroundColor: '#b2b2b2'}}>
        <h5 className="text-white lead bold">&copy; 2019 <span className="text-danger">C</span>ontacti<span className="text-danger">C</span>o</h5>
      </div>
    </div>
  );
};

export default Footer;
