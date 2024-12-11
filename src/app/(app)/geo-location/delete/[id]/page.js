import dynamic from 'next/dynamic'
import Header from '@/app/(app)/Header'
import Loading from '@/app/(app)/Loading'
import { Container } from '@mui/material'

const GeoLocationDelete = dynamic(
    () => import('@/components/GeoLocation/Delete'),
    {
        ssr: false,
        loading: () => <Loading />,
    },
)

const GeoLocationDeletePage = ({ params }) => {
    const { id } = params

    return (
        <>
            <Header title="Geo Location Delete" />
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <GeoLocationDelete id={id} />
            </Container>
        </>
    )
}

export default GeoLocationDeletePage
