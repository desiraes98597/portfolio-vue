<template>
    <NavPageBlog />
    <section class="page-section bg-primary text-white mb-0" id="blog">
        <div class="container">
            <!-- About Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-white">
                Hello {{ name }}, Welcome to the Blog page</h2>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
        </div>
    </section>

    <FooterDiv />

</template>

<script>


// import NavPage from './NavPage.vue'
import NavPageBlog from './NavPageBlog.vue'
import FooterDiv from './FooterDiv.vue'
export default {
    name: "BlogPage",
    data() {
        return {
            name: ''
        }
    },
    components: {
        NavPageBlog,
        FooterDiv
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }
    }

}
</script>

<style scoped>
.page-section .page-section-heading {
    padding-top: 6rem;
}
</style>