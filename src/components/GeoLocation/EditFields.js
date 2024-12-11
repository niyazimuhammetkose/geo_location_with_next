import { useState } from 'react'
import { postData } from '@/services/apiService'
import Link from 'next/link'
import { Box, Button, FormGroup, TextField } from '@mui/material'

const EditFieldsComponent = ({ fetchedData, id }) => {
    const [formData, setFormData] = useState({
        name: fetchedData?.name || '',
        latitude: fetchedData?.latitude || '',
        longitude: fetchedData?.longitude || '',
        marker_color: fetchedData?.marker_color || '',
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const resp = await postData(`geo-location/update/${fetchedData?.id}`, formData)

            console.log('response from update request:', resp)
        } catch (error) {
            console.error('Error updating data:', error)
        }
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <FormGroup>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    margin="normal"
                />
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
                <TextField
                    id="marker_color"
                    name="marker_color"
                    label="Marker Color"
                    value={formData.marker_color}
                    onChange={handleInputChange}
                    margin="normal"
                />
            </FormGroup>
            <Box display="flex" justifyContent="space-between" mt={2}>
                <Link href={`/geo-location/detail/${fetchedData?.id}`} passHref>
                    <Button variant="outlined" color="secondary">
                        Discard Changes
                    </Button>
                </Link>

                <Button type="submit" variant="contained" color="primary">
                    Save Changes
                </Button>
            </Box>
        </Box>
    )
}

export default EditFieldsComponent
