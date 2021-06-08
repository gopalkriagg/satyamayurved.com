<template>
  <div id="app">
    <NavBar />
    <b-container class="bv-example-row">
      <b-row class="my-5" />
      <b-row align-h="center">
        <b-col sm="3">
          <b-img
            src="../../assets/modern_frozen_products_logo.png"
            fluid
            alt="Responsive image"
          ></b-img>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mt-2">
        <h1 class="mx-auto">
          <b-badge variant="success">Modern Frozen Products</b-badge>
        </h1>
      </b-row>
      <b-row align-h="center" class="mt-2">
        <b-col>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body>
                  <b-card-text>
                    <div>
                      <h3>Frequently Asked Questions</h3>
                      <p>
                        <b>
                          Q. How IQF vegetables are better than other frozen
                          vegetables?</b
                        >
                        <br />
                        A. The products are quickly frozen below the temperature
                        at which bacterial, mould and yeast growth occurs. IQF
                        vegetables have benefits of:
                        <br />
                      </p>
                      <ol>
                        <li>
                          Best freshness close to natural freshness
                        </li>
                        <li>
                          Better taste
                        </li>
                        <li>
                          Better flavour/aroma
                        </li>
                        <li>
                          Better colour/appearance
                        </li>
                        <li>
                          Better nutritive value over other preserved vegetables
                        </li>
                        <li>
                          Above all, available throughout the year.
                        </li>
                      </ol>
                      <hr />
                      <p>
                        <b> Q. How are vegetables/green peas harvested?</b>
                        <br />
                        A. Selected specific varieties of vegetables are grown
                        in the heart of green belts of India. These vegetables
                        are harvested at right stage of maturity, best suited
                        for consumption under the supervision of trained
                        personnel.
                      </p>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <Carousel />
              </b-col>
            </b-row>
            <b-row class="px-4">
              <b-col>
                <hr />
                <p>
                  <b> Q. What is IQF (Individually Quick Frozen)?</b>
                  <br />
                  A. Freezing is the method of preservation of food by freezing
                  process. In this process, the temperature of food is lowered
                  much below their freezing point in short period of time, say
                  up to –20° C in 3 to 30 minutes. This inhibits the oxidative,
                  enzymatic and microbial changes, which are responsible for the
                  change of flavour, colour and their spoilage.
                </p>

                <hr />
                <p>
                  <b> Q. Does IQF affect the natural properties of the food?</b>
                  <br />
                  A. No. IQF is at present the most advanced process whereby
                  virtually all the properties of most parent foodstuffs can be
                  preserved. A great reduction in temperature helps to hold the
                  biological condition of the food at a point at which it is
                  frozen and thereby present the natural flavour, texture,
                  colour or nutritive value on defreezing.
                </p>
                <hr />
                <p>
                  <b>
                    Q. Isn't frozen food of an inferior quality than fresh or
                    non-frozen?</b
                  >
                  <br />
                  A. Absolutely not. With the advanced technology like IQF used
                  now to freeze food, these products are always delicious and
                  fresh to taste.
                </p>

                <hr />
                <p>
                  <b>
                    Q. Do frozen vegetables contain preservatives to keep them
                    fresh for long?</b
                  >
                  <br />
                  A. No additive/preservative is added to IQF vegetables. They
                  are 100% natural.
                </p>
                <hr />
                <p>
                  <b> Q. Why should I buy from ‘Modern Frozen Products’?</b>
                  <br />
                  A. We choose only that variety of frozen green peas/vegetable,
                  which can be done with a taste, appearance and texture and is
                  found to be superior to any other frozen vegetable on the
                  market. Special seed varieties, special sorting methods, hand
                  trimming, contract farming and determining the best growing
                  regions of India for a given vegetable are just some of our
                  practices. We buy from the factories which maintain the
                  industry’s highest quality grading standards to assure
                  consistently great taste and texture.
                </p>
                <hr />
                <p>
                  <b>
                    Q. How long frozen products/IQF vegetables last in my home
                    freezer?</b
                  >
                  <br />
                  A. Frozen vegetables and fruit stored at -18°C can last up to
                  one year, but self-defrosting freezers take their toll. Every
                  time the system goes through a thaw cycle, the contents of the
                  freezer thaw slightly and then re-freeze when the cycle is
                  completed. Each time this happens, some of the moisture inside
                  the food leaches out and forms ice crystals. Eventually, the
                  food starts to look withered due to lack of moisture. Frozen
                  vegetables and fruit will start to show the effects of age
                  after about six months.
                </p>
                <hr />
                <p>
                  <b> Q. What is the list of products available?</b>
                  <br />
                  A. We have wide range of products to cater our customers. We
                  specialise in the following frozen items:
                  <br />
                </p>
                <ol>
                  <li>
                    IQF Green Peas (Packings available: 30 kg loose, 5 kg, 1 kg,
                    500 g and 200 g)
                  </li>
                  <li>
                    IQF Mix Vegetable
                  </li>
                  <li>
                    IQF Sweet Corn
                  </li>
                  <li>
                    IQF Baby Corn
                  </li>
                  <li>IQF Okra</li>
                  <li>IQF Carrot</li>
                  <li>IQF Cauliflower</li>
                  <li>IQF Beans</li>
                  <li>IQF Broccoli</li>
                  <li>
                    Any other vegetable can be processed on confirmed order in
                    any quantity during season.
                  </li>
                  <li>
                    We also deal in supply of raw vegetables to factories.
                  </li>
                </ol>
                <hr />
                <p>
                  <b>
                    Q. What are the quality standards measured by Modern Frozen
                    Products?</b
                  >
                  <br />
                  A. We ensure high quality products from state-of-the-art
                  processing facilities and have in-house Quality Assurance and
                  Microbial Testing Laboratories.
                </p>

                <hr />
                <p>
                  <b>
                    Q. What are the benefits of frozen fruits and vegetables?</b
                  >
                  <br />
                  A. Fruits and vegetables are picked at peak ripeness and often
                  frozen within hours, locking in nutrients and flavor.
                  Generally, frozen foods retain their vitamins and minerals and
                  there is no change to the carbohydrates, protein or fat
                  content. In some cases, frozen foods have more vitamins and
                  minerals compared to fresh because fresh foods lose vitamins
                  and minerals over time while freezing preserves nutrients.
                  <br />
                  Frozen foods can be a convenient and affordable way to
                  incorporate healthful foods from every food group, including
                  whole grains, fruits, vegetables, protein and dairy. In
                  addition to a time-saving convenience, frozen foods can be a
                  benefit for individuals with limited kitchen space or
                  utensils. Not only can frozen foods be more affordable in
                  price, but they also can aid in reducing food waste.
                </p>
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
