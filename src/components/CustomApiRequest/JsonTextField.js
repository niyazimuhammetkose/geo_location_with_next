'use client'

import { useState } from 'react'
import { TextField } from '@mui/material'

export default function JsonTextField({ params, setParams }) {
    const [tempValue, setTempValue] = useState(JSON.stringify(params, null, 2))

    const handleBlur = () => {
        try {
            setParams(JSON.parse(tempValue || '{}'))
            console.log('JSON:', params)
        } catch (error) {
            console.error('Invalid JSON:', error)
            alert('Please enter a valid JSON format.')
        }
    }

    return (
        <TextField
            label="Parameters (JSON format)"
            variant="outlined"
            value={tempValue} // Local state for temporary editing
            onChange={e => setTempValue(e.target.value)} // Update tempValue on each change
            onBlur={handleBlur} // Parse JSON only on blur
            margin="normal"
            fullWidth
            multiline
            rows={4}
        />
    )
}
