import { authService } from "@/services/auth";
import { userService } from "@/services/user";
import { clearToken, clearUser, getUser, setToken, setUser } from "@/utils";
import { message } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, _setUser] = useState(getUser);

  useEffect(() => {
    setUser(user || null)
  }, [user])
  
  const login = async (data) => {
    try {
      const res = await authService.login(data);
      if (res.data) {
        setToken(res.data);
        const user = await userService.getUserService();
        _setUser(user.data);
        message.success("Login Success!");
        navigate(PATH.Profile.index);
      }
    } catch (err) {
      console.log(err);
      if (err?.response?.data?.message) {
        message.error(err.response.data.message);
      }
    }
  };

  const logout = () => {
    clearToken()
    clearUser()
    setUser(null)
    message.success("Logout Success!")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser: _setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

