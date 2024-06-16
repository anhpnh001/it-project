import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext<{
  user: {}
  setUser: React.Dispatch<React.SetStateAction<{}>>
} | null>(null)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({}) // Initialize user state as an empty object

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// This custom hook makes it easier to use the user context in other components
export const useUser = () => useContext(UserContext)
