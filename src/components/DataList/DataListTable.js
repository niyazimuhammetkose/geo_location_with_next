"use client"

import { useMemo } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { ReturnDataGridColumnsForPage } from '@/lib/ReturnDataGridColumnsForPage'

const DataListTable = ({
    pageName,
    datalist,
    loading,
    rowCount,
    paginationModel,
    setPaginationModel,
}) => {
    const columns = useMemo(
        () => ReturnDataGridColumnsForPage({ pageName }),
        [pageName],
    )

    return (
        <DataGrid
            columns={columns}
            rows={datalist} // Çekilen veriler
            rowCount={rowCount} // Toplam satır sayısı
            loading={loading} // Yüklenme durumu
            paginationModel={paginationModel} // Mevcut sayfa ve boyut bilgileri
            pageSizeOptions={[5, 10, 25, 50, 100]} // Sayfa boyutu seçenekleri
            paginationMode="server" // Sunucu tabanlı pagination
            onPaginationModelChange={setPaginationModel} // Sayfa numarası ve boyut değişimi
            disableSelectionOnClick // Satır seçimini devre dışı bırak
        />
    )
}

export default DataListTable
