import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
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
 const {isOpen,onOpen,onClose} = useDisclosure()


  const [urlState,setUrlSate] = useState('')
  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  function handleViewImage (url:string):void {
    onOpen();
    setUrlSate (url)

    return
  }

cards.map (card => {
 console.log(100,
 card.title)

}
)
  return (
    <>
     <SimpleGrid columns={[1, 2, 3]} spacing="2.5rem">
      {cards.map(card => {
        <Card data ={card} viewImage = {url => handleViewImage(url)} key = {card.id} />}
      )}
</SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
