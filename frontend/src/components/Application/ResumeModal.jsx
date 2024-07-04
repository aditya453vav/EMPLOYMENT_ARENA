// import React from "react";

// const ResumeModal = ({ imageUrl, onClose }) => {
//   return (
//     <div className="resume-modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <img src={imageUrl} alt="resume" />
//       </div>
//     </div>
//   );
// };

// export default ResumeModal;

import PropTypes from 'prop-types';

const ResumeModal = ({ imageUrl, onClose }) => {
  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="resume" />
      </div>
    </div>
  );
};

ResumeModal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ResumeModal;