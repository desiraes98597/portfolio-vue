<template>
    <img class="logo" src="../assets/img/bella1.jpg">
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="login"> Log In</button>
        <p>
            <router-link to="/sign-up">Sign up</router-link>
        </p>

    </div>
</template>

<script>
// import { logicalExpression } from '@babel/types'
import axios from 'axios'
export default {
    name: 'LogIn',
    data() 
    {
        return {
            email: '',
            password: ''
        }
 
},
methods: {
    async login()
    {
        let result = await axios.get (
           `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )

        if(result.status==200 && result.data.length>0)
                {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                    this.$router.push({name:'HomePage'})
         }
        console.warn(result)
    }
},
     mounted()
        {
            let user=localStorage.getItem('user-info');
            if(user)
            {
                this.$router.push({name:"HomePage"})
            }
        }

};



</script>

<style scoped>
.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid purple;

}

.login button {
    width: 320px;
    height: 40px;
    /* border: 1 px solid purple; */
    background: purple;
    color: white;
    cursor: pointer;

}
</style>