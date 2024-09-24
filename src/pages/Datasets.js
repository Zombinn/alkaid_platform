import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
  actionButton: {
    marginRight: theme.spacing(1),
  },
}));

function Datasets() {
  const classes = useStyles();
  const [datasets, setDatasets] = useState([
    { id: 1, name: 'MNIST Dataset', size: '11.5 MB', uploadedAt: '2023-04-28', status: '已处理' },
    { id: 2, name: 'IMDB Reviews', size: '80.2 MB', uploadedAt: '2023-05-02', status: '处理中' },
    { id: 3, name: 'ImageNet Subset', size: '1.2 GB', uploadedAt: '2023-05-10', status: '未处理' },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentDataset, setCurrentDataset] = useState(null);
  const [newDatasetName, setNewDatasetName] = useState('');

  const handleUpload = () => {
    // 实现数据集上传逻辑
    const newDataset = {
      id: datasets.length + 1,
      name: `New Dataset ${datasets.length + 1}`,
      size: '0 KB',
      uploadedAt: new Date().toISOString().split('T')[0],
      status: '未处理'
    };
    setDatasets([...datasets, newDataset]);
  };

  const handleDelete = (id) => {
    setDatasets(datasets.filter(dataset => dataset.id !== id));
  };

  const handleEdit = (dataset) => {
    setCurrentDataset(dataset);
    setNewDatasetName(dataset.name);
    setOpenDialog(true);
  };

  const handleView = (id) => {
    // 实现查看数据集详情逻辑
    console.log('查看数据集详情', id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentDataset(null);
    setNewDatasetName('');
  };

  const handleSaveEdit = () => {
    setDatasets(datasets.map(dataset => 
      dataset.id === currentDataset.id ? {...dataset, name: newDatasetName} : dataset
    ));
    handleCloseDialog();
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h4" gutterBottom>
          数据集管理
        </Typography>
        <Button variant="contained" color="primary" onClick={handleUpload}>
          上传数据集
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="数据集列表">
          <TableHead>
            <TableRow>
              <TableCell>名称</TableCell>
              <TableCell align="right">大小</TableCell>
              <TableCell align="right">上传时间</TableCell>
              <TableCell align="right">状态</TableCell>
              <TableCell align="right">操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datasets.map((dataset) => (
              <TableRow key={dataset.id}>
                <TableCell component="th" scope="row">
                  {dataset.name}
                </TableCell>
                <TableCell align="right">{dataset.size}</TableCell>
                <TableCell align="right">{dataset.uploadedAt}</TableCell>
                <TableCell align="right">{dataset.status}</TableCell>
                <TableCell align="right">
                  <IconButton 
                    aria-label="view" 
                    className={classes.actionButton}
                    onClick={() => handleView(dataset.id)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton 
                    aria-label="edit" 
                    className={classes.actionButton}
                    onClick={() => handleEdit(dataset)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    aria-label="delete" 
                    className={classes.actionButton}
                    onClick={() => handleDelete(dataset.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>编辑数据集</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="数据集名称"
            type="text"
            fullWidth
            value={newDatasetName}
            onChange={(e) => setNewDatasetName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            取消
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            保存
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Datasets;