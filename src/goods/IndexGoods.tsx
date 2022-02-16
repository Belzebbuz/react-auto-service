import { Box, Button, FormGroup, Grid, MenuItem, Pagination, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlProducts } from "../endpoints";
import Genericlist from "../utils/GenericList";
import { productDTO } from "./product.model";

export default function IndexGoods() {

    const [products, setProducts] = useState<productDTO[]>()
    const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [findWord, setFindWord] = useState('');

    async function findByName() {
        console.log(findWord);
        
        if (findWord.length > 0) {
            loadData(`${urlProducts}/searchByName/${findWord}`)
        } else {
            loadData(urlProducts);
        }
        setPage(1);
    }

    function loadData(url: string) {
        axios.get(url, {
            params: { page, recordsPerPage }
        })
            .then((response: AxiosResponse<productDTO[]>) => {
                const totalAmountOfRecords = parseInt(response.headers['totalamountofrecords'], 10);
                setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
                setProducts(response.data);
            })
    }

    useEffect(() => {
        loadData(urlProducts);
    }, [page, recordsPerPage])


    return (
        <Stack mt={2} spacing={2}>
            <Box display="flex">
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    Товары
                </Typography>
                <Link to='/goods/create'>
                    <Button variant="contained" color="success" sx={{ mr: 2 }} style={{ marginTop: '2px' }}>
                        + Создать
                    </Button>
                </Link>
            </Box>
            <FormGroup row >
                <TextField
                    sx={{width:'93%'}}
                    label="Название товара"
                    variant="outlined"
                    onChange={(e) => setFindWord(e.target.value.toString())}
                />
                <Button variant="contained" disableElevation sx={{marginLeft: 'auto', mr: 2}} onClick={findByName}>
                    Поиск
                </Button>
            </FormGroup>
            <Genericlist list={products}>
                <Paper sx={{ width: '99%' }}>
                    <TableContainer>
                        <Table
                            stickyHeader>
                            <colgroup>
                                <col width="20%" />
                                <col width="10%" />
                                <col width="70%" />
                            </colgroup>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        style={{ maxWidth: 1 }}>
                                    </TableCell>
                                    <TableCell
                                        style={{ minWidth: 3 }}>
                                        Номер
                                    </TableCell>
                                    <TableCell
                                        style={{ minWidth: 3 }}>
                                        Название
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products?.map(product =>
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <Link className="blackLink" to={`/goods/edit/${product.id}`}>
                                                <Button
                                                    style={{ marginRight: 4 }}
                                                    variant="outlined"
                                                    color="inherit"
                                                    size="small">Изменить</Button></Link>
                                            <Button variant="outlined" color="error" size="small">
                                                Удалить
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            {product.id}
                                        </TableCell>
                                        <TableCell>
                                            {product.name}
                                        </TableCell>
                                    </TableRow>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box display='flex' alignItems='center'>
                        <Typography variant="body1" sx={{ ml: 2, mr: 2 }}>Кол-во строк на странице</Typography>
                        <Select sx={{ borderRadius: 4, mt: 1, mb: 1, height: 40, width: 70, textAlign: 'center' }} defaultValue={5} color="primary"
                            onChange={(e) => {
                                setPage(1);
                                setRecordsPerPage(parseInt(e.target.value.toString(), 10));
                            }}>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                        </Select>
                        <Pagination
                            sx={{ marginLeft: 'auto' }}
                            count={totalAmountOfPages}
                            onChange={((e, number) => setPage(number))}
                            siblingCount={1} boundaryCount={1}
                            page={page}
                        />
                    </Box>
                </Paper>
            </Genericlist>
        </Stack>
    )
}


