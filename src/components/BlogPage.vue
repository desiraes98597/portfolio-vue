<template>
<NavPage />
<h1>Hello {{name}}, Welcome to the Blog page</h1>
<h1>Hello {{name}}, Welcome to the Blog page</h1>
<h1>Hello {{name}}, Welcome to the Blog page</h1>
<FooterDiv />

</template>

<script>
import NavPage from './NavPage.vue'
import FooterDiv from './FooterDiv.vue'
export default {
    name:"BlogPage",
     data(){
      return {
        name:''
      }
    },
    components:{
       NavPage,
       FooterDiv
       },
       mounted()
        {
            let user=localStorage.getItem('user-info');
             this.name=JSON.parse(user).name;
            if(!user)
            {
                this.$router.push({name:"SignUp"})
            }
        }
    
}
</script>

<style scoped>
.page-section .page-section-heading {
    padding-top:3rem;
}



</style>