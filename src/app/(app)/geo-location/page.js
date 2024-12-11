import dynamic from 'next/dynamic'
import Link from 'next/link'
import Header from '@/app/(app)/Header'
import Loading from '@/app/(app)/Loading'
import { Box, Container, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const DataList = dynamic(() => import('@/components/DataList/DataList'), {
    ssr: false,
    loading: () => <Loading />,
})

const GeoLocationListPage = () => {
    return (
        <>
            <Header title="Geo Location List" />

            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Box display="flex" flexWrap="wrap" flexDirection="row" gap={2}>
                    <Link href={`/geo-location/create`} passHref>
                        <Button variant="contained" color="primary">
                            <AddIcon />
                        </Button>
                    </Link>
                </Box>
                <DataList
                    pageName={'GeoLocationList'}
                    endpoint={'/geo-location'}
                    enableBasicSearch={false}
                />
            </Container>
        </>
    )
}

export default GeoLocationListPage
