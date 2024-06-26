import { getCurrentUser } from "../../../actions/getCurrentUSer"
import Container from "../components/Container"
import FormWrap from "../components/FormWrap"
import RegisterForm from "./RegisterForm"

const register = async () => {
  const currentUser=await getCurrentUser()
  return (
    <Container>
        <FormWrap>
            <RegisterForm currentUser = {currentUser}/>
        </FormWrap>
    </Container>
  )
}

export default register