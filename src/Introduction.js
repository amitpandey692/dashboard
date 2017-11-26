import React, {Component} from 'react';

class Introduction extends Component {
  render() {

    var containerStyle = {
      fontFamily: '"Lato", sans-serif',
      padding: '0 0 30px 0',
      overflow: 'hidden'
    };

    var introductionHeaderStyle = {
      fontSize: '15px',
      lineHeight: '36px',
      fontWeight: '300',
      margin: '0 0 30px 0',
      textTransform: 'uppercase'
    };

    var buttonStyle = {
      fontWeight: 600,
      textTransform: 'uppercase',
      marginBottom: '50px'
    };

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div style={containerStyle}>

            <div className="col-sm-12">
              <h2 style={introductionHeaderStyle}>
                <strong>This portal is to measure the maturity level.</strong>
              </h2>
              <button className="btn btn-danger btn-lg" style={buttonStyle}>Check Score</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
};

export default Introduction;
