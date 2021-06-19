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
              <b-col>
                <b-card-body>
                  <b-card-text>
                    <address>
                      <strong>Address:</strong> <br>
                      E 56 Govindpuram <br />
                      Ghaziabad <br />
                      Uttar Pradesh <br />
                      India <br />
                      Tel: +91-98998-42598 <br />
                      Email: satyamayurvedists@gmail.com
                    </address>
                    <p>
                      <strong>Clinic Timings:</strong> <br>
                      From Mondays to Saturdays: <br />
                      10:30 - 1:30 and 5:00 - 7:30 <br />
                      On Sundays: <br />
                      10:30-1:30
                    </p>
                    <p>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6999.875199450691!2d77.49083032694169!3d28.69151317093006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2c95f3fb4e20008!2sDr.%20Arti%20Jindal&#39;s%20Satyam%20Medical%20Centre!5e0!3m2!1sen!2sjp!4v1622457112507!5m2!1sen!2sjp"
                        width="600"
                        height="450"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    </p>
                  </b-card-text>
                </b-card-body>
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
import MainHeader from "../../components/MainHeader";

export default {
  name: "App",
  components: {
    NavBar,
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
