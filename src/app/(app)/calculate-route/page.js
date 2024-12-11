import dynamic from 'next/dynamic'
import Header from '@/app/(app)/Header'
import Loading from '@/app/(app)/Loading'
import { Container } from '@mui/material'

const CalculateRoute = dynamic(
    () => import('@/components/CalculateRoute/CalculateRoute'),
    {
        ssr: false,
        loading: () => <Loading />,
    },
)

const CalculateRoutePage = () => {
    return (
        <>
            <Header title="Calculate Route" />
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <CalculateRoute />
            </Container>
        </>
    )
}

export default CalculateRoutePage
