import Image from 'next/image';
import { useEffect } from 'react';
import { api } from '../../services/api';
import { Close, Container, Content } from './styles';

type IModalProps = {
  id: string;
  onClose: () => void;
};

export default function BookModal({ id, onClose }: IModalProps) {
  useEffect(() => {
    api
      .get(`/books/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <Container>
      <Close onClick={onClose}>&times;</Close>

      <Content>
        <h1>{id}</h1>
      </Content>
    </Container>
  );
}
