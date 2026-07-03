
import { useContext } from "react";
import { theme } from "../context/theme";

export default function NavBar(){

  const data = useContext(theme);
  console.log(data);

  return (
    <h1 style={{ color: data.clr }}>
      Hello from NavBar
    </h1>
  )
}