
export const handleChangeLoginUsername = (e, setLoginUsername) => {
  setLoginUsername(e.target.value)
}

export const handleChangeLoginPassword = (e, setLoginPassword) => {
  setLoginPassword(e.target.value)
}

export const handleLoginShowPassword = (setShowLoginPassword, showLoginPassword) => {
  setShowLoginPassword(!showLoginPassword)
}

export const handleSubmitLogin = async (e, loginUsername, loginPassword, setIsLoggedIn, userService) => {
  e.preventDefault()
  const user = {"username": loginUsername, "password": loginPassword}
  response = await userService.login(user)
  setIsLoggedIn(true)
}

export const handleOpenRegister = (e) => {
  e.preventDefault()
}