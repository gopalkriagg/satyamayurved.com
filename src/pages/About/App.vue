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
                      </h4>
                      <p>
                        <ul>
                          <li>
                            Dr. Arti Jindal (founder of Satyam Ayurveda) has been practicing for the past 17 years and has brought smiles to so many patients in her practice. Ayurveda is considered to be the oldest medical practice and has proved to be highly successful if practiced properly. She has cured chronic diseases in which operations and surgeries were inevitable. The medicines, ointments, oils are prepared by the doctor herself and have always proven themselves to be the best. The dermaherb is highly successful for all skin diseases, especially chronic eczema , acne \& leucoderma. She has also practiced as a gynecologist and has special ayurvedic medicines for gynic issues like infertility, PCOD, leucorrhoea. All the chronic diseases are cured using ayurvedic medicines only. It is a well known fact that ayurveda always yields side benefits not side effects!
                          </li>
                          <li>
                            For online appointment or ordering our herbal medicines kindly contact +91-98998-42598. For receiving a call back fill the details below
                          </li>
                        </ul>

                        </p>
                      <p>
                        "The real medicine comes from the earth, not from the laboratories!" ~ Dr. Arti Jindal
                      </p>

                    <p>
                      <img
                        src="../../assets/visiting_card_front.png"
                        style="width: 100%;"
                      />
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
