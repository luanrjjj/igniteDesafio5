/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  data: any;
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  console.log('cards', cards);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [urlState, setUrlSate] = useState('');
  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  function handleViewImage(url: string): void {
    onOpen();
    setUrlSate(url);
  }

  const cardMap = [];
  const cardMapTotal = [...cardMap, cards];
  const cardMapTotalModified = cardMapTotal[0]
    .map(card => (card.after ? card.data : card))
    .flat();
  console.log('testandoantes', cardMapTotal);
  console.log('testando', cardMapTotalModified);

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="2.5rem">
        {cardMapTotalModified.map(card1 => (
          <Card
            data={card1}
            viewImage={url => handleViewImage(url)}
            key={card1.ts}
          />
        ))}
      </SimpleGrid>

      {isOpen && (
        <ModalViewImage isOpen={isOpen} imgUrl={urlState} onClose={onClose} />
      )}
    </>
  );
}
