<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          SentenceAnalyser
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
          <textarea v-model="inputText" @input="analyse" class="textarea is-primary has-fixed-size" placeholder="ここにアルファベットもしくは数字を入力"></textarea>
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
                    <li>{{top_finger}}</li>
                    <li>{{finger_2}}</li>
                    <li>{{finger_3}}</li>
                    <li>{{finger_4}}</li>
                    <li>{{finger_5}}</li>
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
                    <li>{{top_charcter}}</li>
                    <li>{{charcter_2}}</li>
                    <li>{{charcter_3}}</li>
                    <li>{{charcter_4}}</li>
                    <li>{{charcter_5}}</li>
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
let finger = ["小指", "薬指", "中指", "人差し指", "親指"];
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
  },
  {
    charcter: ["space"],
    hand: 0,
    finger: 4,
    count: 0
  },
  {
    charcter: ['1'],
    hand: 0,
    finger: 0,
    count: 0
  },
  {
    charcter: ['2'],
    hand: 0,
    finger: 1,
    count: 0
  },
  {
    charcter: ['3'],
    hand: 0,
    finger: 2,
    count: 0
  },
  {
    charcter: ['4'],
    hand: 0,
    finger: 3,
    count: 0
  },
  {
    charcter: ['5'],
    hand: 0,
    finger: 3,
    count: 0
  },
  {
    charcter: ['6'],
    hand: 1,
    finger: 3,
    count: 0
  },
  {
    charcter: ['7'],
    hand: 1,
    finger: 3,
    count: 0
  },
  {
    charcter: ['8'],
    hand: 1,
    finger: 2,
    count: 0
  },
  {
    charcter: ['9'],
    hand: 1,
    finger: 1,
    count: 0
  },
  {
    charcter: ['0'],
    hand: 1,
    finger: 0,
    count: 0
  },
];

let finger_data = [
  {
    hands: 0,
    finger: 0,
    counter: 0
  },
  {
    hands: 0,
    finger: 1,
    counter: 0
  },
  {
    hands: 0,
    finger: 2,
    counter: 0
  },
  {
    hands: 0,
    finger: 3,
    counter: 0
  },
  {
    hands: 0,
    finger: 4,
    counter: 0
  },
  {
    hands: 1,
    finger: 0,
    counter: 0
  },
  {
    hands: 1,
    finger: 1,
    counter: 0
  },
  {
    hands: 1,
    finger: 2,
    counter: 0
  },
  {
    hands: 1,
    finger: 3,
    counter: 0
  },
  {
    hands: 1,
    finger: 4,
    counter: 0
  },
]

