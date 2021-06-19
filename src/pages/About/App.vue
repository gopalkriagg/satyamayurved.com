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
                      <h4>
                        Brief Profile of Dr. Arti Jindal
                        <!-- <small>(MBA Finance, M.Com)</small> -->
                      </h4>
                      <p>
                        <ul>
                          <li>
                            Dr. Arti Jindal (founder of Satyam Ayurved) has been practicing for past 17 years and has brought smiles to soo many patients in her practice. Ayurveda is considered to be the oldest pathy and has proved to be highly successful if practiced properly. She has cured chronic diseases in which operations and surgeries were inevitable. The medicines ,oitments, oils are prepared by the doctor herself and have always proven themselves to be the best. The dermaherb is highly successful for all skin diseases especially chronic eczema , acne \& leucoderma. She has also practiced as a gynecologist and has special ayurvedic medicines for gynic issues like infertility,PCOD,leucorrhoea.

All the chronic diseases are cured using ayurvedic medicines only.It is a well known fact that ayurved always yields side benifits not side effects!
                          </li>
                          <li>
                            For online appointment or ordering our herbal medicines kindly contact +91 9899842598. For recieving a call back fill the details below
                          </li>
                        </ul>

                        </p>
                        <p>
                          Monday - Saturday: 10:30 - 1:30
                          5:00 - 7:30
                          Sunday: 10:30-1:30
                        </p>
                      <p>
                        "The real medicine comes from the earth ,not from the laboratories!" ~ Dr. Arti Jindal
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
