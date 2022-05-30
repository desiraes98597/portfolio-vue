<template>
<NavPage />
<h1>Hello user, Welcome to the Blog page</h1>
<h1>Hello user, Welcome to the Blog page</h1>
<h1>Hello user, Welcome to the Blog page</h1>
<FooterDiv />

</template>

<script>
import NavPage from './NavPage.vue'
import FooterDiv from './FooterDiv.vue'
export default {
    name:"BlogPage",
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

<style scoped>
.page-section .page-section-heading {
    padding-top:3rem;
}



</style>