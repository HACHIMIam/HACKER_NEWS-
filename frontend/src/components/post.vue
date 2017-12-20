<template>
<div class="post">
<div class="field" :class="{error: validation.hasError('title')}" >
  <label class="label">title</label>
  <p class="control">
    <input class="input" type="text" placeholder="title" v-model="title">
  </p>
  <div class="message">{{ validation.firstError('title') }}</div>

</div>
<div class="field" :class="{error: validation.hasError('body')}">
  <label class="label">Post</label>
  <p class="control">
    <textarea class="textarea" placeholder="post" v-model="body"></textarea>
  </p>
    <div class="message danger">{{ validation.firstError('body') }}</div>

</div>
<div class="field is-grouped">
  <p class="control">
    <button class="button is-primary" @click="submit">post</button>
  </p>
</div>
</div>
</template>
<script>
    methods:{
 data(){
    return {
      posts:[],
      title:'',
      post:{},
      body:'',
      submitted: false
    }
  }
   submit: function () {

        this.submitted = true;
        let v=this
        let postt
        this.$validate()
          .then( (success) => {
             if (success) {
               v.post.title=v.title
               v.post.body=v.body
               v.post.author=localStorage.getItem('name');
               postt=v.post
               console.log(postt)
               this.$http.post('http://localhost:1337/post/',postt,{headers: {Authorization:localStorage.getItem('token')}}).then((res) => {
                 this.posts.push(res.body)
                    })
           }
          });
      }
  },
</script>
