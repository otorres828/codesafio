import { useEffect} from 'react';
import { io } from 'socket.io-client';
import { useSnackbar } from 'notistack';

const SocketsAlertas = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('connect', () => {
    });

    socket.on('mensaje_alerta', (message) => {
      console.log(message)
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return null;
};

export default SocketsAlertas;
