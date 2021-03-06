import { loadLists } from '../../services/api';

import { List } from '../List';
import { Container } from './styles';

const lists = loadLists();

export function Board() {
  return (
    <Container>
      {lists.map(list => (
        <List 
          key={list.title} 
          title={list.title} 
          creatabled={list.creatable}
          cards={list.cards}
        />
      ))}
    </Container>
  );
}