<template>
  <div class="container">
    <div class="container-item">
      <h2>Option Api</h2>
      &lt;<span class="green">template</span>&gt;<br />
      &nbsp;&nbsp;&lt;!-- template code --&gt;<br />
      &lt;/<span class="green">template</span>&gt; <br />

      &lt;<span class="green">script</span>&gt;<br />
      export default { <br />
      &nbsp;&nbsp;name: "App", <br />
      &nbsp;&nbsp;props: { /*...*/ }, <br />
      &nbsp;&nbsp;components: { /*...*/ }, <br />
      &nbsp;&nbsp;data(){ return { /*...*/ } }, <br />
      &nbsp;&nbsp;computed:{ /*...*/ }, <br />
      &nbsp;&nbsp;watch:{ /*...*/ }, <br />
      &nbsp;&nbsp;methods: { /*...*/ }, <br />
      &nbsp;&nbsp;created(){ /*...*/ }, <br />
      &nbsp;&nbsp;mounted(){ /*...*/ } <br />
      }; <br />
      &lt;/<span class="green">script</span>&gt;
    </div>
    <div class="container-item">
      <h2>Composition Api</h2>
      &lt;<span class="green">template</span>&gt; <br />
      &nbsp;&nbsp;&lt;!-- your template code --&gt; <br />
      &lt;/<span class="green">template</span>&gt; <br />
      &lt;<span class="green">script</span>&gt; <br />
      export default {<br />
      &nbsp;&nbsp;name: "App", <br />
      &nbsp;&nbsp;props: { /*...*/ }, <br />
      &nbsp;&nbsp;components: { /*...*/ }, <br />
      &nbsp;&nbsp;setup() { <br />
      &nbsp;&nbsp;&nbsp;&nbsp;// more code to write<br />
      &nbsp;&nbsp;} }; <br />
      &lt;/<span class="green">script</span>&gt;
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.container-item {
  width: 300px;
  padding: 50px;
}

.green {
  color: green;
}
</style>