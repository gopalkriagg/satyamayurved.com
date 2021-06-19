<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">Satyam Medical Centre</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :active="$page === 'Home'" href="/index.html">
            Home
          </b-nav-item>
          <b-nav-item :active="$page === 'About'" href="/about.html">
            About Dr. Arti Jindal
          </b-nav-item>
          <b-nav-item :active="$page === 'Products'" href="/specialities.html">
            Specialities
          </b-nav-item>
          <b-nav-item :active="$page === 'ContactUs'" href="/access.html">
            Access & Opening hours
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            href="https://api.whatsapp.com/send?phone=919899842598&text="
          >
            Whatsapp
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
