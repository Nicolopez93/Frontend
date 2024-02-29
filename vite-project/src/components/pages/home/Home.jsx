import React, { useEffect , useState} from 'react'
import axios from 'axios'
import Card from '../../common/card/Card'
import styles from '../home/home.module.css'
import Navbar from '../../common/navbar/Navbar'
import Buscador from '../../common/buscador/Buscador'


const Home = () => {
    const [autos, setAutos] = useState([])
    const [dispatchLike, setDispatchLike] = useState(false)
    const [searchResults, setSearchResults] = useState([]);
    const [shuffledAutos, setShuffledAutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/autos")
        .then(res => setAutos(res.data))
        .catch(err => console.log(err))
        
        setDispatchLike(false)

        }, [dispatchLike])

        const handelLike = (auto) => {
         axios.patch(`http://localhost:5000/autos/${auto.id}`,{isLiked: ! auto.isLiked})
         .then(res => setDispatchLike(true))
         .catch(err => console.log(err))
        
        }
        const shuffleArray = (array) => {
            const shuffledArray = array.slice(); // Clonar el arreglo para no modificar el original
            for (let i = shuffledArray.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            }
            return shuffledArray;
          };

          const handleSearch = (searchTerm) => {
            console.log(searchTerm);
            const filteredAutos = autos.filter((auto) =>
              auto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredAutos);
          };

          useEffect(() => {
            const fetchAuto = async () => {
              try {
                const response = await axios.get("http://localhost:5000/autos");
                const data = response.data;
                setAutos(data);
                setShuffledAutos(shuffleArray(data)); // Mezclar el arreglo al cargar los datos
              } catch (error) {
                console.error("Error fetching auto:", error);
              }
            };
          
            fetchAuto();
          }, [dispatchLike]);

  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div>
        <Buscador onSearch={handleSearch}/>
    </div>
    <div className={styles.containerCards}>
      {searchResults.length > 0
          ? searchResults.map((auto) => (
              <Card key={auto.id} auto={auto} handelLike={handelLike} />
            ))
          : shuffledAutos.map((auto) => <Card key={auto.id} auto={auto} handelLike={handelLike}/>)}
    </div>

    </>
  )
}

export default Home
