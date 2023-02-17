import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ]);
  function handleToggle(id) {
    const updatedLights = lights.map((light) => {
      if (light.id === id) {
        light.isOn = !light.isOn;
        return { ...light };
      }
      return light;
    });
    console.log("lights:", lights);
    console.log("updatedLights", updatedLights);
    setLights(updatedLights);
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} toggleLight={handleToggle} />
    </Layout>
  );
}
