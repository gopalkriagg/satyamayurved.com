<template>
  <div id="app">
    <NavBar />
    <b-container class="bv-example-row mt-4">
      <b-row class="my-5" />
      <MainHeader />
      <b-row align-h="center" class="mt-2">
        <b-col>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body>
                  <b-card-text>
                    <div>
                      <p>
                        Satyam Ayurveda provides the patients with pure
                        ayurvedic medicines prepared by the renowned ayurvedist
                        Dr. Arti Jindal. We guarantee the treatment and provide
                        the best results in a short duration of time!
                      </p>

                      <address>
                        <strong> Satyam Medical Centre</strong> <br />
                        Dr. Arti Jindal
                        <br />
                        <abbr title="Phone">Mobile:</abbr> +91-98998-42598,
                        +91-8076079269
                        <br />
                      </address>
                      <address>
                        <strong> Visit us at:</strong> <br />
                        E-56 Govindpuram <br />
                        Ghaziabad <br />
                        Uttar Pradesh <br />
                        India <br />
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
import MainHeader from "../../components/MainHeader";

export default {
  name: "App",
  components: {
    NavBar,
    Carousel,
    MainHeader,
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
