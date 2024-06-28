type InputName = 'username' | 'email' | 'password' | 'confirm_password';
type InputsTypes = {
  type: string;
  name: InputName;
  label: string;
  id: string;
}
export const registerInputs: InputsTypes[] = [
  {
    type: "text",
    name: "username",
    label: "Username",
    id: "user-name"
  },
  {
    type: "text",
    name: "email",
    label: "Email",
    id: "user-email"
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    id: "user-password"
  },
  {
    type: "password",
    name: "confirm_password",
    label: "Confirm Password",
    id: "user-password_Confirmation"
  }
]