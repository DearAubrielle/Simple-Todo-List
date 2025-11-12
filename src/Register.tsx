

function handleSubmitRegister(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
    const formData = new FormData(form);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Registering user:', { username, email, password });
    // Here you would typically send the data to your backend server
    try {
      // Simulate successful registration
      console.log('Registration successful!');
    } catch (error: unknown) {
      console.log('Registration failed. Please try again. '+ String(error));
    }
}

export default function Register() {

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmitRegister}>
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}