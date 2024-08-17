import { useSelector } from "react-redux";
import {} from "../../redux/auth/operations";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
