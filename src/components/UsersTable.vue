<template>
  <div>
    <div class="lg:flex">
      <!-- Refugio -->
      <div class="flex-1 m-2 card text-center">
        <header class="p-4">
          <span class="title is-5">Refugio</span>
          <figure class="image is-48x48 mt-4 mx-auto">
            <img src="../assets/png/035-cat-1.png" />
          </figure>
        </header>
        <div class="content">
          <div class="bg-gray-100 border-b-2 border-white p-2">
            <strong>¡ES GRATIS!</strong>
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            <span class="subtitle is-6">Publicar mascotas</span>
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            Contactar adoptantes
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            Recibir donaciones
          </div>
          <footer class="p-2">
            <router-link class="button is-fullwidth is-info" to="/info#refugio"
              >Ver más</router-link
            >
          </footer>
        </div>
      </div>

      <!-- Adoptante -->
      <div class="flex-1 m-2 card text-center">
        <header class="p-4">
          <span class="title is-5">Adoptante</span>
          <figure class="image is-48x48 mt-4 mx-auto">
            <img src="../assets/png/001-smartphone.png" />
          </figure>
        </header>
        <div class="content">
          <div class="bg-gray-100 border-b-2 border-white p-2">
            <strong>¡ES GRATIS!</strong>
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            <span class="subtitle is-6">Buscar mascotas</span>
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">Adoptar</div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            Dar tránsito
          </div>
          <footer class="p-2">
            <router-link
              class="button is-fullwidth is-primary"
              to="/info#adoptante"
              >Ver más</router-link
            >
          </footer>
        </div>
      </div>

      <!-- Voluntario -->
      <div class="flex-1 m-2 card text-center">
        <header class="p-4">
          <span class="title is-5">Voluntario</span>
          <figure class="image is-48x48 mt-4 mx-auto">
            <img src="../assets/png/volunteer.png" />
          </figure>
        </header>
        <div class="content">
          <div class="bg-gray-100 border-b-2 border-white p-2">
            <strong>¡ES GRATIS!</strong>
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            <span class="subtitle is-6">Ofrecer traslados</span>
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            Realizar donaciones
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            Ayudar ante emergencias
          </div>
          <footer class="p-2">
            <router-link
              class="button is-fullwidth is-warning"
              to="/info#voluntario"
              >Ver más</router-link
            >
          </footer>
        </div>
      </div>

      <!-- Veterinaria -->
      <div class="flex-1 m-2 card text-center">
        <header class="p-4">
          <span class="title is-5">Clinica Veterinaria</span>
          <figure class="image is-48x48 mt-4 mx-auto">
            <img src="../assets/png/033-doctor.png" />
          </figure>
        </header>
        <div class="content">
          <div class="bg-gray-100 border-b-2 border-white p-2">
            <strong>¡ES GRATIS!</strong>
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            <span class="subtitle is-6">Publicar servicios</span>
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            Recibir donaciones
          </div>
          <div class="bg-gray-100 border-b-2 border-white p-2">
            Ayudar a refugios
          </div>
          <footer class="p-2">
            <router-link
              class="button is-fullwidth is-danger"
              to="/info#veterinaria"
              >Ver más</router-link
            >
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersTable"
};
</script>
