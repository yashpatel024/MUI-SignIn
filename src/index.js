import * as ReactDOM from 'react-dom/client';
import SignIn from "./components/SignIn";

const container = document.getElementById("signin");
ReactDOM.hydrateRoot(container, <SignIn />);