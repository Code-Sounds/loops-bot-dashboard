import { FieldWrapper } from "../../components/generics/forms";

export function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        voluptatum?
        <FieldWrapper label="Email">
          <input type="text" />
        </FieldWrapper>
        <FieldWrapper label="Password">
          <input type="text" />
        </FieldWrapper>
      </p>
    </div>
  );
}
