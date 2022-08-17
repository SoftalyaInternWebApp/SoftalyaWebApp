// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// const render = (status: Status) => {
//     return <h1>{status}</h1>;
// };

// <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
//     <YourComponent />
// </Wrapper>
import React, { Component } from 'react';

class Map extends Component {
          constructor(props) {
                    super(props);
                    this.onScriptLoad = this.onScriptLoad.bind(this)
          }


          componentDidMount() {
                    if (!window.google) {
                              const s = document.createElement('script');
                              s.type = 'text/javascript';
                              s.src = "https://maps.google.com/maps/api/js?key=`process.env.GOOGLE_MAPS_API_KEY`";
                              const x = document.getElementsByTagName('script')[0];
                              x.parentNode.insertBefore(s, x);
                              // Below is important. 

                              s.addEventListener('load', e => {
                                        this.onScriptLoad()
                              })
                    } else {
                              this.onScriptLoad()
                    }
          }

          onScriptLoad() {
                    const map = new window.google.maps.Map(
                              document.getElementById(this.props.id),
                              this.props.options);
                    this.props.onMapLoad(map)
          }

          render() {
                    return (
                              <div style={{ width: 900, height: 500 }} id={this.props.id} />
                    );
          }
}

export default Map