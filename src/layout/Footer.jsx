import React from 'react';

const Footer = () => {
  return (
      <footer className="page-footer #616161 #26a69a teal lighten-1">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
          </div>
        </div>
      </footer>
  );
};

export {Footer};