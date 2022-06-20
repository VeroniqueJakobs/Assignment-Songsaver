import React from "react";
import Header from "../Components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <h2>About me</h2>
        <p>
          Hoi, ik ben Veronique en ik ben bezig met het volgen van de cursus tot
          frontend developer bij Winc Academy. Ik heb de cursus bijna klaar en
          ben nu aan het rondkijken op de arbeidsmarkt. Het lijkt me erg leuk om
          binnenkort aan de slag te gaan als junior frontend developer! De
          opdracht die op de pagina 'Home' staat is getiteld 'Songsaver'. Deze
          opdracht is de eindopdracht van werken met het framework 'React'.
          Zoals je ziet, kun je zelf een liedje invoeren met bijbehorende
          gegevens, zodat je hier een playlist van kunt maken. Leuk toch!!
        </p>
      </div>
    </div>
  );
}
export default About;
