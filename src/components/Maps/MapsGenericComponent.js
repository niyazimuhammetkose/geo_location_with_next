'use client'

import React, { useState, useEffect } from 'react'
import {
    GoogleMap,
    Marker,
    useJsApiLoader,
    InfoWindow,
} from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '400px',
}

const MapsGenericComponent = ({ params }) => {
    const [locations, setLocations] = useState([])

    const [activeMarker, setActiveMarker] = useState(null)

    const handleMarkerMouseOver = index => {
        setActiveMarker(index)
    }

    const handleMarkerMouseOut = () => {
        setActiveMarker(null)
    }

    useEffect(() => {
        if (params && Array.isArray(params)) {
            setLocations(params)
        }
    }, [params])

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) return <div>Loading...</div>

    const centerLocation = {
        lat: Number(locations[0]?.latitude) || 0,
        lng: Number(locations[0]?.longitude) || 0,
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={centerLocation}
            zoom={5}>
            {locations?.length > 0 &&
                locations.map((location, index) => {
                    const {
                        latitude,
                        longitude,
                        marker_color: markerColor,
                        name,
                    } = location

                    if (!latitude || !longitude) return null

                    const isActive = activeMarker === index

                    return (
                        <Marker
                            key={`marker-${index}`}
                            position={{
                                lat: Number(latitude),
                                lng: Number(longitude),
                            }}
                            icon={{
                                path: window.google.maps.SymbolPath
                                    .FORWARD_CLOSED_ARROW,
                                fillColor: markerColor,
                                fillOpacity: 1,
                                scale: 5,
                                strokeColor: markerColor,
                                strokeWeight: 2,
                            }}
                            onMouseOver={() => handleMarkerMouseOver(index)}
                            onMouseOut={handleMarkerMouseOut}>
                            {isActive && (
                                <InfoWindow onCloseClick={handleMarkerMouseOut}>
                                    <div>
                                        <strong>Marker Index:</strong>{' '}
                                        {index + 1}
                                        <br />
                                        <strong>Name:</strong>{' '}
                                        {name != null ? name : ''}
                                        <br />
                                        <strong>Latitude:</strong> {latitude}
                                        <br />
                                        <strong>Longitude:</strong> {longitude}
                                    </div>
                                </InfoWindow>
                            )}
                        </Marker>
                    )
                })}
        </GoogleMap>
    )
}

export default MapsGenericComponent
