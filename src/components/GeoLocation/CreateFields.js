'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { postData } from '@/services/apiService'
import Link from 'next/link'
import { Box, Button, FormGroup, TextField } from '@mui/material'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckIcon from '@mui/icons-material/Check'

const CreateFieldsComponent = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        name: '',
        latitude: '',
        longitude: '',
        marker_color: '',
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const resp = await postData(`geo-location/store`, formData)

            router.push(`/geo-location/detail/${resp.data?.id}`)
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
                <Link href={`/geo-location/`} passHref>
                    <Button variant="outlined" color="primary">
                        <SkipPreviousIcon />
                    </Button>
                </Link>

                <Link href={`/geo-location/`} passHref>
                    <Button variant="outlined" color="error">
                        <CancelIcon />
                    </Button>
                </Link>

                <Button type="submit" variant="outlined" color="success">
                    <CheckIcon />
                </Button>
            </Box>
        </Box>
    )
}

export default CreateFieldsComponent
