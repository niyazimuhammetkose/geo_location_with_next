'use client'

import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    IconButton,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Link from 'next/link'

const LocationListComponent = ({ params }) => {
    return (
        <Box>
            {params?.length > 0 ? (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold">
                                        Order
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold">
                                        Name
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold">
                                        Latitude
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold">
                                        Longitude
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold">
                                        Marker Color
                                    </Typography>
                                </TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {params.map((location, index) => {
                                const {
                                    id,
                                    latitude,
                                    longitude,
                                    marker_color: markerColor,
                                    name,
                                } = location

                                if (!latitude || !longitude) return null

                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Typography variant="body1">
                                                {index + 1 || ''}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1">
                                                {name || 'Starting Point'}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1">
                                                {latitude || ''}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1">
                                                {longitude || ''}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1">
                                                {markerColor || ''}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1">
                                                {id != null ? (
                                                    <>
                                                        <Link
                                                            href={`geo-location/detail/${id}`}>
                                                            <IconButton color="primary">
                                                                <VisibilityIcon />
                                                            </IconButton>
                                                        </Link>
                                                    </>
                                                ) : (
                                                    ''
                                                )}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography variant="body1" align="center" mt={2}>
                    No locations available
                </Typography>
            )}
        </Box>
    )
}

export default LocationListComponent
