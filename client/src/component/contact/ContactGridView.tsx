import React from 'react';
import { IoIosContact } from 'react-icons/io';

function ContactGridView({ contact }: any ) {
  return (
    contact.map((item: any) => (
      <div className="d-flex px-2 mb-3 border-bottom" style={{ height: '5rem' }} key={item._id}>
        <div className="">
          <IoIosContact
            style={{ fontSize: '4rem' }}
            className="text-primary pt-2"
          />
        </div>
        <div className="pt-2">
          <h6 className="text-primary lead">{item.firstName} {item.lastName}</h6>
          <p className="">{item.email}</p>
        </div>
    </div>
    ))
  );
}

export default ContactGridView;
