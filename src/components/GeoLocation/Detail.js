'use client'

import { useState, useEffect } from 'react'
import { fetchData } from '@/services/apiService'
import { Box, Container, Paper, Typography } from '@mui/material'
import ErrorAlert from '@/components/ErrorAlert'
import { MapsComponent } from '@/components/Maps/MapsComponent'
import DetailFieldsComponent from '@/components/GeoLocation/DetailFields'

const GeoLocationDetail = ({ id }) => {
    const [fetchedData, setFetchedData] = useState({})
    const [errors, setErrors] = useState([])
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [loading, setLoading] = useState(false)

    const loadGeoLocationData = async () => {
        setErrors([])
        setLoading(true)
        try {
            const data = await fetchData(`geo-location/${id}`)
            setFetchedData(data)
        } catch (error) {
            console.error('Error fetching data list:', error)
            setErrors([error.response?.data?.message || 'An error occurred'])
            setShowSnackbar(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadGeoLocationData()
    }, [id])

    const handleCloseSnackbar = () => setShowSnackbar(false)

    // Coğrafi konumu almak için latitude ve longitude değerleri
    const latitude = parseFloat(fetchedData?.latitude) || 0
    const longitude = parseFloat(fetchedData?.longitude) || 0
    const markerColor = fetchedData?.marker_color || '#FF0000' // Varsayılan olarak kırmızı

    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Paper elevation={3} style={{ padding: 16 }}>
                    {loading ? (
                        <Typography variant="h6">Loading...</Typography>
                    ) : (
                        <>
                            <Box display="flex" flexDirection="column" mb={3}>
                                <Box
                                    mb={3}
                                    style={{
                                        height: '450px',
                                        marginBottom: '30px',
                                    }}>
                                    <MapsComponent
                                        latitude={latitude}
                                        longitude={longitude}
                                        markerColor={markerColor}
                                    />
                                </Box>
                            </Box>

                            <Box display="flex" flexDirection="column" mb={3}>
                                <DetailFieldsComponent
                                    fetchedData={fetchedData}
                                />
                            </Box>
                        </>
                    )}

                    {/* Snackbar for temporary error notifications */}
                    <ErrorAlert
                        messages={errors}
                        isSnackbar={true}
                        showSnackbar={showSnackbar}
                        onCloseSnackbar={handleCloseSnackbar}
                    />
                </Paper>
            </Box>
        </Container>
    )
}

export default GeoLocationDetail
