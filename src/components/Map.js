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
                              s.src = `https://maps.google.com/maps/api/js?key=AIzaSyCuJ3z9FybE4MPkU9txZpwYz1h6lIsET6c`;
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