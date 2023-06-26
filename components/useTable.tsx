import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableCell, TablePagination, TableSortLabel } from '@mui/material'


export default function useTable(records: string | any[], headCells: any[], filterFn: { fn: any; }) {


    const pages = [5, 10, 25]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()

    const TblContainer = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        <Table className='asset-table'>
            {props.children}
        </Table>
    )

    const TblHead = () => {


        return (<TableHead >
            <TableRow>
                {
                    headCells.map(headCell => (
                        <TableCell
                            sx = {{fontWeight: '600',
                               padding: '10px',
                                backgroundColor: '#f2fefe',}}
                            key={headCell.id}
                                   sortDirection={orderBy === headCell.id ? order : false}>
                            {headCell.label
                            }
                        </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }

    const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0);
    }

    // @ts-ignore
    const TblPagination = () => (<TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={records.length}

    />)

    function stableSort(array: any[], comparator: { (a: any, b: any): number; (arg0: any, arg1: any): any; }) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order: string | undefined, orderBy: undefined) {
        return order === 'desc'
            ? (a: any, b: any) => descendingComparator(a, b, orderBy)
            : (a: any, b: any) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a: { [x: string]: number; }, b: { [x: string]: number; }, orderBy: string | number | undefined) {
        // @ts-ignore
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        // @ts-ignore
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records), getComparator(order, orderBy))
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}
