import { SignIn } from "@clerk/nextjs"

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <SignIn/>
    </div>
  )
}

export default SignUpPage
