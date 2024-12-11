import dynamic from 'next/dynamic'
import Header from '@/app/(app)/Header'
import Loading from '@/app/(app)/Loading'
import { Container } from '@mui/material'

const GeoLocationEdit = dynamic(
    () => import('@/components/GeoLocation/Edit'),
    {
        ssr: false,
        loading: () => <Loading />,
    },
)

const GeoLocationEditPage = ({ params }) => {
    const { id } = params

    return (
        <>
            <Header title="Geo Location Edit" />
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <GeoLocationEdit id={id} />
            </Container>
        </>
    )
}

export default GeoLocationEditPage
