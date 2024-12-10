import FormatDate from '@/lib/FormatDate'
import CheckIcon from '@mui/icons-material/Check'
// import Box from '@mui/material/Box'

export const ReturnDataGridColumnsForPage = ({ pageName }) => {
    const DataGridColumnsForPage =
        pageName == 'UserList'
            ? [
                  { field: 'id', headerName: 'ID', width: 90 },
                  { field: 'name', headerName: 'Name', width: 150 },
                  { field: 'email', headerName: 'Email', width: 200 },
                  {
                      field: 'is_email_verified',
                      headerName: 'Email Verified',
                      width: 150,
                      renderCell: params =>
                          params.value ? <CheckIcon /> : '---',
                  },
                  {
                      field: 'created_at',
                      headerName: 'Created At',
                      width: 180,
                      renderCell: params => (
                          <FormatDate dateString={params.value} />
                      ),
                  },
                  {
                      field: 'updated_at',
                      headerName: 'Updated At',
                      width: 180,
                      renderCell: params => (
                          <FormatDate dateString={params.value} />
                      ),
                  },
                  {
                      field: 'deleted_at',
                      headerName: 'Deleted At',
                      width: 180,
                      renderCell: params => (
                          <FormatDate dateString={params.value} />
                      ),
                  },
                  {
                      field: 'is_deleted',
                      headerName: 'Deleted',
                      width: 100,
                      renderCell: params =>
                          params.value ? <CheckIcon /> : '---',
                  },
              ]
            : pageName == 'GeoLocationList'
              ? [
                    { field: 'id', headerName: 'ID', width: 90 },
                    { field: 'name', headerName: 'Name', width: 150 },
                    { field: 'latitude', headerName: 'Latitude', width: 100 },
                    { field: 'longitude', headerName: 'Longitude', width: 100 },
                    { field: 'marker_color', headerName: 'Marker Color', width: 100 },
                    {
                        field: 'created_at',
                        headerName: 'Created At',
                        width: 180,
                        renderCell: params => (
                            <FormatDate dateString={params.value} />
                        ),
                    },
                    {
                        field: 'updated_at',
                        headerName: 'Updated At',
                        width: 180,
                        renderCell: params => (
                            <FormatDate dateString={params.value} />
                        ),
                    },
                    {
                        field: 'deleted_at',
                        headerName: 'Deleted At',
                        width: 180,
                        renderCell: params =>
                            params.value ? (
                                <FormatDate dateString={params.value} />
                            ) : (
                                '---'
                            ),
                    },
                ]
              : ''
    return DataGridColumnsForPage
}
