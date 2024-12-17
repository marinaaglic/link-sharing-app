import Input from "../reusable/Input";

type Props = {};

export default function Login({}: Props) {
  return (
    <div>
      <Input
        type="text"
        label="Username"
        id="username"
        placeholder="Username"
      />
      <Input
        type="password"
        label="Password"
        id="password"
        placeholder="Password"
      />
    </div>
  );
}
