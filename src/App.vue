<template>
  <div>
  <!--Navbar-->
    <mdb-navbar v-show="navbarType == 'regular-non-fixed'" style="margin-top: 5px" dark color="primary" name="Your Logo" href="#">
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="/tasks" waves-fixed>Tasks</mdb-nav-item>
          <mdb-nav-item href="/content" waves-fixed>Content</mdb-nav-item>
          <mdb-nav-item href="/setup" waves-fixed>Setup</mdb-nav-item>
          <!-- mdbDropdown -->
        </mdb-navbar-nav>
        <!-- Search form -->
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!--/.Navbar-->
    <router-view/>
    <div style="height: 100vh">
      <div v-show="content" class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-black-strong flex-center">
            <div class="container">
              <div class="white-text text-center wow fadeInUp">
                <h2>This is just a test message</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbBtn } from 'mdbvue';

export default {
  name: 'NavigationPage',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbInput,
    mdbBtn
  },
  data() {
    return {
      navbarType: 'regular-non-fixed',
      content: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (42).jpg")no-repeat center center;
  background-size: cover;
  height: 100%;
}
</style>

<style>
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
.navbar.fixed-transparent-navbar {
  transition: 1s !important;
}
.navbar.fixed-transparent-navbar.scrolling-navbar.top-nav-collapse {
  background-color: #4285F4 !important;
}
</style>
