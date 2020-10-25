<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h3 class="title is-4">分析結果</h3>

        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">文字数</p>
              <p class="title">{charcterCount}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">最も使用された文字</p>
              <p class="title">{top1_charcter}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">最も使用された指</p>
              <p class="title">{top1_finger}</p>
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
                    <li>{top1_finger}</li>
                    <li>{top2_finger}</li>
                    <li>{top3_finger}</li>
                    <li>{top4_finger}</li>
                    <li>{top5_finger}</li>
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
                    <li>{top1_charcter}</li>
                    <li>{top2_charcter}</li>
                    <li>{top3_charcter}</li>
                    <li>{top4_charcter}</li>
                    <li>{top5_charcter}</li>
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
export default {
  name: 'TextOverview'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
