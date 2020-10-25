<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          CharcterCounter
        </h1>
        <h2 class="subtitle">
          数字やアルファベットで書かれたテキストを分析します
        </h2>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h4 class="title is-4">
          テキストの入力
        </h4>
        <div class="control">
          <textarea v-model="inputText" v-on:change="analyse" class="textarea is-primary has-fixed-size" placeholder="ここにアルファベットもしくは数字を入力"></textarea>
        </div>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h3 class="title is-4">分析結果</h3>

        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">文字数</p>
              <p class="title">{{inputText.length}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">最も使用された文字</p>
              <p class="title">{{top_charcter}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">最も使用された指</p>
              <p class="title">{{top_finger}}</p>
            </div>
          </div>
        </nav>

        <div class="columns">
          <div class="column">
            <article class="message is-primary">
              <div class="message-header">
                <p>各指の使用頻度TOP5</p>
              </div>
              <div class="message-body">
                <div class="content">
                  <ol>
                    <!-- <li>{{hands[data[0].hands]}}, {{finger[data[0].finger]}}</li>
                    <li>{{hands[data[1].hands]}}, {{finger[data[1].finger]}}</li>
                    <li>{{hands[data[2].hands]}}, {{finger[data[2].finger]}}</li>
                    <li>{{hands[data[3].hands]}}, {{finger[data[3].finger]}}</li>
                    <li>{{hands[data[4].hands]}}, {{finger[data[4].finger]}}</li> -->
                  </ol>
                </div>
              </div>
            </article>
          </div>
          <div class="column">
            <article class="message is-primary">
              <div class="message-header">
                <p>使用された文字TOP5</p>
              </div>
              <div class="message-body">
                <div class="content">
                  <ol>
                    <!-- <li>{{data[0].charcter[0]}}</li>
                    <li>{{data[1].charcter[0]}}</li>
                    <li>{{data[2].charcter[0]}}</li>
                    <li>{{data[3].charcter[0]}}</li>
                    <li>{{data[4].charcter[0]}}</li> -->
                  </ol>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let hands = ["左手", "右手"];
let finger = ["小指", "薬指", "中指", "人差し指", "親指"]
let data = [
  {
    charcter: ['a', 'A'],
    hand: 0,
    finger: 0,
    count: 0
  },
  {
    charcter: ['b', 'B'],
    hand: 0,
    finger: 3,
    count: 0
  },
  {
    charcter: ['c', 'C'],
    hand: 0,
    finger: 2,
    count: 0
  },
  {
    charcter: ['d', 'D'],
    hand: 0,
    finger: 2,
    count: 0
  },
  {
    charcter: ['e', 'E'],
    hand: 0,
    finger: 2,
    count: 0
  },
  {
    charcter: ['f', 'F'],
    hand: 0,
    finger: 3,
    count: 0
  },
  {
    charcter: ['g', 'G'],
    hand: 0,
    finger: 3,
    count: 0
  },
  {
    charcter: ['h', 'H'],
    hand: 1,
    finger: 3,
    count: 0
  },
  {
    charcter: ['i', 'I'],
    hand: 1,
    finger: 2,
    count: 0
  },
  {
    charcter: ['j', 'J'],
    hand: 1,
    finger: 3,
    count: 0
  },
  {
    charcter: ['k', 'K'],
    hand: 1,
    finger: 2,
    count: 0
  },
  {
    charcter: ['l', 'L'],
    hand: 1,
    finger: 1,
    count: 0
  },
  {
    charcter: ['m', 'M'],
    hand: 1,
    finger: 3,
    count: 0
  },
  {
    charcter: ['n', 'N'],
    hand: 1,
    finger: 3,
    count: 0
  },
  {
    charcter: ['o', 'O'],
    hand: 1,
    finger: 2,
    count: 0
  },
  {
    charcter: ['p', 'P'],
    hand: 0,
    finger: 1,
    count: 0
  },
  {
    charcter: ['q', 'Q'],
    hand: 0,
    finger: 0,
    count: 0
  },
  {
    charcter: ['r', 'R'],
    hand: 0,
    finger: 3,
    count: 0
  },
  {
    charcter: ['s', 'S'],
    hand: 0,
    finger: 1,
    count: 0
  },
  {
    charcter: ['t', 'T'],
    hand: 0,
    finger: 3,
    count: 0
  },
  {
    charcter: ['u', 'U'],
    hand: 1,
    finger: 3,
    count: 0
  },
  {
    charcter: ['v', 'V'],
    hand: 0,
    finger: 3,
    count: 0
  },
  {
    charcter: ['w', 'W'],
    hand: 0,
    finger: 1,
    count: 0
  },
  {
    charcter: ['x', 'X'],
    hand: 0,
    finger: 1,
    count: 0
  },
  {
    charcter: ['y', 'Y'],
    hand: 1,
    finger: 3,
    count: 0
  },
  {
    charcter: ['z', 'Z'],
    hand: 0,
    finger: 0,
    count: 0
  },
  {
    charcter: ["shift"],
    hand: 0,
    finger: 0,
    count: 0
  }
];

// let topdata = [
//   {
//     finger = "",
//     charcter = ""
//   },
//   {
//     finger = "",
//     charcter = ""
//   },
//   {
//     finger = "",
//     charcter = ""
//   },
//   {
//     finger = "",
//     charcter = ""
//   },
//   {
//     finger = "",
//     charcter = ""
//   },
// ]

export default {
  name: 'TextImport',
  data() {
    // for (let index = 0; index < 5; index++) {
    //     topdata[index].finger = "";
    //     topdata[index].charcter = "";
    // }
    // top_charcter: data[0].charcter
    // top_finger: hands[data[0].hand] + ", " + finger[data[0].finger]
    return {
      inputText: "",
      top_charcter: data[0].charcter[0],
      top_finger: hands[data[0].hand] + ", " + finger[data[0].finger]
    };
  },
  watch: {
    // inputText(inputText) {
    //   this.inputText = this.charaLimit(inputText);
    // }
    // inputText(inputText){
    //   this.inputText = this.analyseText(inputText);
    //   this.listReload();
    // }
  },
  methods: {
    // charaLimit(inputText) {
    //   return inputText.length > 5 ? inputText.slice(0, -1) : inputText;
    // }

    analyse(){
      this.analyseText(this.inputText);
      this.listReload();
    },
    getLast1char(inputText){
      return inputText.slice(-1);
    },

    analyseText(inputText){
      let lastChar = this.getLast1char(inputText);

      // 大文字か比較
      // function isUpperCase = lastChar => {
      if(/^[A-Z]+$/g.test(lastChar)){
        // 大文字であれば小文字へ修正
        lastChar.toLowerCase();
        // shiftのカウントをアップさせる
        data[26].count++;
        // return true;
      }
      // }

      // dataの末尾にshiftが入っているのでその分を取り除く
      for(let i = 0; i < 26; i++){
        if(lastChar === data[i].charcter[0]){
          data[i].count++;
          break;
        }
      }
    },

    listReload(){
      data.sort(function(a,b){
        if(a.count < b.count) return -1;
        if(a.count > b.count) return 1;
        return 0;
      });

      this.top_finger = hands[data[0].hand] + ", " + finger[data[0].finger];
      this.top_charcter = data[0].charcter;
    }
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
