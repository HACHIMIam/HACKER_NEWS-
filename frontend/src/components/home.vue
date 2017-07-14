<template>
<div>
<article class="media" v-for="item in posts">
 <div class="media-content">
    <div class="content">
      <p>
        <strong>{{item.title}}</strong> <small>@{{item.author}}</small>
        <br>
        {{item.body}}
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fa fa-comment"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fa fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
  </div>
</article>
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
</div>
</template>
<script>
import Vue from  'vue';
import SimpleVueValidation from 'simple-vue-validator'
Vue.use(SimpleVueValidation)
  const Validator = SimpleVueValidation.Validator;


export default {
  name:'home',
  Validator,
  data(){
    return {
      posts:[],
      title:'',
      post:{
        title:'jvdk'
      },
      body:'',
      submitted: false
    }
  },
  methods:{

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
  validators:{
     title: function (value) {
      return Validator.value(value).required();

      },
      body: function (value) {
        return Validator.value(value).required();

      }


  },
   computed:{

  },
 mounted(){
    this.$http.get('http://localhost:1337/post/',{headers: {Authorization:localStorage.getItem('token')}}).then(response => {

     this.posts.push(response.body);
     this.posts=this.posts[0];

  });
  }

}



</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->


