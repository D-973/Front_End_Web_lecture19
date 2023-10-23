// Welcome
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

// Sign in
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

// Choose greetings
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Example usage:
// Define a variable to simulate user login status (true for logged in, false for guest)
const isLoggedIn = true; // Change this to simulate different scenarios

// Render the Greeting component based on user login status
ReactDOM.render(
  <Greeting isLoggedIn={isLoggedIn} />,
  document.getElementById("app")
);