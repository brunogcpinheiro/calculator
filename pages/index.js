import React, { useState, useEffect } from "react";

import { VerificarSeDiaUtil, verify } from "../core/servicos";

function HomePage() {
  console.log(verify(2020));

  return (
    <div>
      <h1>Bem vindo, Fernandinho!</h1>
      <div className="calendar"></div>
    </div>
  );
}

export default HomePage;
