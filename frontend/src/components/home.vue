<template>
<div>
<article class="media">
 <div class="media-content">
    <div class="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
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
<div class="field">
  <label class="label">title</label>
  <p class="control">
    <input class="input" type="text" placeholder="title">
  </p>
</div>
<div class="field">
  <label class="label">Post</label>
  <p class="control">
    <textarea class="textarea" placeholder="post"></textarea>
  </p>
</div>
<div class="field is-grouped">
  <p class="control">
    <button class="button is-primary">post</button>
  </p>
</div>
</div>
</div>
</template>
<script>

export default {
  name:'home',
  data(){
    return {
      posts:[]

    }
  },
  methods:{



  },
   computed:{

  },
  mounted(){
    this.$http.get('http://localhost:1337/post').then(res=>{
    this.posts=res.body
    })
  }
}



</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->


