<template>
  <div id="app">
    <NavBar />
    <b-container class="bv-example-row">
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
                      <h3 style="font-weight: bold;">Specialities</h3>
                      <p>
                        We are specialized in treating following illnesses:
                      </p>
                      <p>
                        <img
                          src="../../assets/visiting_card_back.png"
                          style="width: 100%;"
                        />
                      </p>
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
