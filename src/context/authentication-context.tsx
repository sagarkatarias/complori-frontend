import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Member } from "../types/Api";

const fakeUser = {
  id: 1,
  createdAt: "2021-08-10T13:15:30.000Z",
  updatedAt: "2021-08-10T13:15:30.000Z",
  email: "johnDoe@gmail.com",
  name: "John Doe",
  coachId: 1,
};

export interface AuthenticationContextType {
  readonly loading: boolean;
  readonly user: Member | null;
  readonly logout: () => void;
  readonly reload: () => void;
}

export const AuthenticationContext = createContext<AuthenticationContextType>({
  loading: true,
  user: null,
  logout: () => {},
  reload: () => {},
});

export const AuthenticationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<Member | null>(fakeUser);
  const navigate = useNavigate();

  const logoutUser = useCallback(async () => {
    setUser(null);
    navigate("/login");
  }, [navigate]);

  const reloadUser = useCallback(async () => {
    setUser(fakeUser);
  }, []);

  useEffect(() => {
    // For now, let's set user to fakeUser after a brief delay to simulate loading
    setTimeout(() => {
      setUser(fakeUser);
      setLoading(false); // Set loading to false when user data is available
    }, 1000); // Simulate a 1-second delay (adjust as needed)
  }, []);

  const value: AuthenticationContextType = {
    loading,
    user,
    logout: logoutUser,
    reload: reloadUser,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = (): AuthenticationContextType =>
  useContext(AuthenticationContext);
