'use client'

import { useState } from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'
import ErrorAlert from '@/components/ErrorAlert'
import { MapsComponent } from '@/components/Maps/MapsComponent'
import CreateFieldsComponent from '@/components/GeoLocation/CreateFields'

const GeoLocationCreate = () => {
    const [errors] = useState([])
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [loading] = useState(false)

    const handleCloseSnackbar = () => setShowSnackbar(false)

    // Coğrafi konumu almak için latitude ve longitude değerleri
    const latitude = 0
    const longitude = 0
    const markerColor = '#FF0000' // Varsayılan olarak kırmızı

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
                                <CreateFieldsComponent />
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

export default GeoLocationCreate
