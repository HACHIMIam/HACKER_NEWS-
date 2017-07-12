<template>
  <div class="hello">
<div class="jumbotron">
  <h1>welcome</h1>
  <p>login</p>
 <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
</div>
</div>

</template>
<script>



export default {

  name: 'hello',
  components:{
  },
  data () {

    return {
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      },
       url:'http://localhost:1337/auth/facebook/callback',


    }
  },
  methods:{
  onSignInSuccess (response,req) {
      let vm=this
      FB.api('/me', res => {
      this.$http.post(vm.url,{name:res.name,id:res.id}).then( (response) => {

        console.log(response.body.token)
      },(error)=>{
        console.log(error)
      })
      })
  //     this.$http.post(this.action, data)
  // .then( (response) => {
  //   this.handleSuccess(response);
  // }, (error) => {
  //   this.handleError(error);
  // });

    },

    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
  }



</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

