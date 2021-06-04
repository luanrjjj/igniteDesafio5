import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import axios from 'axios';


interface Card {
title:string;
description:string;
url:string;
ts:number;
id:string
}


interface ResponseData {
data:Card[];
after:string|null;
}


export default function Home(): JSX.Element {

  async function fetchProjects ({ pageParam = null})  {
    if (pageParam) {
     const data:ResponseData = await axios.get('/api/images', {
       params: {
       after:pageParam
       },
      })

      return data
    }
    const data:ResponseData = await axios.get('/api/images')

    return data
  }


  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images', fetchProjects, {getNextPageParam: (result)=> result.after?result.after:null}
    // TODO AXIOS REQUEST WITH PARAM
    ,
    // TODO GET AND RETURN NEXT PAGE PARAM
  );
  
  const formattedData = useMemo(() => {
    let formattedDataTotal = [];
     const dataPages =  data?.pages
    // TODO FORMAT AND FLAT DATA ARRAY

    
    dataPages?.map(page => {
      formattedDataTotal = [...formattedDataTotal,page.data];
      // eslint-disable-next-line no-useless-return
      return;
    });
  

    return formattedDataTotal;
  }, [data]);

  if(isLoading) {
    return <Loading/>
  }

  if(isError) {
    return <Error/>
  }

  // TODO RENDER ERROR SCREEN
  console.log(5000,data)
  console.log(5001,formattedData)
  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>


    </>
  );
}
