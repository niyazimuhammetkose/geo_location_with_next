import FormatDate from '@/lib/FormatDate'
import CheckIcon from '@mui/icons-material/Check'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
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
                    {
                        field: 'marker_color',
                        headerName: 'Marker Color',
                        width: 100,
                    },
                    {
                        field: 'actions',
                        headerName: '',
                        width: 150,
                        sortable: false,
                        renderCell: params => (
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <Link href={`geo-location/detail/${params.id}`}>
                                    <IconButton color="primary">
                                        <VisibilityIcon />
                                    </IconButton>
                                </Link>

                                <Link href={`geo-location/edit/${params.id}`}>
                                    <IconButton color="secondary">
                                        <EditIcon />
                                    </IconButton>
                                </Link>

                                <Link href={`geo-location/delete/${params.id}`}>
                                    <IconButton color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </Link>
                            </div>
                        ),
                    },
                ]
              : ''
    return DataGridColumnsForPage
}
