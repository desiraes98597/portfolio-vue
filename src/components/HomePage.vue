<template>
<NavPage />
  <section class="page-section home" id="index">

        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <!-- Masthead Avatar Image-->
                    <div class="row">
                        <div class="col-md-9"> <h1 class="masthead-heading text-uppercase mb-0">A little about me</h1>
                <!-- Masthead Heading-->
                            <p>I became interested in web design way back in 1998, when I worked for a small electronics company who had no web site presence.
                                Of course, at the time web sites very rudenmentry and had to be hand coded. I created a huge online catalog presence for this company
                                and found I could work for hours and not even be phased. I loved it. I did not know anything, so I had to teach myself from scratch
                                and back then there was not even css, or least not that I knew, so lots and lots of tables. :-). After that company cloaed in 2008 due to 
                                economic hit, I went back to school for web design. Received a certificate, and then never worked in the field. I was intimated and 
                                suffered from imposter syndrome enough to keep me out of the job market. Fast forward to now and I am back, trying to learn all the skills
                                I did not back in 2010. Things have changed so much.</p></div>
                                <div class="col-md-1"></div>
                      <div class="col-md-3">
                        <div class="row"> <img class="masthead-avatar mb-5" src="../assets/img/denise.png" alt="cartoon image of myself" /></div>
                        
                      </div>
                    </div>
                   
                  </div>

                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Masthead Subheading-->
                <p class="masthead-subheading font-weight-light mb-0">Web Designer </p>
          
        </header>
        </section>
<FooterDiv />
</template>

<script>
import NavPage from './NavPage.vue'
import FooterDiv from './FooterDiv.vue'
export default {
    name:"HomePage",
    components:{
       NavPage,
       FooterDiv
       },
       mounted()
        {
            let user=localStorage.getItem('user-info');
            if(!user)
            {
                this.$router.push({name:"SignUp"})
            }
        }
    
}
</script>

<style>

/* @font-face {
  font-family: "Amazon Ember";
  src: url("./assets/fonts/AmazonEmber_W_Lt.woff") format("truetype");
  font-weight: 400;
} */

.masthead {
  padding-top: calc(6rem + 74px);
  padding-bottom: 6rem;
  
}
.masthead .masthead-heading {
  font-size: 2.00rem;
  line-height: 2.75rem;
}

.masthead .masthead-subheading {
  font-size: 1.25rem;
}

.maskhead-avatar {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: 25.5rem;
    margin-bottom: 5.5rem;
    margin-right: 1rem;
    border-radius: 50px;
    transition: background 2s;
   
}


.masthead .masthead-avatar {
width: 20rem;
display: grid;
float:right;
border-radius: 25px;
align-content: center;
transition: transform 1s;
box-shadow: 10px 10px 15px purple;

}

.masthead .masthead-avatar:hover{ 
  transform: rotate(5deg);
  
}


@media (min-width: 992px) {
  .masthead {
    padding-top: calc(6rem + 104px);
    padding-bottom: 6rem;
  }
  .masthead .masthead-heading {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
  .masthead .masthead-subheading {
    font-size: 1.5rem;
  }
}</style>