'use client'

import { useState, useEffect } from 'react'
import fetchPaginatedData from '@/services/apiService'
import { Box, Container, Paper } from '@mui/material'
import DataListTable from '@/components/DataList/DataListTable'
import BasicSearch from '@/components/BasicSearch'
import ErrorAlert from '@/components/ErrorAlert'

const DataList = ({ pageName, endpoint, enableBasicSearch = false }) => {
    const [datalist, setDataList] = useState([])
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const [errors, setErrors] = useState([])
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const [loading, setLoading] = useState(false)
    const [totalRowCount, setTotalRowCount] = useState(0)

    const [paginationModel, setPaginationModel] = useState({
        page: page - 1,
        pageSize: perPage,
    })

    const fetchDataList = async (page, perPage, search = '') => {
        setErrors([])
        setLoading(true)
        try {
            const toFetchedEndpoint =
                enableBasicSearch && search ? `${endpoint}/search` : endpoint

            const params = {
                page,
                perPage,
                ...(search && { search }),
            }

            const { data, meta } = await fetchPaginatedData(
                toFetchedEndpoint,
                page,
                perPage,
                params,
            )

            setDataList(data)
            setTotalRowCount(meta?.total || 0)
        } catch (error) {
            console.error('Error fetching data list:', error)
            setErrors([error.response?.data?.message || 'An error occurred'])
            setShowSnackbar(true)
        } finally {
            setLoading(false)
        }
    }

    // yeni değer eski değerden farklı ise yani perpage kısmı değişmişse ilk sayfaya yönlenmeli.
    useEffect(() => {
        setPage(paginationModel.page + 1)
        setPerPage(paginationModel.pageSize)
        fetchDataList(paginationModel.page + 1, paginationModel.pageSize)
    }, [paginationModel])

    const handleCloseSnackbar = () => setShowSnackbar(false)

    return (
        <Container maxWidth="lg">
            <Box my={4}>
                <Paper elevation={3} style={{ padding: 16 }}>
                    {/* Search Bar */}
                    {enableBasicSearch && (
                        <Box mb={3}>
                            <BasicSearch
                                pageName={pageName}
                                perPage={perPage}
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                fetchDataList={fetchDataList}
                                setPaginationModel={setPaginationModel}
                            />
                        </Box>
                    )}

                    {/* Data Table */}
                    <DataListTable
                        pageName={pageName}
                        datalist={datalist}
                        loading={loading}
                        rowCount={totalRowCount}
                        page={page}
                        setPage={setPage}
                        perPage={perPage}
                        setPerPage={setPerPage}
                        paginationModel={paginationModel}
                        setPaginationModel={setPaginationModel}
                        fetchDataList={fetchDataList}
                    />

                    {/* Snackbar for temporary error notifications */}
                    <ErrorAlert
                        messages={errors}
                        isSnackbar={true}
                        showSnackbar={showSnackbar}
                        onCloseSnackbar={handleCloseSnackbar}
                    />
                </Paper>
            </Box>
        </Container>
    )
}

export default DataList
