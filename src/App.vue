<template>
  <main>
    <div class="mt-5 container">
      <div class="row justify-content-center border py-5">

        <div class="col-5">
          <button @click="newSentence">New Sentence</button>
          <button>Button</button>
        </div>

        <div class="col-5">
          <h4 class="mb-3">Draggable 1</h4>
          <draggable class="draggable-list" :list="list1" group="my-group">
            <div class="list-item" v-for="element in list1" :key="element.name">
              {{ element.name }}
            </div>
          </draggable>
        </div>

        <div class="col-5">
          <h4 class="mb-3">Draggable 2</h4>
          <draggable class="draggable-list" :list="list2" group="my-group" @change='check'>
            <div class="list-item" :style="{'background-color' : color}" v-for="element in list2" :key="element.name">
              {{ element.name }}
            </div>
          </draggable>
        </div>

      </div>
    </div>
  </main>
</template>
<script>
import draggable from "vuedraggable";
import testSentences from '@/testSentences';
export default {
  components: {
    draggable,
  },
  data() {
    return {
      list1: [{ name: "Yo" }, { name: "Voy" }, { name: "a" }, { name: "ir" }, { name: "a" }, { name: "la" }, { name: "tienda" }],
      list2: [{ name: "I" }, { name: "am" }, { name: "going" }, { name: "to" }, { name: "the" }, { name: "store" }, ],
      list2Test: [{ name: "I" }, { name: "am" }, { name: "going" }, { name: "to" }, { name: "the" }, { name: "store" }, ],
      color: 'red',
    };
  },

  created() {
    console.log('created');
    this.list2 = [ { name: "am" }, { name: "I" }, { name: "going" }, { name: "to" }, { name: "the" }, { name: "store" }, ];
  },

  methods: {
    check() {
      console.log('changed');
      //this.list2.forEach((x) => console.log(x.name));
      if (this.list2.length === this.list2Test.length && this.list2.every((value, index) => value.name === this.list2Test[index].name)) {
        console.log('equal');
        this.color = 'green';
      } else {
        this.color = 'red';
      }
      //console.dir(this.list2);
    },

    newSentence() {
      //alert("new sentence");
      const test = testSentences.getExample();
      this.list1 = test.list1;
      this.list2 = test.list2;
      this.list2Test = test.list2Test;
      this.check();
    }
  }
};
</script>
<style scoped>
.draggable-list {
  background: #3f51b5;
  color: #fff;
  border: 1px solid;
  height: 50vh;
}
.list-item {
  margin: 10px;
  padding: 40px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  background: #f44336;
  display: inline-block;
}
</style>