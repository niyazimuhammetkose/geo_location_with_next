import dynamic from 'next/dynamic'
import Header from '@/app/(app)/Header'
import Loading from '@/app/(app)/Loading'
import { Container } from '@mui/material'

const GeoLocationDetail = dynamic(
    () => import('@/components/GeoLocation/Detail'),
    {
        ssr: false,
        loading: () => <Loading />,
    },
)

const GeoLocationDetailPage = ({ params }) => {
    const { id } = params
    
    return (
        <>
            <Header title="Geo Location Detail" />
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <GeoLocationDetail id={id} />
            </Container>
        </>
    )
}

export default GeoLocationDetailPage
