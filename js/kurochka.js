const var1word = $('.jsvar1')
const var2word = $('.jsvar2')
const var3word = $('.jsvar3')
const var4word = $('.jsvar4')
const var5word = $('.jsvar5')
const var6word = $('.jsvar6')
const speachword = $('.jsspeach')

const btncreate = $('.jsbtn-create')
const btnreplace = $('.jsbtn-replace')
const textFairy = $('.jstext')

const startText = {
    "text":[
        "Жили-были {var1} да {var2}","Была у них {var3}",
        "Снесла {var3} {var4}, не простое - золотое",
        "- {var1} бил, бил - не разбил", "- {var2} била, била - не разбила",
        "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
        "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
    ]
};

btncreate.click(function() {
    textFairy.html(startText.text);
  })

  btnreplace.click(function() {
    const var1 = var1word.val();
    const var2 = var2word.val();
    const var3 = var3word.val();
    const var4 = var4word.val();
    const var5 = var5word.val();
    const var6 = var6word.val();
    const speach = speachword.val();


    const newText = {
        "text":[
          `Жили-были ${var1} да ${var2}`,
          `Была у них ${var3}`,
          `Снесла ${var3} ${var4}, не простое - золотое`,
          `- ${var1} бил, бил - не разбил`,
          `- ${var2} била, била - не разбила`,
          `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
          `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
          `${speach}`,
        ]
      };

      textFairy.html(newText.text);
    })
