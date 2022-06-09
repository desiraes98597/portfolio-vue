<template>
<NavPageBlog />
 <section class="page-section bg-primary text-white mb-0" id="blog">
            <div class="container">
                <!-- About Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-white">
                    Hello {{name}}, Welcome to the Blog page</h2>
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

// $(document).ready(function(){
// const postData = [
//     {
//       title: "Teach Your Dog To Fetch!",
//       content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
//       content1: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
//       photo: "images/blog-1.jpg",
//     },
//     {
//       title: "How To Walk Multiple Dogs",
//       content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
//       content1: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
//       photo: "images/blog-2.jpg",
//     },
//     {
//       title: "Traveling With Your Dog",
//       content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
//       content1: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
//       photo: "images/blog-3.jpg",
//     },
//   ];
  
  // let dogBlog = $('#blogArticles');
  
 
//   for (let i = 0; i < postData.length; i += 1) {
//     const field = postData[i];
//   let dogBlog = document.getElementById("blogArticles");

    // const dogBlog = $('#blogArticles');
   
    // const main = document.createElement("main");
    // $('main').addClass("main");
  
    // const columnLeft = document.createElement("div");
    // $('columnLeft').addClass("blogimage" );
  
    // const imageContainer = document.createElement("div");
    // $('imageContainer').addClass("blogimage");
  
    // const photo = document.createElement("img");
    // $('photo').addClass("photo");
    // photo.src = field.photo;
  
    // const columnRight = document.createElement("div");
    // $('columnRight').addClass("bloglabel");
  
    // const columnRight1 = document.createElement("div");
    // $('columnRight1').addClass("bloglabel2");
  
    // const title = document.createElement("h3");
    // title.textContent = field.title;
  
    // const content = document.createElement("p");
    // content.textContent = field.content;
  
    // const content1 = document.createElement("p");
    // content1.textContent = field.content1;
  
  
  
    // $(dogBlog).appendChild(main);
   
    
  
//     dogBlog.appendChild(main);
//     main.appendChild(columnLeft);
//     main.appendChild(columnLeft);
//     columnLeft.appendChild(imageContainer);
//     imageContainer.appendChild(photo);
//     main.appendChild(columnRight);
//     main.appendChild(columnRight1);
//     columnRight.appendChild(title);
//     columnRight.appendChild(content);
//     columnRight.appendChild(content1);
//     dogBlog.appendChild(main);
//   }
  
//   function displayPosts() {
//     var article = document.createElement("main");
//     var textnode = document.createElement("h3");
//     main.appendChild(textnode);
//     document.getElementById("dogBlog").appendChild(main);
//   }
  
// });





// import NavPage from './NavPage.vue'
import NavPageBlog from './NavPageBlog.vue'
import FooterDiv from './FooterDiv.vue'
export default {
    name:"BlogPage",
     data(){
      return {
        name:''
      }
    },
    components:{
       NavPageBlog,
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
    padding-top:6rem;
}



</style>