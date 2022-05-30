<template>

 <!-- Navigation-->
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Denise Pedro</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1 nav-link py-3 px-0 px-lg-3 rounded"> <router-link to="/">Home</router-link></li>
                        <li class="nav-item mx-0 mx-lg-1 nav-link py-3 px-0 px-lg-3 rounded"> <router-link to="Portfolio">Portfolio</router-link></li>
                        <li class="nav-item mx-0 mx-lg-1 nav-link py-3 px-0 px-lg-3 rounded"> <router-link to="resume">Resume</router-link></li>
                        <li class="nav-item mx-0 mx-lg-1 nav-link py-3 px-0 px-lg-3 rounded">  <router-link to="contact">Contact</router-link></li>
                        <li class="nav-item mx-0 mx-lg-1 nav-link py-3 px-0 px-lg-3 rounded">  <router-link to="blog">Blog</router-link></li>
                        <span class="nav-item mx-0 mx-lg-1 nav-link py-3 px-0 px-lg-3 rounded"><a v-on:click="logout" href="#">Logout</a></span>                    </ul>
                </div>
            </div>
        </nav>

</template>

<script>
export default {
    name:'NavPage',
    
    methods: {
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'LogIn'})
        }
        
    }
}

</script>

<style scoped>

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}



/* .nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: teal;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
} */

/* .nav-link:hover, .nav-link:focus {
  color: #15967d;
} */

/* .nav-tabs .nav-link {
  margin-bottom: -0.125rem;
  background: none;
  border: 0.125rem solid transparent;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
} */

.page-section .page-section-heading {
    padding-top:3rem;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

</style>