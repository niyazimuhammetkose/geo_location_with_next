'use client'

import { useState } from 'react'
import { postData } from '@/services/apiService'
import MapsGenericComponent from '@/components/Maps/MapsGenericComponent'
import LocationListComponent from '@/components/CalculateRoute/LocationListComponent'
import {
    Box,
    Button,
    Container,
    FormGroup,
    Paper,
    TextField,
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const CalculateRoute = () => {
    const [locationsData, setLocationsData] = useState([])

    const [formData, setFormData] = useState({
        latitude: '',
        longitude: '',
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const resp = await postData(
                `geo-location/calculate-route`,
                formData,
            )

            const firstLocation = {
                latitude: formData.latitude,
                longitude: formData.longitude,
                marker_color: '#FF0000',
            }

            const newLocations = [firstLocation, ...resp.data]
            if (
                JSON.stringify(newLocations) !== JSON.stringify(locationsData)
            ) {
                setLocationsData(newLocations)
            }
        } catch (error) {
            console.error('Error calculating route:', error)
        }
    }

    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Paper elevation={3} style={{ padding: 16 }}>
                    <Box component="form" onSubmit={handleSubmit}>
                        <FormGroup>
                            <TextField
                                id="latitude"
                                name="latitude"
                                label="Latitude"
                                value={formData.latitude}
                                onChange={handleInputChange}
                                margin="normal"
                            />
                            <TextField
                                id="longitude"
                                name="longitude"
                                label="Longitude"
                                value={formData.longitude}
                                onChange={handleInputChange}
                                margin="normal"
                            />
                        </FormGroup>

                        <Button
                            type="submit"
                            variant="outlined"
                            color="success">
                            <CheckIcon />
                        </Button>
                    </Box>

                    {Array.isArray(locationsData) &&
                        locationsData.length > 0 && (
                            <>
                                <Box>
                                    <MapsGenericComponent
                                        params={locationsData}
                                    />
                                </Box>
                                <Box>
                                    <LocationListComponent
                                        params={locationsData}
                                    />
                                </Box>
                            </>
                        )}
                </Paper>
            </Box>
        </Container>
    )
}

export default CalculateRoute
