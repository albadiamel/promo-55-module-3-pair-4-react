 import 'react';
 import PropTypes from 'prop-types';


 const Preview = (prop) => {
    // Funciones que nos ayudan a renderizar
  const renderPaymentTypeText = () => {
    if (prop.paymentType === "creditCard") {
      return "Tarjeta de crédito";
    } else if (prop.paymentType === "cash") {
      return "Efectivo";
    } else if (prop.paymentType === "cashOnDelivery") {
      return "Contra reembolso";
    }
  };
    return (
             <div className="preview">
          <h2>Tus datos son:</h2>
          <ul>
            <li>Nombre: {name}</li>
            <li>Email: {email}</li>
            <li>Región: {region}</li>
            <li>Método de pago: {renderPaymentTypeText()}</li>
            <li>
              Has aceptado nuestros términos legales:{" "}
              {legalTerms === true ? "Sí" : "No"}
            </li>
          </ul>
        </div>
    )
 }

 export default Preview;

 Preview.propTypes = {name: PropTypes.string, email: PropTypes.string, region: PropTypes.string, renderPaymentTypeText: PropTypes.func, legalTerms: PropTypes.bool, paymentType: PropTypes.any}




 
