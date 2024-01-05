import React , {useEffect , useState}  from 'react'
import { useParams ,Link } from "react-router-dom"
// import dummy_data from './Data';

const Calldetail = () => {
const { id } = useParams()

const [activities, setActivities] = useState({});
  const apiUrl = `https://cerulean-marlin-wig.cyclic.app/activities/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
   
        <h1>Calldetail: {id}</h1>
        <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
            <div>  
                <div className="card mt-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                    <h5 className="card-title">{activities.via}</h5>
                    <p className="card-text">{activities.created_at}</p>
                    <Link to='/'>Back</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Calldetail

