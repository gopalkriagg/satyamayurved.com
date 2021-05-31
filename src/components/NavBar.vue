<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">Satyam Medical Centre</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :active="$page === 'Home'" href="/index.html"
            >Home</b-nav-item
          >
          <b-nav-item :active="$page === 'About'" href="/about.html"
            >About Us</b-nav-item
          >
          <b-nav-item :active="$page === 'Products'" href="/products.html"
            >Products</b-nav-item
          >
          <b-nav-item :active="$page === 'Quote'" href="/quote.html"
            >Get a Quote</b-nav-item
          >
          <b-nav-item :active="$page === 'ContactUs'" href="/contact.html"
            >Contact Us</b-nav-item
          >
          <b-nav-item :active="$page === 'FAQs'" href="/faqs.html"
            >FAQs</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item href="https://www.facebook.com/frozengreenpeas">
            <b-icon icon="facebook" style="color: white;"></b-icon>
          </b-nav-item>
          <b-nav-item href="https://www.linkedin.com/in/bindu-gupta-049969199/">
            <b-icon icon="linkedin" style="color: white;"></b-icon>
          </b-nav-item>
          <b-nav-item href="https://www.instagram.com/frozengreenpeas/">
            <b-icon icon="instagram" style="color: white;"></b-icon>
          </b-nav-item>
          <b-nav-item href="mailto:ashwini.bindu@gmail.com">
            <b-icon icon="envelope" style="color: white;"></b-icon>
          </b-nav-item>
          <b-nav-item href="https://api.whatsapp.com/send?phone=919815411199&text=">
            <!-- <b-icon icon="whatsapp" style="color: white;"></b-icon> -->
            Whatsapp
          </b-nav-item>
          <b-nav-item href="https://www.indiamart.com/modernfrozenproducts/">
            IndiaMart
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>
