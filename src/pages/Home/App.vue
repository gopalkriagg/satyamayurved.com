<template>
  <div id="app">
    <NavBar />
    <b-container class="bv-example-row mt-4">
      <b-row class="my-5" />
      <b-row align-h="center">
        <b-col sm="2">
          <b-img
            src="../../assets/satyam_medical_center_logo.png"
            fluid
            alt="Responsive image"
          ></b-img>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mt-2">
        <h1 class="mx-auto">
          <b-badge variant="info">Satyam Medical Centre</b-badge>
        </h1>
      </b-row>
      <b-row align-h="center" class="mb-0">
        <h1 class="mx-auto mb-0">
          <b-badge variant="info">Dr. Arti Jindal</b-badge>
        </h1>
      </b-row>
      <b-row align-h="center" class="mb-0">
        <h2 class="mx-auto">
          <b-badge variant="info">B.A.M.S. (Amritsar)</b-badge>
        </h2>
      </b-row>
      <b-row align-h="center" class="mb-0">
        <h2 class="mx-auto">
          <b-badge variant="info">P.G.D.H.H.C (Apolo)</b-badge>
        </h2>
      </b-row>
      <b-row align-h="center" class="mt-2">
        <b-col>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body>
                  <b-card-text>
                    <div>
                      <p>
                        We are specialized in treating following illnesses
                      </p>
                      <p>
                        Satyam Ayurved provides the patients with pure ayurvedic
                        medicines prepared by the renowned ayurvedist Dr. Arti
                        Jindal. We guarentee the treatment and provide the best
                        results in a short duration of time!
                      </p>

                      <address>
                        Satyam Medical Centre
                        <br />
                        Dr. Arti Jindal
                        <br />
                        <abbr title="Phone">Mobile:</abbr> +91-98998-42598,
                        +91-8076079269
                        <br />
                        Visit us at:<br />
                        E-56<br />
                        Near Govindpuram bus stand<br />
                        Ghaziabad
                      </address>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <Carousel />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";

export default {
  name: "App",
  components: {
    NavBar,
    Carousel,
  },
};
</script>

<style>
body {
  background-image: url("../../assets/background4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
