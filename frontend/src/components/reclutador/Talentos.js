import React, { useContext, useEffect } from 'react';
import talentosContext from '../../context/talentos/talentosContext';
import AlertaContext from '../../context/alertas/alertaContext';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#3B83BD',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const Talentos = () => {

    // Extrar talentos de state inicial
    const talentosContext1 = useContext(talentosContext);
    const { msg, talentos, getTalentos } = talentosContext1;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const classes = useStyles();

    // Obtener talentos cuando carga el componente
    useEffect(() => {
        // si hay un error
        if(msg) {
            mostrarAlerta(msg.msg, msg.categoria);
        }

        getTalentos();
        // eslint-disable-next-line
    }, [msg]);

    // revisar si talentos tiene contenido
    if(talentos.length === 0 ) return <p>Aún no hay talentos</p>;

    return ( 
                <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Industry</StyledTableCell>
                    <StyledTableCell>Job Position</StyledTableCell>
                    <StyledTableCell>Phone</StyledTableCell>
                    <StyledTableCell>Salary</StyledTableCell>
                    <StyledTableCell>Location</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {talentos.map((row) => (
                    <StyledTableRow key={row._id}>
                        <StyledTableCell component="th" scope="row">
                        {row.nombre}
                        </StyledTableCell>
                        <StyledTableCell >{row.industria}</StyledTableCell>
                        <StyledTableCell >{row.posicion}</StyledTableCell>
                        <StyledTableCell>{row.telefono}</StyledTableCell>
                        <StyledTableCell>{row.salario}</StyledTableCell>
                        <StyledTableCell>{row.ubicacion}</StyledTableCell>
                    </StyledTableRow>
                    ))}
                </TableBody>
                </Table>
    );
}
 
export default Talentos;