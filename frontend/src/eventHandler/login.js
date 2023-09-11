import userService from "../services/users"

const handleSubmitLogin = async (e, setLoginUsername, setLoginPassword, loginUsername, loginPassword, setIsLoggedIn, toast) => {
  e.preventDefault()
  console.log("im clicked")
  try{
    const user = {"username": loginUsername, "password": loginPassword}
    const response = await userService.login(user)

    toast({
      position: "top",
      title: "Login Alert",
      description: response["success"],
      status: "success",
      duration: 5000,
      isClosable: true,
    })
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
  setIsLoggedIn(true)
}

const handleSubmitRegister = async (e, setIsOpenRegisterModal, setRegisterUsername, setRegisterPassword, registerUsername, registerPassword, toast) => {
  e.preventDefault()
  console.log("im clicked")
  try{
    const user = {"username": registerUsername, "password": registerPassword}
    const response = await userService.register(user)
    console.log("response ",response)
    toast({
      title: "Registration Alert",
      status: "success",
      description: response["success"],
      duration: 5000,
      isClosable: true,
    })
  }catch(exception){
    console.log(exception)
    toast({
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

const eventHandlers = { handleSubmitLogin, handleSubmitRegister}

export default eventHandlers
