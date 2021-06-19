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
                    <address>
                      E 56 Govindpuram Ghaziabad , Uttar Pradesh India Tel:
                      9899842598 Email: satyamayurvedists@gmail.com
                    </address>
                    <div
                      class="fb-like"
                      data-href="http://facebook.com/frozengreenpeas"
                      data-layout="standard"
                      data-action="like"
                      data-show-faces="true"
                      data-share="true"
                    ></div>
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
                    <p>
                      <a href="https://www.dibiz.com/ashwinibindu"
                        >Business card</a
                      >
                      <br />
                      <a href="www.facebook.com/frozengreenpeas">Facebook</a>
                      <br />
                      <a href="www.indiamart.com/modernfrozenproducts"
                        >IndiaMart</a
                      >
                      <br />
                      <a
                        href="https://www.linkedin.com/in/bindu-gupta-049969199/"
                        >Linkedin</a
                      >
                      <br />
                      <a href="https://www.instagram.com/frozengreenpeas/"
                        >Instagram</a
                      >
                      <br />
                      <a
                        href="https://www.facebook.com/groups/1394921407573109/?ref=share"
                        >Join our Facebook group for daily updates on Frozen
                        Green Peas</a
                      >
                    </p>
                    <p>
                      We will get back to you very soon.
                      <br />
                      Thank you for your time and interest!
                      <br />
                    </p>
                    <p>
                      <img
                        src="../../assets/business_card.jpg"
                        style="width: 100%;"
                      />
                    </p>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/frozengreenpeas"
                  data-tabs="timeline"
                  data-width="500"
                  data-height="800"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/frozengreenpeas"
                    class="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/frozengreenpeas"
                      >Frozen Green Peas</a
                    >
                  </blockquote>
                </div>
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
