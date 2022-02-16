import { Autocomplete, Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { goodsDTO } from "./goods.model";

export default function IndexGoods() {


    const goods: goodsDTO[] = [
        { id: 1, name: 'Колесо', actualPrice: 100.34 },
        { id: 2, name: 'Болт', actualPrice: 200.12 },
        { id: 3, name: 'Гайка 3мм', actualPrice: 400.43 },
        { id: 4, name: 'Гайка 10мм', actualPrice: 500.87 },
    ];

    return (
        <Stack mt={2} spacing={2}>
            <Box display="flex">
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    Товары
                </Typography>
                <Link to='/goods/create'>
                    <Button variant="contained" color="success" sx={{ mr: 2 }} style= {{marginTop: '2px'}}>
                        + Создать
                    </Button>
                </Link>
            </Box>

            <TextField
                style={{ marginRight: '1rem' }}
                label="Название товара"
                variant="outlined" />
            <TableContainer>
                <Table
                    sx={{ minWidth: 500, maxHeight: 200 }}
                    stickyHeader>
                    <colgroup>
                        <col width="20%" />
                        <col width="10%" />
                        <col width="50%" />
                        <col width="20%" />
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
                            <TableCell
                                style={{ minWidth: 3 }}>
                                Цена закупки
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {goods.map(good =>
                            <TableRow key={good.id}>
                                <TableCell>
                                    <Button
                                        style={{ marginRight: 4 }}
                                        variant="outlined"
                                        color="inherit"
                                        size="small"><Link className="blackLink" to={`/goods/edit/${good.id}`}>Изменить</Link></Button>
                                    <Button variant="outlined" color="error" size="small">
                                        Удалить
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    {good.id}
                                </TableCell>
                                <TableCell>
                                    {good.name}
                                </TableCell>
                                <TableCell>
                                    {good.actualPrice}
                                </TableCell>
                            </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}


