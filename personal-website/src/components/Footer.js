import React from 'react';

function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Yahmin. All rights reserved.</p>
      </footer>
    );
}

export default Footer;
