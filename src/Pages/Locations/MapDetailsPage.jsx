import { APIProvider, Map } from '@vis.gl/react-google-maps';
import React, { useState } from 'react'

const MapDetailsPage = () => {
       // shows marker on London by default
       const [markerLocation] = useState({
              lat: 51.509865,
              lng: -0.118092,
       });

       const apiUrl = import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY;

       return (
              <>
                     {
                            /* <div className="map-container">
                                   <Map
                                          style={{ borderRadius: "20px" }}
                                          defaultZoom={13}
                                          defaultCenter={markerLocation}
                                          gestureHandling={"greedy"}
                                          disableDefaultUI
                                   >
                                          <AdvancedMarkerElement position={markerLocation} />
                                   </Map> */
                     }
                     <APIProvider apiKey={apiUrl}>
                            <Map
                                   style={{ width: '100%', height: '40vh', borderRadius: "40px" }}
                                   defaultCenter={markerLocation}
                                   defaultZoom={3}
                                   gestureHandling={'greedy'}
                                   disableDefaultUI={true}
                            />
                     </APIProvider>
              </>
       )
}

export default MapDetailsPage