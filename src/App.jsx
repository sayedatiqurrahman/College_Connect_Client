import MainLayout from "./Layout/MainLayout"
import AuthProvider from "./provider/AuthProvider"

function App() {

  return (
    <>
      <AuthProvider>           
        <MainLayout />
      </AuthProvider>
    </>
  )
}

export default App
