import React, {Component} from 'react';
class Footer extends Component{
  render() {

    var containerStyle = {
      fontFamily: '"Lato", sans-serif',
      padding: '40px 0',
      borderTop: '1px solid #ddd',
      overflow: 'hidden',
      backgroundColor: 'black',
      color: '#ccc'
    };

    var footerContentStyle = {
      fontSize: '16px',
      fontWeight: '200',
      textAlign: 'left',
      margin: 0
    };

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div style={containerStyle} data-style-footer>

            <div className="col-sm-12">
              <p style={footerContentStyle}>
              <div> Contact Us:</div>
              <div> Amit Kumar(z021753)</div>
              <div> Arun Pandian(z021816)</div>


              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
