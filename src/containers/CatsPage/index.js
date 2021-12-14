import { Pagination, Paper, Stack } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatsList from '../../components/CatsList';
import { selectCats, selectCurrentPage, selectPerPage, selectTotalCats } from '../../ducks/cat/selectors';
import { fetchCatsRequest } from '../../ducks/cat/slice';

const CatsPageContainer = () => {
  const dispatch = useDispatch();
  const cats = useSelector(selectCats);
  const totalCats = useSelector(selectTotalCats);
  const perPage = useSelector(selectPerPage);
  const currentPage = useSelector(selectCurrentPage);

  const handlePagination = useCallback(() => (event, value) => {
    dispatch(fetchCatsRequest({
      limit: perPage,
      page: value
    }));
  }, [dispatch, perPage]);

  useEffect(() => {
    dispatch(fetchCatsRequest());
  }, [dispatch]);

  return (<>
    <Stack spacing={2}>
      <Pagination 
        count={parseInt(totalCats/perPage)}
        page={currentPage}
        size='large'
        onChange={handlePagination()}
        sx={{ margin: 'auto' }}
      />
    </Stack>
    <Paper elevation={2} sx={{ marginTop: 2, padding: 5 }}>
      <CatsList cats={cats}/>
    </Paper></>
  );
};

export default React.memo(CatsPageContainer);