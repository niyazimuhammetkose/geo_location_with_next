import dynamic from 'next/dynamic'
import Header from '@/app/(app)/Header'
import Loading from '@/app/(app)/Loading'
import { Container } from '@mui/material'

const GeoLocationCreate = dynamic(
    () => import('@/components/GeoLocation/Create'),
    {
        ssr: false,
        loading: () => <Loading />,
    },
)

const GeoLocationCreatePage = () => {
    return (
        <>
            <Header title="Geo Location Create" />
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <GeoLocationCreate />
            </Container>
        </>
    )
}

export default GeoLocationCreatePage
