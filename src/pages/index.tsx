/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import axios from 'axios';
import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface ResponseData {
  data: Card[];
  after: string | null;
}

export default function Home(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function fetchProjects({ pageParam = null }): Promise<ResponseData> {
    console.log(150000, pageParam);
    if (pageParam) {
      const { data } = await api.get(`/api/images`, {
        params: {
          after: pageParam,
        },
      });

      return data;
    }
    const data: ResponseData = await api.get('/api/images');

    return data;
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    fetchProjects,
    {
      getNextPageParam: lastPage =>
        lastPage.data.after ? lastPage.data.after : null,
    }
    // TODO AXIOS REQUEST WITH PARAM
    // TODO GET AND RETURN NEXT PAGE PARAM
  );

  console.log(3000, data);
  console.log(3005, hasNextPage);
  console.log(3006, isFetchingNextPage);

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    let formattedDataTotal = [];

    data?.pages.map(page => {
      formattedDataTotal = [...formattedDataTotal, page.data];
      // eslint-disable-next-line no-useless-return
      return;
    });

    return formattedDataTotal;
  }, [data]);
  console.log(7000, formattedData);
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  // TODO RENDER ERROR SCREEN
  console.log(5000, data);

  console.log(10000, hasNextPage);
  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>
      {hasNextPage ? (
        <Button mt="3rem" onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
        </Button>
      ) : (
        ''
      )}
    </>
  );
}
