import React, { createContext ,useContext} from 'react'

function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("Users")

    const [authUser, setAuthUser] = React.useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined

    )

  return (
    <AuthContext.Provider value={ [authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  )
}


export const AuthContext = createContext()
export default AuthProvider
export const useAuth = () => useContext(AuthContext)