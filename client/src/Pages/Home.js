import React, { } from 'react';
import { Container } from 'react-bootstrap';
import Form from '../components/Form';
// import api from '../utils/api';

const Home = () => {
  // const [state, setGetAllHomes] = useState('')

  // const getHomes = async () => {
  //   await api.houses.getHouses().then(res => setGetAllHomes(...state, setGetAllHomes))
  // };

//  useEffect(() => {
//     getHomes()
//   }, []);

  // const [formData, setFormData] = useState({
  //   address: '',
  //   price: ''
  // });

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // console.log(formData);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log('submitted');
  // };

  return (
    <Container>
      <Form />
    </Container>
  );
};

export default Home;
