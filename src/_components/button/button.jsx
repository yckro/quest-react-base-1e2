import React from "react";




const Button = ({ label = 'Baixar CV' }) => {
    const sayHello = () => {
        alert(`A label desse botão é ${label}`);
    };
    return (
        <button onClick={sayHello}>{label}</button>
    );
};

export default Button;