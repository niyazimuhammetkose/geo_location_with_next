'use client'

import { Box, Container, Paper } from '@mui/material'

const GeoLocationDelete = ({ id }) => {
    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Paper elevation={3} style={{ padding: 16 }}>
                    <Box display="flex" flexDirection="column" mb={3}>
                        Burası GeoLocation Silme Sayfası: {id}
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default GeoLocationDelete
