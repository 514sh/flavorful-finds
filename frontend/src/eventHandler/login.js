import userService from "../services/users"

const handleSubmitLogin = async (e, setLoginUsername, setLoginPassword, loginUsername, loginPassword, setIsLoggedIn, toast) => {
  e.preventDefault()
  try{

    const user = {"username": loginUsername, "password": loginPassword}
    const response = await userService.login(user)

    setIsLoggedIn(true)
    toast({
      position: "top",
      title: "Login Alert",
      description: response["success"],
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    return response
  }catch(exception){
    console.log(exception)
    toast({
      position: "top",
      title: "Login Alert",
      description: exception.response.data.error,
      status: "error",
      duration: 5000,
      isClosable: true,
    })
  }
  setLoginUsername("")
  setLoginPassword("")
}

const handleSubmitRegister = async (e, setIsOpenRegisterModal, setRegisterUsername, setRegisterPassword, registerUsername, registerPassword, toast) => {
  e.preventDefault()
  try{
    const user = {"username": registerUsername, "password": registerPassword}
    const response = await userService.register(user)
    toast({
      position: "top",
      title: "Registration Alert",
      status: "success",
      description: response["success"],
      duration: 5000,
      isClosable: true,
    })
  }catch(exception){
    console.log(exception)
    toast({
      position: "top",
      title: "Registration Alert", 
      status: "error", 
      description: exception.response.data.error,
      duration: 5000,
      isClosable: true,
    })
  }
  setRegisterUsername("")
  setRegisterPassword("")
  setIsOpenRegisterModal(false)
}


const handleLogout = (setLoginUsername, setLoginPassword) => {
  userService.deleteCookie("userId")
  userService.deleteCookie("authToken")
  setLoginUsername("")
  setLoginPassword("")
}

const eventHandlers = { handleSubmitLogin, handleSubmitRegister, handleLogout}

export default eventHandlers
