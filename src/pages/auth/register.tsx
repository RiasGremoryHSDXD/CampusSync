import { useState } from "react"
import StringTextField from "../../components/stringTextField"
import Button from "../../components/button"

export default function Register() {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [course, setCourse] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  // 🔹 Track if form has been submitted
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)


    // 🔹 If all fields are filled, log the data
    console.log("✅ Form submitted successfully:")
    console.log({
      firstName,
      lastName,
      course,
      email,
      password
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2  max-w-md mx-auto">

        <div
            className="flex flex-col md:flex-row gap-x-4 gap-y-2"
        >
            <StringTextField
                label="First Name"
                placeholder="Lois"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                errorMessage="Please enter your first name"
                showError={formSubmitted && firstName.trim() === ""}
            />

            <StringTextField
                label="Last Name"
                placeholder="Backet"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                errorMessage="Please enter your last name"
                showError={formSubmitted && lastName.trim() === ""}
            />
        </div>

      <StringTextField
        label="Course/Program"
        placeholder="BSIT"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        errorMessage="Please provide your course or program"
        showError={formSubmitted && course.trim() === ""}
      />

      <StringTextField
        label="University Email"
        placeholder="example@1.ustp.edu.ph"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage="Please enter a valid university email"
        showError={formSubmitted && email.trim() === ""}
      />

      <StringTextField
        type="password"
        label="Password"
        placeholder="******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage="Please create a password"
        showError={formSubmitted && password.trim() === ""}
      />

      <Button 
        type="submit"
        buttonText = "Sign Up"
      />
    </form>
  )
}
