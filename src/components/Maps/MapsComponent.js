import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '500px',
}

export const MapsComponent = ({ latitude, longitude, markerColor }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) return <div>Loading...</div>

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: latitude, lng: longitude }}
            zoom={13}>
            <Marker
                position={{ lat: latitude, lng: longitude }}
                icon={{
                    path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,  // Ok şeklinde işaretçi
                    fillColor: markerColor,
                    fillOpacity: 1,
                    scale: 5,  // Boyutlandırma
                    strokeColor: markerColor,
                    strokeWeight: 2,
                }}
            />
        </GoogleMap>
    )
}
