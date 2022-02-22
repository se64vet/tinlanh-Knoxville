import React from 'react'
import { Container } from "reactstrap";
import { BsBook } from "react-icons/bs";
import { FaCross } from "react-icons/fa";

import bible from '../../../vendors/assets/bible.jpg'

const HomeBible = () => {
    const center = 'd-flex justify-content-center align-items-center '
    const biIconStyle = {
        fontSize: '2rem',
        color: 'white'
    }
    const crossIconStyle = {
        width: '20px',
        color: 'orange'
    }
    return (
      <Container
        fluid
        className={center}
        style={{
          background: `url('${bible}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className={center + "flex-column gap-2 m-5 p-3"}
          style={{ background: "rgba(33,33,33,0.55)" }}
        >
          <FaCross className="d-block" style={crossIconStyle} />
          <BsBook className="d-block" style={biIconStyle} />
          <h4 className="text-white">Đọc Kinh Thánh</h4>
        </div>
      </Container>
    );
}

export default HomeBible