export default {
  name: 'TextImport',
  data() {
    // for (let index = 0; index < 5; index++) {
    //     topdata[index].finger = "";
    //     topdata[index].charcter: "";
    // }
    // top_charcter: () => {
    //   return data[0].charcter;
    // }
    // top_finger: hands[data[0].hand] + ", " + finger[data[0].finger]
    return {
      inputText: "",
      top_charcter: "---",
      top_finger: "---",

      charcter_2: "---",
      charcter_3: "---",
      charcter_4: "---",
      charcter_5: "---",

      finger_2: "---",
      finger_3: "---",
      finger_4: "---",
      finger_5: "---",
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

    analyse: function (){
      // console.log("配列:");
      // console.log(data);
      if(this.inputText !== null && this.inputText !== ""){
        this.analyseText(this.inputText);
        this.listReload();
      }else{
        this.init();
      }
    },

    getLast1char(inputText){
      return inputText.slice(-1);
    },

    analyseText(inputText){
      let lastChar = this.getLast1char(inputText);

      // 大文字か比較
      if(/^[A-Z]+$/g.test(lastChar)){
        // 大文字であれば小文字へ修正
        lastChar = lastChar.toLowerCase();
        // shiftのカウントをアップさせる
        for(let i = 0; i < data.length; i++){
          if(data[i].charcter[0] === "shift"){
            data[i].count++;
            break;
          }
        }
      }

      // スペースかどうかの比較
      if(lastChar === " "){
        console.log("space");
        for(let i = 0; i < data.length; i++){
          if(data[i].charcter[0] === "space"){
            data[i].count++;
            break;
          }
        }
      }


      // カウントアップ
      for(let i = 0; i < data.length; i++){
        if(lastChar === data[i].charcter[0]){
          data[i].count++;
          break;
        }
      }
      // 指のカウントアップ
      let tmpFigArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
      for(let i = 0; i < data.length; i++){
        let tmp = 0;
        if(data[i].hand === 1){
          tmp = 5;
        }
        tmp += data[i].finger;
        tmpFigArr[tmp] += data[i].count;
      }
      this.finger_init();
      // カウントアップデータの反映
      for(let i = 0; i < finger_data.length; i++){
        finger_data[i].counter = tmpFigArr[i];
      }
    },

    listReload(){
      // data.sort(function(a,b){
      //   console.log("a: "+ );
      //   console.log("b: "+ b);
      //   if(a.count < b.count) return -1;
      //   if(a.count > b.count) return 1;
      //   return 0;
      // });

      // 文字
      //調べる範囲の開始位置を１つずつ後ろへ移動するfor文
      for(let i = 0; i < data.length; i++){
          //後ろから前に向かって小さい値を浮かび上がらせるfor文
          for(let j = data.length-1; j > i ; j-- ){
              //隣りあう２つの値を比べて、後ろが小さければ交換する
              if(data[j].count > data[j-1].count){
                  let tmp = data[j];
                  data[j] = data[j-1];
                  data[j-1] = tmp;
              }
          }
      }
      // 指
      //調べる範囲の開始位置を１つずつ後ろへ移動するfor文
      for(let i = 0; i < finger_data.length; i++){
          //後ろから前に向かって小さい値を浮かび上がらせるfor文
          for(let j = finger_data.length-1; j > i ; j-- ){
              //隣りあう２つの値を比べて、後ろが小さければ交換する
              if(finger_data[j].counter > finger_data[j-1].counter){
                  let tmp = finger_data[j];
                  finger_data[j] = finger_data[j-1];
                  finger_data[j-1] = tmp;
              }
          }
      }

      this.top_finger = hands[finger_data[0].hands] + ", " + finger[finger_data[0].finger] + " (" + finger_data[0].counter + "回)";
      this.top_charcter = data[0].charcter[0] + " (" + data[0].count + "回)";

      if(data[1].count === 0){
        this.charcter_2 = "---";
      }else{
        this.charcter_2 = data[1].charcter[0] + " (" + data[1].count + "回)";
        if(data[2].count === 0){
          this.charcter_3 = "---";
        }else{
          this.charcter_3 = data[2].charcter[0] + " (" + data[2].count + "回)";
          if(data[3].count === 0){
            this.charcter_4 = "---";
          }else{
            this.charcter_4 = data[3].charcter[0] + " (" + data[3].count + "回)";
            if(data[4].count === 0){
              this.charcter_5 = "---";
            }else{
              this.charcter_5 = data[4].charcter[0] + " (" + data[4].count + "回)";
            }
          }
        }
      }

      if(finger_data[1].counter === 0){
        this.finger_2 = "---";
      }else{
        this.finger_2 = hands[finger_data[1].hands] + ", " + finger[finger_data[1].finger] + " (" + finger_data[1].counter + "回)";
        if(finger_data[2].counter === 0){
          this.finger_3 = "---";
        }else{
          this.finger_3 = hands[finger_data[2].hands] + ", " + finger[finger_data[2].finger] + " (" + finger_data[2].counter + "回)";
          if(finger_data[3].counter === 0){
            this.finger_4 = "---";
          }else{
            this.finger_4 = hands[finger_data[3].hands] + ", " + finger[finger_data[3].finger] + " (" + finger_data[3].counter + "回)";
            if(finger_data[4].counter === 0){
              this.finger_5 = "---";
            }else{
              this.finger_5 = hands[finger_data[4].hands] + ", " + finger[finger_data[4].finger] + " (" + finger_data[4].counter + "回)";
            }
          }
        }
      }
    },

    finger_init() {
      finger_data = [
        {
          hands: 0,
          finger: 0,
          counter: 0
        },
        {
          hands: 0,
          finger: 1,
          counter: 0
        },
        {
          hands: 0,
          finger: 2,
          counter: 0
        },
        {
          hands: 0,
          finger: 3,
          counter: 0
        },
        {
          hands: 0,
          finger: 4,
          counter: 0
        },
        {
          hands: 1,
          finger: 0,
          counter: 0
        },
        {
          hands: 1,
          finger: 1,
          counter: 0
        },
        {
          hands: 1,
          finger: 2,
          counter: 0
        },
        {
          hands: 1,
          finger: 3,
          counter: 0
        },
        {
          hands: 1,
          finger: 4,
          counter: 0
        },
      ];
    },

    init(){
      this.finger_init();
      data = [
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
        },
        {
          charcter: ["space"],
          hand: 0,
          finger: 4,
          count: 0
        },
        {
          charcter: ['1'],
          hand: 0,
          finger: 0,
          count: 0
        },
        {
          charcter: ['2'],
          hand: 0,
          finger: 1,
          count: 0
        },
        {
          charcter: ['3'],
          hand: 0,
          finger: 2,
          count: 0
        },
        {
          charcter: ['4'],
          hand: 0,
          finger: 3,
          count: 0
        },
        {
          charcter: ['5'],
          hand: 0,
          finger: 3,
          count: 0
        },
        {
          charcter: ['6'],
          hand: 1,
          finger: 3,
          count: 0
        },
        {
          charcter: ['7'],
          hand: 1,
          finger: 3,
          count: 0
        },
        {
          charcter: ['8'],
          hand: 1,
          finger: 2,
          count: 0
        },
        {
          charcter: ['9'],
          hand: 1,
          finger: 1,
          count: 0
        },
        {
          charcter: ['0'],
          hand: 1,
          finger: 0,
          count: 0
        },
      ];
      this.top_finger = "---";
      this.top_charcter = "---";
      this.charcter_2 = "---";
      this.charcter_3 = "---";
      this.charcter_4 = "---";
      this.charcter_5 = "---";

      this.finger_2 = "---";
      this.finger_3 = "---";
      this.finger_4 = "---";
      this.finger_5 = "---";
    }
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
