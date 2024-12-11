import FormatDate from '@/lib/FormatDate'
import { Box, Button, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Link from 'next/link'

const DetailFieldsComponent = ({ fetchedData }) => {
    return (
        <>
            <Box display="flex" flexWrap="wrap" gap={2}>
                <Box display="flex" alignItems="center" width="100%" md="48%">
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ width: '20%' }}>
                        ID:
                    </Typography>
                    <Typography variant="body1" sx={{ width: '80%' }}>
                        {fetchedData?.id || ''}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" width="100%" md="48%">
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ width: '20%' }}>
                        Name:
                    </Typography>
                    <Typography variant="body1" sx={{ width: '80%' }}>
                        {fetchedData?.name || ''}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" width="100%" md="48%">
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ width: '20%' }}>
                        Latitude:
                    </Typography>
                    <Typography variant="body1" sx={{ width: '80%' }}>
                        {fetchedData?.latitude || ''}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" width="100%" md="48%">
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ width: '20%' }}>
                        Longitude:
                    </Typography>
                    <Typography variant="body1" sx={{ width: '80%' }}>
                        {fetchedData?.longitude || ''}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" width="100%" md="48%">
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ width: '20%' }}>
                        Marker Color:
                    </Typography>
                    <Typography variant="body1" sx={{ width: '80%' }}>
                        {fetchedData?.marker_color || ''}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" width="100%" md="48%">
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ width: '20%' }}>
                        Created At:
                    </Typography>
                    <Typography variant="body1" sx={{ width: '80%' }}>
                        {(fetchedData?.created_at != null && (
                            <FormatDate dateString={fetchedData?.created_at} />
                        )) ||
                            '---'}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" width="100%" md="48%">
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ width: '20%' }}>
                        Updated At:
                    </Typography>
                    <Typography variant="body1" sx={{ width: '80%' }}>
                        {(fetchedData?.updated_at != null && (
                            <FormatDate dateString={fetchedData?.updated_at} />
                        )) ||
                            '---'}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" width="100%" md="48%">
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ width: '20%' }}>
                        Deleted At:
                    </Typography>
                    <Typography variant="body1" sx={{ width: '80%' }}>
                        {(fetchedData?.deleted_at != null && (
                            <FormatDate dateString={fetchedData?.deleted_at} />
                        )) ||
                            '---'}
                    </Typography>
                </Box>
                <Link href={`/geo-location/edit/${fetchedData?.id}`} passHref>
                    <Button variant="outlined" color="secondary">
                        <EditIcon />
                    </Button>
                </Link>
            </Box>
        </>
    )
}

export default DetailFieldsComponent
