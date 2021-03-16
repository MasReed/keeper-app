import React from 'react';

function Footer() {

    let currentYear = new Date().getFullYear();

    return <p>Copyright {currentYear}</p>
}

export default Footer
