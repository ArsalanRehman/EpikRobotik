// import { useEffect } from "react";
// import {
//   StyledSubname,
//   StyledButton,
//   ButtonGroup,
//   StyledFormArea,
//   colors,
// } from "../components/Styles";
// // import jwt from 'jsonwebtoken'
// import Logout from "./Logout";
// import { useNavigate } from 'react-router-dom'



const Dashboard = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUserData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://127.0.0.1:5050/api/v1/users/getAllUsers');
      if (!response.success) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((userData) => {
        return {
          id: userData._id,
          name: userData.name,
          role: userData.role,
          email: userData.email,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);
  
  return (


      <div>
{/* //         <ButtonGroup>
//           <StyledButton onClick={Logout} >LOGOUT</StyledButton>
//           <StyledButton to="/passwordreset">PASSWORD RESET</StyledButton>
//         </ButtonGroup> */}
    </div>
  );
};
export default Dashboard;
