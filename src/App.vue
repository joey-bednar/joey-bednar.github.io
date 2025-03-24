<script setup></script>

<template>
  <div class="container">
    <header>
      <h1>Joey Bednar</h1>
    </header>

    <main>
      <div class="social">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/joey-bednar">
          <img src="../assets/github.png" height="50px" width="50px" border="0" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joseph-bednar">
          <img src="../assets/linkedin.png" height="50px" width="50px" border="0" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="">
          <img id="resume" src="../assets/resume.png" height="60px" width="60px" border="0" />
        </a>
      </div>
    </main>

    <footer>&copy; 2025 Joseph Bednar</footer>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

html,body {
  margin: 0;
  padding: 0;
}

body {
  color: #ffffff;
  background-color: black;

  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  text-align: center;
}

.container {
   display:grid;
   grid-template-rows:auto 1fr auto;
   grid-template-columns:100%;

   /* fallback height */
   min-height:100vh;

   /* new small viewport height for modern browsers */
   min-height:100svh;
}

.social {
  justify-content: center;
  display: grid;
  grid-template-columns: 75px 75px 75px;
  margin-top: 30px;
  margin-bottom: 10px;
}

h1 {
  font-size: 5em;
  margin-top: 30vh;
  margin-bottom: 10px;
}

.box {
  justify-content: center;
  height: 50px;
  width: 50px;
  background: red;
}

img#resume {
  position: relative;
  top: -4px;
}

footer {
  justify-content: center;
  text-align: center;
}
</style>
