const storyEl = document.getElementById('story-text');
const interactionEl = document.getElementById('interaction-area');
let player = {
    name: "",
    power: 0,
    family: 0,
    mystery: 0,
    favor_prince: 0,
    favor_knight: 0,
    achievements: [],
    east: false
};

function updateStats() {
    document.getElementById('stat-name').innerHTML = player.name;
    document.getElementById('stat-prince').innerHTML = player.favor_prince;
    document.getElementById('stat-knight').innerHTML = player.favor_knight;
    document.getElementById('stat-power').innerHTML = player.power;
    document.getElementById('stat-family').innerHTML = player.family;
    document.getElementById('stat-mystery').innerHTML = player.mystery;
}

function writeStory(text) {
    storyEl.innerHTML = text;
}

// 初始化啟動
initGame();

// --- 遊戲流程 ---

function initGame() {
    updateStats();
    writeStory("歡迎來到冠冕。<br>在開始這段命運之前，請告訴我妳的名字。");
    
    interactionEl.innerHTML = `
        <div>
            <input type="text" id="nameInput" placeholder="輸入名字">
            <button onclick="startGame()">確認</button>
        </div>
    `;
}

function startGame() {
    const input = document.getElementById('nameInput').value;
    if (input) player.name = input;
    updateStats();
    chapter0();
}

function chapter0() {
    writeStory(`你是羅維恩公爵失散多年的親生女兒。<br>十六年前，你因為一場叛亂與大火流落民間。<br>如今，你被接回公爵府，府中那位被寵愛了十六年的「千金小姐」，是所有人眼中的完美貴族象徵。<br>她優雅、美麗、深得上流社會認可。<br>而你，只有一段模糊的過去與羅維恩家族的血統。 <br><br>國王正在尋找王國未來的王后，你與假千金，只能有一人站上王后之位。<br>你能在這座以權力與秩序編織的宮廷裡走到最後嗎？`);
    interactionEl.innerHTML = `
        <button onclick="chapter1_0()">[ 開始遊戲 ]</button>
    `;
}

// 第一章
// 第一章：馬車場景
function chapter1_0() {
    writeStory(`【 第一章 】<br><br>時間：1452年深秋 ，地點：通往帝都的馬車<br><br>窗外的景色飛速後退，枯黃的落葉被馬蹄踏碎。妳坐在裝飾華麗卻冰冷的馬車內，指尖不自覺地摩挲著粗糙的修道院長袍。那是妳與過去唯一的聯繫。<br>「小姐，」隨行的老管家咳嗽了一聲，語氣冷淡：「請記住，進入公爵府後，您不再是修道院的『無名者』。您是羅維恩公爵家的長女。至於莉薇安小姐……她是您的妹妹。請務必維持體面。」<br><br>權力地位：5 社交界對妳一無所知，甚至有人在暗中嘲笑妳的修女背景<br>家族認可：10 公爵承認妳的身份，但目前僅視妳為「聯姻工具」<br>？？：0 妳尚未被<span class='glitch'>cPxj6J6o</span>的惡意侵蝕
    `);
    player.power += 5; player.family += 10;
    updateStats();
    
    // 加入轉換場景按鈕
    interactionEl.innerHTML = `
        <button onclick="chapter1_1()">[ 抵達公爵府 ]</button>
    `;
}

// 第一章：抵達公爵府（莉薇安出現）
function chapter1_1() {
    writeStory(`地點：公爵家大門口<br><br>馬車停在了宏偉的石柱前。公爵夫婦已在門口等候。<br>羅維恩公爵他審視你的目光像是在評估一件新入庫的商品：「回來就好。教會把你教導得很安靜，很好。」<br>公爵夫人則顯得有些侷促，她想上前握你的手，卻在半路縮了回去，轉而看向身側。那正是這十六年代替妳的假千金——莉薇安。她穿著時下最流行的淡藍色絲綢長裙，笑容完美得無可挑剔。<br><br>「姐姐，」莉薇安提起裙擺，行了一個優雅至極的宮廷禮，「這十六年來，辛苦妳在外面受苦了。以後，這裡就是妳的家，我會幫妳適應這一切的。」<br><br>面對莉薇安那完美到近乎虛假的歡迎，以及父母的注視，你的第一步打算怎麼做？`);
    
    interactionEl.innerHTML = `
        <button onclick="choice1('A')">【安靜接受】 </button>
        <button onclick="choice1('B')">【冷靜觀察】 </button>
        <button onclick="choice1('C')">【尋求依賴】 </button>
    `;
}

function choice1(type) {
    if(type === 'A') { 
        writeStory(`你微微低頭避開視線，輕聲回禮：「謝謝妹妹，我會努力學習規矩的。」<br>公爵滿意地點了點頭：「很好，看來修道院至少教會了妳什麼是分寸。莉薇安，這幾天妳就多費心，別讓她在下週的皇家茶會上出醜。」<br>莉薇安親暱地挽起你的手，湊近你耳邊吐氣如蘭，聲音卻冷得沒有溫度：「姐姐這麼聰明，一定學得很快的。畢竟……妳也不想再回到那個貧窮的修道院吧？」<br>你感覺到她的指甲輕輕陷入你的手臂，這是一次無聲的警告。<br><br><b>家族對妳的態度似乎緩和了一點，妳在貴族圈中的存在感稍微提高</b>`);
        player.family += 5; player.power += 5; }
    if(type === 'B') { 
        writeStory(`妳直視莉薇安的眼睛，沉默片刻後點頭示意。<br>現場氣氛僵持了幾秒。莉薇安的笑容僵在臉上，她沒想到一個鄉下長大的女孩竟敢這樣直視她。 <br>公爵夫人有些不安地絞著手帕：「這孩子……這眼神怎麼跟公爵年輕時一模一樣……」 <br>莉薇安很快恢復優雅，掩嘴輕笑：「姐姐的眼神真凌厲，看來修道院的生活讓妳變得很堅強呢。以後在宮廷裡，這種『個性』可要好好收斂才行。」<br><br><b>一種說不清的違和感在心底閃過，妳的影響力正在逐漸擴大，家族對妳的態度似乎冷淡了一些</b>`);
        player.power += 10; player.mystery += 5; player.family -= 5; }
    if(type === 'C') { 
        writeStory(`妳略顯侷促地看向公爵夫人：「母親，修道院的老師說過，血緣是斷不開的……我終於見到您了。」<br>公爵夫人眼眶瞬間泛紅，下意識想上前擁抱你，卻在眼角餘光瞥見公爵冰冷的臉色時止住了腳步。 「好、好孩子……」夫人聲音顫抖，避開了你的視線，「回來就好，先去洗漱吧，那些粗糙的衣服別再穿了。」<br>莉薇安看著這一幕，眼底閃過一絲陰霾。她挽住夫人的另一隻手臂，撒嬌道：「媽媽，我也好想妳呀，今天為了等姐姐，我連點心都沒吃呢。」 夫人立刻轉過頭去安撫莉薇安，你剛伸出的手尷尬地停在半空。<br><br><b>家族對妳的評價明顯提升</b>`);
        player.family += 10 }
    updateStats();
    interactionEl.innerHTML = `
        <button onclick="choice1_result()">繼續</button>
    `;

}

function choice1_result() {
    writeStory(`公爵微微點頭，隨後轉身走向書房：「既然回來了，就別再提修道院的事。管家，帶大小姐去她的房間，換掉那身寒酸的衣服。明天皇太子殿下會來府上，莉薇安，妳負責教導她基本的宮廷禮儀。」<br>莉薇安微笑著走向妳，雖然眼神冰冷，但語氣依舊甜美：「姐姐，跟我來吧。公爵府的走廊很長，如果沒人帶路，妳可能會在這裡迷失一輩子的。」<br>妳被帶到了一個極盡奢華卻毫無溫度的房間。床頭擺著一套明日要穿的禮服。<br><br>深夜，妳在窗邊觀察著公爵府的守備。一名黑髮灰瞳的騎士巡邏至妳窗下的花園，他是羅倫斯。他停下腳步，對上妳的視線後，並沒有像其他僕人那樣露出嫌惡或好奇，而是行了一個標準的騎士禮。<br>「大小姐，如果您對這裡的環境感到不安，這是正常的。我是公爵府的護衛騎士羅倫斯。」他壓低聲音，「如果您需要任何幫助，或者是想念修道院的清靜⋯⋯」他的視線在妳身上停留得比禮節允許的時間更久。<br>「—我會在。」<br><br><b>【系統提示：觸發騎士初次交流】 騎士-羅倫斯好感度：10</b>`)
    player.favor_knight += 10
    updateStats();
    interactionEl.innerHTML = `
        <button onclick="chapter1_2()">繼續</button>
    `;
}

function chapter1_2(){
    writeStory(`次日，整座公爵府因為皇太子的到訪而騷動。皇太子艾德里安帶著溫柔的微笑走進大廳，他的目光在妳與莉薇安之間流轉，最後停留在妳身上。他銀髮閃耀，金色眼眸卻如深潭。<br>「這就是剛回家的${player.name}大小姐嗎？」他伸出手，等待妳的吻手禮，「我對妳在修道院的經歷非常感興趣……」<br><br><b>【系統提示：觸發皇太子初次交流】皇太子-艾德里安好感度： 10</b><br><br>面對皇太子的試探，妳打算如何應對皇太子的主動搭話？`);
    player.favor_prince += 10
    updateStats();
    interactionEl.innerHTML = `
        <button onclick="choice1_2('A')">【守禮回應】 </button>
        <button onclick="choice1_2('B')">【敏銳回擊】 </button>
    `;
}

function choice1_2(type) {
    let resultText = "";
    if(type === 'A') { 
        resultText =`「見過殿下。修道院的生活枯燥平凡，恐怕會讓殿下失望。能回到公爵府為王國盡力，才是我的榮幸。」你低頭行禮，與他保持距離感。<br>艾德里安微微垂下銀色的眼睫，嘴角的弧度深了幾分：「枯燥嗎？我倒覺得能在那種安靜的地方長大，靈魂一定很純粹。真可惜，公爵領少了妳這麼多年。」 他用只有妳能聽見的聲音輕聲呢喃：「希望妳在公爵府，也能一直保持這份『安靜』。」<br>莉薇安在一旁看著，優雅地插入話題，將皇太子的注意力引向花園的佈置。<br><br><b>家族對妳的評價明顯提升，皇太子似乎對妳失去了一點興趣</b>`;
        player.family += 15; player.favor_prince -= 5; }
    if(type === 'B') { 
        resultText =`「殿下的興趣真是特別。如果您真的對過去的事情感興趣，也許教會的檔案室會比我更有價值。」你語氣平靜，像是在談論一件無關緊要的小事。<br><br>艾德里安的手指微微一僵，隨後發出了一聲低沉的輕笑。他金色的眼瞳深處閃過一抹難以捉摸的光芒，直勾勾地盯著妳。 「教會……確實是個好地方。」他收回手，語氣充滿玩味，「${player.name}小姐，妳比我想像中更有趣。」<br>莉薇安的臉色瞬間蒼白了一秒，她立刻上前拉住妳的衣袖：「姐姐，剛回府不久，有些話題還是不適合開玩笑呢。」她轉向皇太子，重新掛上完美的笑容，將話題自然地引向花園的佈置與今日的茶點。<br><br><b>家族對妳的態度似乎冷淡了一些，皇太子對妳產生了明顯的興趣，一種說不清的違和感在心底閃過</b>`;
        player.family -= 5; player.favor_prince += 10; player.mystery += 5; }
    let transitionText = `<br><br>與皇太子的初次交鋒後，現場的氣氛變得有些微妙。皇太子並沒有立刻離開，而是提出想在公爵府的後花園散散步，並點名由妳和莉薇安陪同。這是妳回歸公爵府後，第一次與「假千金」和「皇太子」同時進行非正式的長時間相處。`
    writeStory(resultText + transitionText);
    updateStats();
    interactionEl.innerHTML = `
        <button onclick="chapter1_3()">繼續</button>
    `;

}

function chapter1_3() {
    writeStory(`地點：公爵家的後花園<br><br>花園裡，莉薇安熟練地指揮著女僕準備紅茶與點心，每一處細節都展現了她身為「羅維恩大小姐」十六年的積累。而妳，作為剛從修道院回來的真千金，坐姿雖然端正，但在這奢華的環境中顯得有些格格不入。<br><br>皇太子艾德里安抿了一口茶，目光落在花園中央的一尊艾爾維拉女神雕像上，狀似無意地開口：「在修道院時，妳們每天都要向女神祈禱吧？莉薇安曾跟我提起，她最嚮往的就是像妳一樣，擁有一段純粹奉獻給神靈的時光。對吧，莉薇安？」<br>莉薇安輕笑著點頭，眼神卻帶著一絲憐憫看向妳：「是啊，可惜我身負公爵家的社交責任，無法親自去修道院陪伴姐姐。姐姐，妳在那裡每天除了祈禱，還會做些什麼呢？聽說……那裡的孤兒甚至要自己下地乾活？」<br><br>這是一個公開的處境：莉薇安在皇太子面前強調妳「粗鄙」的過去，試圖將妳定位成一個「高級僕人」。面對莉薇安的明嘲暗諷與皇太子的注視，妳打算如何應對？`)
    interactionEl.innerHTML = `
        <button onclick="choice1_3('A')">【平淡應對】 </button>
        <button onclick="choice1_3('B')">【軟中帶硬】 </button>
        <button onclick="choice1_3('C')">【保持沈默】 </button>
    `;
}

function choice1_3(type) {
    if (type === 'A') {
        writeStory(`「在那裡生活很規律，除了祈禱，我確實會幫忙修整草藥園。那些草藥能救助貧苦的人，對我而言，那是比舞會更有意義的事。」<br>艾德里安放下茶杯，眼神多了一絲暖意：「救人的草藥嗎？這比枯燥的繁文縟節有趣多了。羅維恩公爵，妳找回了一位心懷慈悲的女兒。」 莉薇安笑容僵了片刻，隨後勉強附和，心裡卻對妳這種「以退為進」的策略感到威脅。<br><br><b>妳的存在似乎被一些人刻意忽視，皇太子似乎對妳多了幾分注意</b>`)
        player.power -= 5; player.favor_prince += 5
    }
    if (type === 'B') {
        writeStory(`「確實如此。但比起勞作，我學到更多的是『誠實』。女神面前不容謊言，這也是為什麼我即便回到了這華麗的公爵府，依然能一眼看清什麼是真，什麼是假。」<br>艾德里安挑了挑眉，饒有興致地在妳與莉薇安之間打量：「『真與假』……這真是個深奧的話題。莉薇安，看來妳姐姐在修道院學到了很不得了的東西呢。」 莉薇安手心滲出了汗，她沒想到妳會直接把話題引向「真假」，她只能乾笑著轉移話題。<br><br><b>妳的影響力正在逐漸擴大，家族對妳的態度似乎冷淡了一些，皇太子似乎對妳多了幾分注意</b>`)
        player.power += 10; player.family -=5; player.favor_prince += 5
    }
    if (type === 'C') {
        writeStory(`妳不發一語，只是安靜地看著杯中晃動的紅茶映著破碎的光影，神情淡漠得彷彿與這一切無關。<br><br>氣氛一時變得有些尷尬。艾德里安見妳不答話，轉而與莉薇安聊起獵場的趣事。 就在這時，站在不遠處的羅倫斯不留痕跡地走上前，為妳添了一點熱茶，低聲說了一句：「這茶有些涼了，大小姐請保重身體。」他的動作擋住了莉薇安挑釁的視線。<br><br><b>妳的存在似乎被一些人刻意忽視，騎士對妳的信任明顯增加</b>`)
        player.power -= 5; player.favor_knight += 10
    }
    updateStats();
    interactionEl.innerHTML = `
        <button onclick="chapter2_1()">繼續</button>
    `;
}

// 第二章
function chapter2_1() {
    writeStory(`【 第二章 】<br><br>來到公爵家的第三天，為了正式確認妳的「羅維恩」身分，妳必須在公爵府的私人禮拜堂接受「聖水洗禮」。這不僅是宗教儀式，更是一場政治審查。<br><br>地點：禮拜堂<br><br>空氣中瀰漫著濃郁的沒藥與薰香味道。莉薇安站在公爵夫人身邊，身著潔白的祈禱裙，宛如聖女。而妳站在中央，面對著那位眼神銳利、彷彿能洞察靈魂的主教。<br>「${player.name} 羅維恩。」主教手中的權杖輕敲地面，發出沉悶的響聲，「在女神的見證下，妳的過去已隨風而逝。但妳的靈魂……是否已經準備好承擔起這個姓氏背後的沉重？」<br>他話音剛落，妳注意到他的眼神在妳那雙黯淡的綠色瞳孔上停留了許久。在洗禮過程中，主教要求妳將手伸入裝滿聖水的金盆，並對女神許下一個誓言。`);
    
    interactionEl.innerHTML = `
        <button onclick="choice2_1('A')">【許下誓言：守護秩序】</button>
        <button onclick="choice2_1('B')">【許下誓言：追尋真實】</button>
        <button onclick="choice2_1('C')">【保持靜默，專注於感受】</button>
    `;
}

function choice2_1(type) {
    if(type === 'A') { 
        writeStory(`「我誓將維護王國的穩定與公爵家的榮耀，遵從女神與教會的引領。」<br>主教露出了慈祥的微笑，將聖水灑在妳的額頭：「好孩子。女神喜歡守規矩的人。」莉薇安在一旁低下頭。<br><br><b>妳的影響力正在逐漸擴大，家族對妳的評價明顯提升，那些模糊的不適感逐漸遠離</b>`)
        player.power += 10;player.family += 10; player.mystery -= 10; }
    if(type === 'B') { 
        writeStory(`「我不求榮華，只求女神指引我，看清那些被迷霧遮蓋的過去與真相。」<br>主教的眼神瞬間變得冰冷，手上的動作停頓了一秒。他壓低聲音，只用妳能聽到的音量說：「孩子，有些真相，妳承受不起。這是給妳的最後一次警告。」<br><br><b>妳隱約感到有什麼正在悄悄改變，皇太子似乎對妳多了幾分注意</b>`)
        player.mystery += 10; player.favor_prince += 5; }
    if(type === 'C') { 
        writeStory(`妳不發一言，只是冷靜地看著聖水映照出妳的臉，感受著那種莫名的違和感。<br>這種無聲的抗議讓主教感到困惑。他草草結束了儀式，但在轉身時，他對公爵夫人耳語道：「這孩子的眼神……比我們先前預測的更難以捉摸。」<br><br><b>妳的影響力正在逐漸擴大，家族對妳的態度似乎冷淡了一些，騎士對妳的態度變得更加在意</b>`)
        player.power += 10; player.favor_prince += 5; player.family -= 5; }
    
    updateStats();
    
    interactionEl.innerHTML = `
        <button onclick="chapter2_2()">繼續</button>
    `;
}

function chapter2_2() {
    writeStory(`洗禮儀式結束後的當晚，公爵府舉辦了一場只有家族成員參加的小型晚宴。這本該是慶祝你正式回歸的場合，餐桌上的氣氛卻比深秋的風還要冷。<br><br>你穿著沉重的貴族長裙，坐在公爵對面。羅維恩公爵切著餐盤裡的鹿肉，頭也不抬地開口： 「今天主教對妳的評價尚可，但妳的儀態依舊生硬。莉薇安，妳平時多費心，別讓她在社交季丟了家族的臉。」<br>莉薇安優雅地放下酒杯，露出完美的笑容： 「父親放心，我會教姐姐如何隱藏那些『修道院的習慣』。不過……」她轉向你，眼神裡帶著一絲審視，「姐姐今天在洗禮時，盯著聖水的眼神真的很嚇人呢。是在聖水裡看到了什麼不該看的東西嗎？」公爵夫人的手微微一抖，銀叉落在瓷盤上發出刺耳的聲響。`)
    interactionEl.innerHTML = `
        <button onclick="choice2_2('A')">【示弱】</button>
        <button onclick="choice2_2('B')">【軟中帶刺】</button>
        <button onclick="choice2_2('C')">【尋求認可】</button>
    `;
}

function choice2_2(type){
    if (type === 'A') {
        writeStory(`你低頭看著盤子，聲音輕微：「我只是第一次見到這麼多聖水，有些敬畏。我會努力改進儀態的。」<br>公爵夫人心疼地看了妳一眼，伸手覆在妳的手背上：「沒關係，慢慢來就好。」莉薇安掩嘴輕笑，轉而與公爵談論起明年的領地稅收，妳再次被排除在對話之外。<br><br><b>家族對妳的態度似乎緩和了一點</b>`)
        player.family += 5;
    }
    if (type === 'B') {
        writeStory(`妳放下餐具，平靜地直視莉薇安：「我只是在想，聖水能洗淨外表的塵土，卻不知道能不能洗淨人心裡的秘密。妹妹這麼關心我的眼神，是因為害怕我看透什麼嗎？」<br>餐桌陷入了死寂。莉薇安的笑容僵住了一秒，隨即恢復正常：「姐姐真愛開玩笑，我們家能有什麼秘密呢？」公爵冷哼一聲，示意僕人撤下餐盤，晚宴草草結束。<br><br><b>妳在貴族圈中的存在感稍微提高，家族對妳的態度似乎冷淡了一些，一種說不清的違和感在心底閃過</b>`)
        player.power += 5; player.family -= 5; player.mystery +=5;
    }
    if (type === 'C') {
        writeStory(`妳無視莉薇安，直接轉向公爵：「父親，我會盡快掌握社交規則。比起修道院，我更想知道如何能像妹妹一樣，成為家族的助力。」<br>公爵終於抬起頭，第一次認真地審視妳：「這才像我羅維恩家的孩子。莉薇安，明天把妳的家庭教師借給妳姐姐。」莉薇安抓緊了餐巾，指甲因用力而泛白。<br><br><b>家族對妳的評價明顯提升</b>`)
        player.family += 10;
    }
    updateStats();
    
    interactionEl.innerHTML = `
        <button onclick="chapter2_3_1()">繼續</button>
    `;
}

function chapter2_3_1() {
    writeStory(`深夜，你坐在窗前，看著月光灑在繁複的禮服上。這時，一張折疊整齊的紙條從門縫下被輕輕推入，上面沒有署名，只有一行字，紙條的筆跡優雅且帶著淡淡的香水味：<br><div class="note">「火並未帶走一切。如果你想知道為什麼你被選中，明天午後，去西塔的舊畫室。」</div><br>隔日午後，你避開僕人的視線來到廢棄的西塔。這裡灰塵遍佈，牆上掛著歷代公爵的肖像。 你在畫室角落的一疊廢紙中，發現了一份燒焦的檔案殘片，不知為何會出現在這裡的【孤兒收養記錄】。`)
    interactionEl.innerHTML = `
        <button onclick="chapter2_3_2()">查看</button>
    `;
}

function chapter2_3_2(){
    writeStory(`你指尖顫抖地夾起那片殘破的焦紙。 檔案上，原本該寫著名字的地方被濃黑的墨水橫著抹去，像是一道無法癒合的傷疤。唯有旁邊那鮮紅的戳記，在灰暗的畫室裡顯得格外刺眼。妳指尖顫抖地夾起那片焦紙：<br><br><div class="note">樣本編號：00X - 穩定性觀察中<br>若靈魂出現排斥，則重新淨化……」</div><br>字跡映入眼底的瞬間，妳的呼吸突然亂了半拍。像是有什麼冰冷的東西順著指尖竄進血管，迅速蔓延到手臂。聖水洗禮時那股詭異的寒意，再次毫無預兆地從胸口翻湧上來。<br>妳皺著眉頭思考：這個編號指的是誰？是曾經住在這座公爵府的人嗎？還是教會在暗中進行什麼殘酷的洗腦實驗？最讓妳在意的是，這份檔案出現在這裡，是否意味著羅維恩家族也參與其中？<br><br>「你不該來這裡的。」就在你試圖辨認更多字跡時，身後傳來一個低沉的聲音。是騎士羅倫斯。他靠在門邊，灰色的眼瞳中閃過一絲複雜的情緒。他顯然知道些什麼。<br><br>面對羅倫斯，以及這份詭異的檔案，你打算如何行動？`)
    interactionEl.innerHTML = `
        <button onclick="choice2_3('A')">【冷靜質問】</button>
        <button onclick="choice2_3('B')">【毀滅證據】</button>
        <button onclick="choice2_3('C')">【尋求幫助】</button>
    `;
}

function choice2_3(type) {
    if (type === 'A') {
        writeStory(`「羅倫斯，這份檔案上提到的『樣本』是誰？為什麼會出現在公爵府？這裡難道是什麼秘密實驗場嗎？」<br>羅倫斯沉默了很久，最後走上前奪過那張紙揉碎。「大小姐，有些事不知道比知道安全。我能告訴妳的是……在這個家裡，除了這把劍，沒有什麼是絕對真實的。請不要再查下去了。」<br><br><b>家族對妳的態度似乎冷淡了一些，騎士對妳的信任明顯增加</b>`)
        player.family -= 5; player.favor_knight += 15;
    }
    if (type === 'B') {
        writeStory(`當著羅倫斯的面，將檔案投入壁爐燒掉。「我只是走錯路了，這裡什麼也沒有。」<br>羅倫斯看著火光映照在你的臉上，微微低頭行禮：「您的冷靜令人敬畏。既然如此，我會當作今天從未見過您。」他的語氣雖然恭敬，卻帶著一絲隱約的失落。<br><br><b>妳在家中的地位大幅提高，那些模糊的不適感逐漸遠離</b>`)
        player.family += 20; player.mystery -= 10;
    }
    if (type === 'C') {
        writeStory(`妳緊緊攥著檔案殘片，求助般地看著他：「這上面寫的東西……讓我感到很不舒服。羅倫斯，你是這府裡唯一能幫助我的人，你能不能幫我查清楚，這到底是誰的記錄？」<br>羅倫斯看著妳那雙混濁卻閃爍著渴望真相光芒的綠瞳，他沈重地嘆了口氣，單膝跪在妳面前。「……遵命。但我必須提醒您，這條路一旦開始，就沒有回頭的機會了。只要您不再一個人冒險，我會替您走完這條路。請您在出結果前，務必在其他人面前保持平常心。」<br><br><b>騎士對妳的情感大幅加深，家族對妳的評價明顯下降，妳隱約感到有什麼正在悄悄改變</b>`)
        player.favor_knight += 25; player.family -= 10; player.mystery += 10;
    }
    updateStats();
    interactionEl.innerHTML = `
        <button onclick="chapter3_1()">繼續</button>
    `;
}

// 第三章
function chapter3_1() {
    writeStory(`【 第三章 】<br><br>洗禮儀式與西塔的秘密被妳暫時壓在心底。半個月後，阿爾德王國迎來了最盛大的季節——秋獵祭。這不僅是獵殺獵物的戰場，更是決定誰能站上「王后候選人」位置的修羅場。妳與莉薇安坐在公爵家的豪華馬車上，前往郊外的皇家獵場。<br><br>地點：皇家獵場<br><br>獵場上旗幟飄揚，皇太子艾德里安騎在一匹雪白的駿馬上，顯得高不可攀。而羅倫斯則全副武裝，作為守衛騎士之一，遠遠地向妳點頭示意。<br><br>莉薇安今日穿著一襲火紅色的獵裝，棕髮高高紮起，顯得英氣逼人。她故意湊近妳，遞過來一條繡著黑色鬱金香的手帕，聲音甜得發膩：「姐姐，獵場風大塵多。這帕子是我親手繡的，送給妳遮掩一下。對了，待會兒殿下若是獵到了雪狐，按照傳統是要送給在場最心儀的女士的……妳說，會是誰呢？」<br><br>妳低頭看著那朵黑色鬱金香，那扭曲的線條與畫室檔案上的紅色戳記如出一轍。這不是禮物，這是莉薇安的明牌試探——她知道妳去過西塔了。<br><br>面對莉薇安帶有威脅意味的「餽贈」，妳打算如何應對？`)
    
    interactionEl.innerHTML = `
        <button onclick="choice3_1('A')">【坦然收下】</button>
        <button onclick="choice3_1('B')">【委婉拒絕】</button>
        <button onclick="choice3_1('C')">【公開回擊】</button>
    `;
}

function choice3_1(type) {
    if(type === 'A') { 
        writeStory(`妳優雅地接過手帕，當著她的面輕拭指尖：「謝謝妹妹。這花紋確實特別，讓我想起在修道院時看過的某些『古老殘卷』，總覺得背後藏著什麼故事呢。」莉薇安的笑容僵硬了一瞬。<br><br>此時皇太子策馬過來，他銀色的髮絲在陽光下泛著冷冽的光澤，目光落在妳指尖那朵黑色鬱金香上，停留了一瞬。他的眼神微微變深，「這個花紋……」他語氣似乎只是隨口一提，「我還以為早就沒人記得了。」<br><br>妳的影響力正在逐漸擴大，一種說不清的違和感在心底閃過`)
        player.power += 10; player.mystery += 5; }
    if(type === 'B') { 
        writeStory(`面對莉薇安遞過來那條繡著黑色鬱金香的手帕，妳的神情依舊如修道院的古井般波瀾不驚。妳輕輕推回她的手，語氣平淡：「紅色的帕子太過耀眼，更適合今天的主角妳。我帶了普通的白絲巾，簡單些就好。」<br><br>周圍的貴族小姐們發出細碎的竊笑，似乎在嘲諷真千金的畏縮與寒酸。莉薇安眼底閃過一絲得逞的快意，但她隨即換上一副委屈的神情，上前一步，強行將手帕塞進妳的指縫：「沒事的姐姐，這是我親自為妳挑的，妳不收下的話我會很難過的。而且……」她湊近妳耳邊，聲音壓得極低，帶著一絲只有妳能聽見的惡意，「這是規矩。進了這座森林，每個人都得選一個標籤，不是嗎？」<br><br>就在妳們僵持不下時，馬蹄聲由遠及近。「在聊什麼這麼熱鬧？」皇太子艾德里安策馬而至。他銀色的髮絲在陽光下閃著冰冷的光澤，目光在妳指尖那朵黑色鬱金香上停留了片刻，「這個花紋……」他語氣似乎只是隨口一提，「我還以為早就沒人記得了。」<br><br>家族對妳的評價明顯提升，妳的存在似乎被一些人刻意忽視`)
        player.family += 10; player.power -= 5; }
    if(type === 'C') { 
        writeStory(`妳接過手帕，卻在皇太子走近時，狀似無意地掉落在地，並輕聲驚呼：「這花紋……，我在家父的舊檔案室看過類似的印記，總覺得心神不寧。」<br><br>艾德里安翻身下馬，親自為妳撿起手帕。他看著上面的圖案，眼神微微變深，「這個花紋……」他語氣似乎只是隨口一提，「我還以為早就沒人記得了。」<br><br>皇太子對妳產生了明顯的興趣，家族對妳的評價明顯下降`)
        player.favor_prince += 15; player.family -= 10; }
    
    updateStats();
    
    interactionEl.innerHTML = `
        <button onclick="chapter3_2()">繼續</button>`;
}

function chapter3_2() {
    writeStory(`周圍幾名貴族露出困惑的神情，顯然聽不懂他在說什麼。艾德里安卻抬起眼，看向妳，唇角勾起一抹若有似無的笑。「羅維恩大小姐的眼力，比我想像中敏銳。」他停頓了一瞬，像是在思考什麼。<br><br>隨後，他忽然翻身下馬走到妳面前，將長弓遞過來。他的聲音低了幾分，語氣像是在試探，又像是在宣告。「羅維恩大小姐，在狩獵開始前，我能邀請妳為我的長弓繫上祝福嗎？」<br><br>他微微傾身，語氣溫和，卻帶著某種難以拒絕的壓迫。「據說，帶著這個標記祝福的箭，從來不會射偏目標。」<br><br>你打算如何回應皇太子的「邀請」？`)
    interactionEl.innerHTML = `
        <button onclick="choice3_2_1('A')">【順從】</button>
        <button onclick="choice3_2_1('B')">【推託】</button>
        <button onclick="choice3_2_1('C')">【挑釁】</button>
    `;
}

function choice3_2_1(type) {
    if(type === 'A') { 
        writeStory(`妳接過長弓，指尖觸碰到冰冷的弓身。妳順從地低著頭，將那條繡著黑色鬱金香的手帕，一圈又一圈地纏繞在弓弰上。<br><br>艾德里安滿意地看著妳的動作，他伸出戴著皮質手套的手，覆蓋在妳正要收回的手背上，感受著妳輕微的警戒。「很好，這支弓現在有了靈魂。」他隨後轉向公爵，語氣傲然：「公爵大人，妳的女兒非常懂得如何為王國祈福。」莉薇安在後方死死抓著裙擺，臉色蒼白如紙。<br><br>妳的影響力正在逐漸擴大，家族對妳的態度似乎緩和了一點，皇太子似乎對妳多了幾分注意，心中的不安稍微平息了一些`)
        player.power += 15; player.family += 5; player.favor_prince += 5; player.mystery -= 5; 
        updateStats();
        interactionEl.innerHTML = `
            <button onclick="choice3_2_2('A')">繼續</button>`;
        }
    if(type === 'B') { 
        writeStory(`妳往後退了一小步，保持著完美的社交距離，微笑著看向莉薇安：「妹妹的繡工更好，那是她花了許多心血才完成的帕子。由她為殿下繫上，祝福才更完美。」<br><br>氣氛有一瞬間的冷場。艾德里安的笑意淡了幾分，他隨手將弓拋給一旁的侍從，並沒有讓莉薇安上前。「既然大小姐如此推崇妹妹，那這份祝福我就先收下了。但希望妳記住，有些機會，讓了就沒了。」莉薇安雖然接過了話題，但她察覺到皇太子對她的熱情已大打折扣，眼神中閃過一絲陰霾。<br><br>家族對妳的評價明顯提升，皇太子似乎對妳失去了一點興趣，心中的不安稍微平息了一些`)
        player.family += 15; player.favor_prince -= 5; player.mystery -= 5;
        updateStats();
        interactionEl.innerHTML = `
            <button onclick="choice3_2_2('B')">繼續</button>`;
        }
    if(type === 'C') { 
        writeStory(`妳沒有去拿那把弓，而是抬起頭，直視著艾德里安那雙金色的眼睛。妳的聲音不大，卻讓周圍的人都聽得一清二楚：「殿下在看著獵物時，是在看牠的掙扎，還是看牠的死亡？」<br><br>全場鴉雀無聲。連遠處的羅倫斯都露出了震驚的神色。艾德里安愣了一瞬，隨即發出了自妳進府以來，他最真心的一次大笑。「哈哈……掙扎還是死亡？」他湊近妳，低聲呢喃，「聰明的女孩。我在看的，是牠在意識到自己無路可逃時，那一瞬間露出的……最真實的眼神。」他強行將弓塞進妳懷裡，「這祝福妳繫定了，我等著看妳的眼神能維持多久。」<br><br>皇太子對妳的關注大幅提升，妳的影響力正在逐漸擴大，妳隱約感到有什麼正在悄悄改變`)
        player.favor_prince += 20; player.mystery += 15; player.power += 10; player.east = true;
        updateStats();
        interactionEl.innerHTML = `
            <button onclick="choice3_2_2('C')">繼續</button>`;}
}

function choice3_2_2(type) {
    if(type === 'A') { 
        writeStory(`夕陽西下，號角聲響徹獵場。艾德里安策馬凱旋，後方的隨從抬著一頭傳說中的純白鹿。白鹿在王國神話中象徵「純潔的奉獻者」，這讓在場的所有貴族紛紛倒吸一口氣。<br><br>艾德里安在妳面前翻身下馬，鹿角上依然纏著妳繫上的那條黑色鬱金香帕子。 「正如我所說，帶著妳的祝福，箭不會射偏。」他將沾血的匕首遞給妳，「羅維恩大小姐，請妳親自解下鹿角上的紅綢。從今以後，這頭鹿的生命，便與妳的名字連在一起。」<br><br>妳成為了公認的「準王后」人選。`)
    }
    if(type === 'B') { 
        writeStory(`狩獵結束後，艾德里安表現平平，僅獵得幾隻銀狐與山雞。他顯得有些興致索然，隨手將最珍貴的銀狐皮丟給了莉薇安。 「既然大小姐覺得妹妹更適合接受祝福，那這份獵物便歸她了。」艾德里安語氣平淡，甚至沒有多看莉薇安一眼，便轉身走向國王的帳篷。<br><br>妳成功避開了鋒芒，公爵對妳的「謙讓」非常滿意，認為妳成功鞏固了家族兩姐妹的形象。莉薇安雖然拿到了狐皮，卻笑不出來。因為她聽到了周圍名媛的竊竊私語：「看來皇太子對真千金沒興趣，才把剩菜留給假千金。」`)
    }
    if(type === 'C') { 
        writeStory(`這是最令全場震驚的結局。艾德里安竟然空手而歸，他的箭袋裡一支箭也沒少。 他策馬來到妳面前，居高臨下地看著妳，夕陽將他的銀髮染成了一種危險的血色。他沒有對眾人的失望做出解釋，只是在經過妳身邊時，俯身在妳耳畔低語：<br><br>「我今天追逐了一整天，卻發現林子裡的獵物都太過無趣。比起殺死牠們，我更感興趣的是……妳這隻會反抗的獵物，什麼時候會露出絕望的眼神。」 他留下一句冷冰冰的邀約：「今晚派對後，西塔畫室。我會告訴妳，關於那個『標誌』的真相。」<br><br>妳徹底激發了艾德里安的偏執欲。`)
    }
    updateStats();
        interactionEl.innerHTML = `
            <button onclick="chapter3_3()">繼續</button>`;
}

function chapter3_3() {
    let buttons = `
    <button onclick="choice3_3('B')">【留在房內與羅倫斯商討】</button>
    <button onclick="choice3_3('C')">【不做任何事】</button>`;
    
    if (player.east === true) {
    buttons = `<button onclick="choice3_3('A')">【前往西塔赴約】</button>` + buttons;
    }
    writeStory(`皇家派對後，妳發現有人在枕頭下放了一把沾有鏽跡的小鑰匙。<br><br>妳今晚打算：`)
    interactionEl.innerHTML = buttons;
}

function choice3_3(type) {
    if(type === 'A') { 
        writeStory(`妳披上深色的斗篷，避開巡邏的衛兵來到廢棄的西塔。皇太子艾德里安正背對著妳，看著牆上一幅模糊的畫作。<br><br>「妳不覺得奇怪嗎？十六年前妳流落民間，為何教會的收養記錄卻如此『完整』？那把鑰匙……是我從父王的書房拿出來的。它能打開檔案室最底層的箱子，裡面有妳被送走那天的真正原因。」<br><br>「但代價是——從今晚起，妳眼中看到的真相，只能告訴我一個人。 莉薇安不可信，公爵不可信，甚至妳那位正義感十足的騎士也救不了妳。在這個虛偽的王國，只有我，能讓妳以『真千金』的身份活下去。」<br><br>皇太子對妳產生了明顯的興趣，妳隱約感到有什麼正在悄悄改變`)
        player.favor_prince += 15; player.mystery += 15; }
    if(type === 'B') { 
        writeStory(`妳選擇留在房內，並召喚了守在門外的羅倫斯。當妳展示那把鑰匙和手帕時，這位一向沉穩的騎士竟然露出了憤怒的神色。<br><br>羅倫斯單膝跪地，握住妳冰冷的手。「這把鑰匙屬於教會的『懺悔室地下室』，那不是妳該去的地方。莉薇安和皇太子在聯手玩弄妳的意志。」 他告訴妳，他曾在戰場上見過那些所謂的「神蹟」，其實都是教會利用這種藥物和心理暗示製造的假象。他向妳發誓，如果有一天實驗要將妳犧牲，他會帶妳殺出重圍。<br><br>「大小姐，別看那些標誌。看著我的眼睛，只要我還活著，妳就不是任何人的『樣本』。妳只是${player.name}。」<br><br>騎士對妳的情感大幅加深，那些模糊的不適感逐漸遠離`)
        player.favor_knight += 20; player.mystery -= 10; }
    if(type === 'C') { 
        writeStory(`妳坐在窗前，指尖輕輕劃過那把沾有鏽跡的小鑰匙，最後將它隨手丟進了梳妝台最深處的抽屜裡。西塔的邀約、羅倫斯的忠誠、莉薇安的威脅……這些聲音像遠方的雷鳴，而妳選擇留在這片死寂的安靜中。<br><br>妳熄滅了蠟燭，任由黑暗將自己吞沒。妳拒絕成為皇太子的棋子，也不想成為騎士羽翼下的弱者，更不屑於與莉薇安在泥淖中互撕。<br><br>那一晚，妳只是安靜地聽著行宮裡的風聲。只不過妳突然有一種錯覺，彷彿有什麼東西，在記錄妳今晚沒有前往西塔的行為。<br><br>那些模糊的不適感逐漸遠離，家族對妳的態度似乎緩和了一點`)
        player.mystery -= 15; player.family += 5; }
    
    updateStats();
    
    interactionEl.innerHTML = `
        <button onclick="chapter3_4()">繼續</button>`;
}

function chapter3_4() {
    writeStory(`深夜，就在妳準備入睡時，突然傳來莉薇安悽慘的尖叫聲！那聲音充滿了極致的恐懼，隨後是重物倒地與玻璃破碎的聲音。<br><br>不到一分鐘，走廊傳來急促的腳步聲。皇太子的隨從用力敲響了妳的房門： 「羅維恩大小姐！莉薇安小姐在房內遇襲受傷，公爵大人請您立刻過去！」<br><br>妳走出房門，在混亂的走廊上遇到了神情凝重的公爵與正從樓梯跑上來的羅倫斯。莉薇安躺在血泊中，臉色慘白，她的指尖顫抖地指向妳的方向，卻說不出話來。<br><br>此時現場的三個致命物證：<br>1.莉薇安手中緊握著那條黑色鬱金香手帕（那是妳下午才收下的）。<br>2.地上有一把沾血的修道院拆信刀（妳從家鄉帶來的唯一隨身物）。<br><br>面對這場突如其來的「謀殺現場」，妳的第一反應是：`)
    interactionEl.innerHTML = `
        <button onclick="choice3_4('A')">【冷靜觀察】</button>
        <button onclick="choice3_4('B')">【理性批判】</button>
        <button onclick="choice3_4('C')">【尋求羅倫斯庇護】</button>
        <button onclick="choice3_4('D')">【尋求皇太子幫助】</button>`;
}

function choice3_4(type) {
    if(type === 'A') { 
        writeStory(`妳沒有辯解，只是安靜地站在陰影處，看著莉薇安顫抖的肩膀。妳注意到她的傷口刻意避開了要害，且那把拆信刀放的位置太過「刻意」。<br><br>莉薇安看到妳那雙深沉、混濁的綠瞳，身體抖得更厲害了，她語帶哭腔：「姐姐……我只是想把帕子拿回來……妳為什麼要……」<br><br>妳的沈默讓莉薇安感到極大的心理壓力，她因為恐懼妳那雙空洞的綠瞳而開始胡言亂語，反而漏洞百出。公爵雖然心中存疑，但因為找不到妳的任何情緒破綻，最終只能以「意外」結案，並將莉薇安送去靜養。<br><br>家族對妳的評價明顯提升`)
        player.family += 10;
    }
    if(type === 'B') { 
        writeStory(`妳平靜地看向公爵：「父親，拆信刀雖然是我的，但若我要動手，不會留下這麼多明顯的破綻。」妳的分析精準得令人膽寒，公爵被迫不得不展開調查。雖然洗清了罪名，但妳展現出的政治手腕讓公爵感到了威脅。<br><br>公爵低頭看向莉薇安，臉色陰晴不定，莉薇安的神情閃過一絲慌亂。<br><br>妳的權勢與地位顯著上升，家族對妳的評價明顯下降`)
        player.power += 20; player.family -= 10;
    }
    if(type === 'C') { 
        writeStory(`妳下意識看向門口的羅倫斯，眼神中帶著一絲不自覺的警戒姿勢。羅倫斯立刻跨步上前，擋在妳與公爵之間。羅倫斯沉聲道：「公爵大人，大小姐整晚都在房內，我可以作證。至於兇手，我會親自追查。」公爵冷哼一聲：「羅倫斯，你只是個侍衛，別忘了你的身分。」<br><br>羅倫斯的強硬介入讓現場演變成一場軍事對峙。公爵為了面子不得不暫時退讓，但隨後收回了羅倫斯的部分職權。妳雖然安全，卻看著保護妳的人被剝奪權力。<br><br>騎士對妳的情感大幅加深，皇太子對妳的態度變得冷淡`)
        player.favor_knight += 20; player.favor_prince -= 15;
    }
    if (type === 'D') {
        writeStory(`妳沒有看向父親，而是轉過身，直視著站在門口陰影處、正帶著玩味眼神觀戰的艾德里安，聲音清冷而堅定：「殿下，下午您說過，帶著祝福的箭從不射偏。那麼現在，也請您用那雙看透真相的眼睛，為我證言。」<br><br>全場陷入死寂，連莉薇安的哭聲都停了。艾德里安從陰影中優雅地走出來，皮靴踏在木地板上的聲音清脆刺耳。他走到妳身邊，自然地將手搭在妳的肩膀上——這是一個充滿佔有欲的姿勢。「公爵大人。」他看著公爵，語氣溫柔得令人戰慄，「我剛才在走廊散步時，正好看到羅維恩大小姐在房內讀經，她甚至連門都沒出過。至於這條帕子……」他撿起莉薇安手中那條黑色鬱金香手帕，隨手丟進一旁的炭火盆裡，「既然沾了血，就不配作為祝福了。莉薇安小姐，妳說是嗎？」<br><br>莉薇安看著化為灰燼的手帕，眼底滿是恐懼，她知道皇太子為了妳，親口撒了謊。皇太子的謊言成了壓垮莉薇安的最後一根稻草。她意識到自己徹底失去了皇太子的支持，崩潰大哭。公爵雖然知道皇太子在說謊，卻不敢反駁，只能吞下這口氣。<br><br>皇太子對妳的關注大幅提升，騎士對妳的信任正在動搖`)
        player.favor_prince += 20; player.favor_knight -= 15;
    }
    updateStats();
    interactionEl.innerHTML = `<button onclick="chapter4_0()">繼續</button>`;
}

function chapter4_0() {
    writeStory(`莉薇安因為「精神不穩定」被送往療養院，公爵府暫時恢復了平靜，妳的名字也因此在王城傳開，妳在貴族圈中的存在感稍微提高。<br><br>然而，平靜的日子並未持續太久，北境因為連年饑荒與沉重的教會賦稅，終於爆發了血腥的「糧食叛亂」。<br><br>災民燒毀了稅官的府邸，宣稱要奪回被貴族掠奪的生命。國王命令皇太子艾德里安親征，並指名由代表羅維恩家族名望的妳隨軍發放賑災糧草，以此平息民憤並彰顯皇室的慈悲，但你知道國王真正的目的是希望藉此讓公爵府背下北境的怒火。`)
    player.power += 5;
    updateStats();
    interactionEl.innerHTML = `
        <button onclick="chapter4_1()">繼續</button>`;
}

function chapter4_1() {
    writeStory(`北境軍事營帳 深夜<br><br>外頭寒風如刀，劃過皮革帳篷發出尖銳的聲響。妳坐在桌前，看著手中那份由公爵親自批閱的糧草清單。妳敏銳地發現，清單上的數額與實際裝車的數量有巨大的落差——有人在暗中中飽私囊，而這極可能是引發叛亂的導火線。<br><br>「大小姐，這麼晚了還在對帳，是擔心那些災民吃不飽，還是擔心公爵大人的聲譽？」皇太子艾德里安掀簾而入，他剛巡視完前線，銀髮沾著雪沫，金色的眼瞳在燭光下顯得深不可測。他走到妳身邊，修長的手指壓在那份帳單上：「妳父親給妳的這份清單，如果是真的，那北境就不會有叛亂了。妳打算把這個真相爛在肚子裡，還是……跟我做個交易？」<br><br>羅倫斯隨後踏入營帳，他立刻察覺到艾德里安的侵略性，迅速跨步擋在妳案前，語氣冰冷：「殿下，軍務繁忙，大小姐的私事不勞您費心。大小姐，馬車已經準備好了，如果您覺得累，我們可以立刻啟程回後方。」<br><br>面對父親可能涉及的貪腐證據，以及皇太子與騎士的對峙，妳打算如何處理這份足以毀掉羅維恩家族名聲的帳單？`)
    interactionEl.innerHTML = `
        <button onclick="choice4_1('A')">【坦白】</button>
        <button onclick="choice4_1('B')">【毀滅證據】</button>
        <button onclick="choice4_1('C')">【不做任何回應】</button>
    `;
}

function choice4_1(type) {
    if(type === 'A') { 
        writeStory(`妳將帳單推到艾德里安面前，聲音清冷：「既然殿下看出來了，我也沒必要隱瞞。我可以幫您找出軍中接應公爵府的人，作為交換，我要這場戰爭後北境三座礦山的管理權。」<br><br>艾德里安接過那疊紙，指尖緩緩摩擦過帳單上的公爵印章。他發出一聲低沉且愉悅的笑聲，隨後當著羅倫斯的面，將妳拉近。<br><br>「妳知道這份清單能讓妳父親的人頭落地嗎？」艾德里安將紙收進懷中，眼神閃過一抹瘋狂，「礦山管理權歸妳，而我會幫妳『處理』掉帳單上那些礙事的名字。從今晚起，羅維恩家族在北境的勢力，妳佔一半，我佔一半。」<br><br>妳的權勢與地位顯著上升，皇太子對妳產生了明顯的興趣，家族對妳的評價明顯下降`)
        player.favor_prince += 15; player.power += 20; player.family -= 15 }
    if(type === 'B') { 
        writeStory(`妳當著兩人的面，將帳單湊近燭火點燃。看著它化為灰燼後，妳平靜地看向羅倫斯：「羅倫斯，明天照常發糧。漏掉的部分，我會用我的私房珠寶去黑市填補。家族的名聲不能毀在北境。」<br><br>紙張在燭火中捲縮成黑灰，映照在妳冷靜的瞳孔裡。羅倫斯看著妳毫不猶豫燒掉家族罪證的側臉，眼神從震驚轉為深沉的疼惜。他垂首時，眼底閃過一絲近乎狂熱的光。艾德里安冷哼一聲，轉身離去：「優柔寡斷的仁慈，只會害死妳。」<br><br>帳篷內只剩妳與羅倫斯。他單膝跪下，輕輕握住妳因寒冷而緊繃的手：「大小姐，變賣珠寶的事交給我。我曾有些戰友在黑市討生活，他們會把糧食送進來。這件事，除了我，不會有第三個人知道。」<br><br>「如果他們逼妳承擔罪名，我會先動手。」<br><br>妳在家中的地位大幅提高，騎士對妳的信任明顯增加，妳在貴族圈中的影響力正在減弱`)
        player.favor_knight += 15; player.family += 20; player.power -= 15; }
    if(type === 'C') { 
        writeStory(`妳合上帳單，既不交給皇太子，也不燒毀。妳只是安靜地起身，攏了攏身上的披風。「夜深了，兩位請回吧。明天的路還長，我不希望在到達災區前，我們內部就先起了火。」<br><br>兩人悻悻然離開後，營帳內恢復了寂靜。但這份「沈默」引發了連鎖反應——艾德里安為了試探妳，下令明天優先進攻受災最重的村落；而羅倫斯為了向妳證明他能保護妳，私自加派了兩倍的巡邏人手。妳成了這場局面的圓心。<br><br>妳忽然明白，帳單本身並不重要。重要的是，他們會為了妳走到哪一步。<br><br>妳隱約感到有什麼正在悄悄改變`)
        player.mystery += 15; }
    
    updateStats();
    
    interactionEl.innerHTML = `
        <button onclick="chapter4_2()">繼續</button>`;
}

function chapter4_2() {
    writeStory(`北境的寒氣侵蝕著馬車的木板，外頭傳來災民絕望的嘶吼聲與重甲步兵整齊劃一的踏步聲。艾德里安的「武力鎮壓」命令簡潔而殘酷，一旦長劍出鞘，羅維恩家族在北境的名聲將永遠染上洗不掉的血跡。<br><br>妳的手指在冰冷的膝蓋上輕輕敲擊，最終下達了妳的第一個命令：`)
    interactionEl.innerHTML = `
        <button onclick="choice4_2_1('A')">【支持鎮壓】</button>
        <button onclick="choice4_2_1('B')">【親自談判】</button>
        <button onclick="choice4_2_1('C')">【冷眼旁觀】</button>
    `;
}

function choice4_2_1(type) {
    if(type === 'A') { 
        writeStory(`「既然糧草本就不足，與其讓暴民搶光後導致全軍覆沒，不如現在就立威。傳令下去，支持殿下的決定，但羅維恩家的私兵不參與屠殺，只負責守住糧車。」<br><br>刀光閃過，雪地被染成刺眼的紅。有個孩子撲在倒下的母親身上，卻沒有哭，他只是盯著妳的馬車。羅倫斯第一次發現，自己也許無法完全理解妳。<br><br>艾德里安看著妳冷漠的側臉，露出了極具侵略性的讚賞。他策馬靠近妳的車窗，低聲說：「我以為妳會流下幾滴虛偽的眼淚，看來妳比我想像中更適合這枚黑金印章。妳知道嗎？真正的王，不是命令屠殺的人。是能在屠殺之後，還能安睡的人。」<br><br>災民的騷亂平息了，但妳看著那些倒下的身影，意識到這場戰爭後，妳將成為北境最受畏懼的女人。<br><br>妳的影響力正在逐漸擴大，騎士對妳的信任正在動搖，家族對妳的態度似乎緩和了一點`)
        player.favor_knight -= 10; player.power += 10; player.family += 5
        updateStats();
        interactionEl.innerHTML = `
            <button onclick="choice4_2_2('A')">繼續</button>`; 
    }
    if(type === 'B') { 
        writeStory(`「停下！羅倫斯，帶上那一車昨晚我們補齊的糧食，跟我走入災民中。殿下，如果我能安撫他們，請收回您的長劍，血腥味只會引來更多的豺狼。」<br><br>妳推開馬車門，在羅倫斯的死命護衛下，走入那群枯瘦如柴的災民中。當妳親手將乾糧遞給一名孩子時，周圍的暴戾氣息奇蹟般地平息了。<br><br>艾德里安在後方冷眼旁觀，而羅倫斯看著妳的眼神中充滿了近乎信仰的狂熱。妳用這一舉動，向北境宣告：羅維恩大小姐才是這裡真正的救贖。<br><br>騎士對妳的情感大幅加深，妳在貴族圈中的影響力正在減弱，家族對妳的評價明顯提升`)
        player.favor_knight += 20; player.family += 10; player.power -= 10; 
        updateStats();
        interactionEl.innerHTML = `
            <button onclick="choice4_2_2('B')">繼續</button>`; 
    }
    if(type === 'C') { 
        writeStory(`「不必阻攔殿下，也不必安撫災民。羅倫斯，傳令私兵後撤，觀察是誰在人群中煽動搶劫——那些災民不可能知道糧草不足的具體消息，軍中一定有內鬼。」<br><br>妳安靜地坐在馬車內，隔著簾幕聽著外頭的慘叫。妳發現自己在計算死傷數字時，內心毫無波動。妳的冷靜近乎病態，卻讓妳捕捉到了混亂中的細節：幾名帶頭搶劫的「災民」，腳上穿的竟是公爵府親衛隊的舊靴子。妳意識到，這場動亂是有人為了掩蓋糧草虧空而自導自演的「滅口」大戲。<br><br>妳隱約感到有什麼正在悄悄改變，家族對妳的態度似乎緩和了一點`)
        player.mystery += 15; player.family += 5; 
        updateStats();
        interactionEl.innerHTML = `
            <button onclick="choice4_2_2('C')">繼續</button>`; 
    }
}

function choice4_2_2(type) {
    if(type === 'A') { 
        writeStory(`夜深之後，營地終於歸於沉寂。北境的風掠過雪地，掩埋了血跡，也掩埋了哭聲。妳站在營帳外，看著遠處尚未熄滅的火光。<br><br>妳忽然意識到——今天下達最終命令的人不是皇太子。<br><br>是妳。<br><br>而這個王國，從今夜起，記住了妳的名字。<br><br>羅倫斯在營帳外站了一整夜。他沒有稱呼你「大小姐」。而是第一次稱妳為——「殿下」。`); }
    if(type === 'B') { 
        writeStory(`夜深之後，營地終於歸於沉寂。北境的風掠過雪地，掩埋了血跡，也掩埋了哭聲。妳站在營帳外，看著遠處尚未熄滅的火光。<br><br>妳忽然意識到——今天下達最終命令的人不是皇太子。<br><br>是妳。<br><br>而這個王國，從今夜起，記住了妳的名字。<br><br>艾德里安在臨走前停下腳步。「妳若有一天後悔，別說我沒有教過妳如何讓人害怕。」`); }
    if(type === 'C') { 
        writeStory(`夜深之後，營地終於歸於沉寂。北境的風掠過雪地，掩埋了血跡，也掩埋了哭聲。妳站在營帳外，看著遠處尚未熄滅的火光。<br><br>妳忽然意識到——今天下達最終命令的人不是皇太子。<br><br>是妳。<br><br>而這個王國，從今夜起，記住了妳的名字。`); }
    interactionEl.innerHTML = `
            <button onclick="chapter5_1()">繼續</button>`;
}

function chapter5_1() {
    writeStory(`地點：公爵府 深夜<br><br>外頭的暴雨拍打著彩色玻璃，室內燃著昂貴的檀香。公爵夫人屏退了所有人，單獨留下了妳。她面前擺著兩套禮服：一套是莉薇安最愛的純白蕾絲，一套是為妳準備的、冰冷肅穆的深綠色絲絨。<br><br>「莉薇安在哭。」夫人垂下眼簾，手指輕撫著那套純白禮服，語氣帶著一種病態的溫柔，「她說妳在北境受了苦，甚至怪我沒有給妳足夠的庇護……她總是這麼貼心，完美得像我親手畫出來的畫。」<br><br>她轉過頭，看向妳那雙暗沉的綠色眼睛，眼神中閃過一絲痛苦的掙扎，隨即又被冷漠掩蓋： 「但妳才是我的血脈。每一次看到妳，都在提醒我這十幾年我有多失敗。妳為什麼不能像她一樣，安安靜靜地當一個精緻的木偶？我只是希望妳不要再受傷，這個世界不適合太清醒的女孩。」`)
    interactionEl.innerHTML = `
        <button onclick="choice5_1('A')">【撕碎母愛的假象】</button>
        <button onclick="choice5_1('B')">【接納這份扭曲的愛】</button>
        <button onclick="choice5_1('C')">【拒絕任何施捨】</button>
    `;
}

function choice5_1(type) {
    if(type === 'A') { 
        writeStory(`妳拿起剪刀，剪掉她替妳準備的綠色禮服的標籤。「母親，您愛的不是莉薇安，您愛的是那份『完美』。莉薇安在北境私吞糧草時，想的可不是您的體面。您還要自欺欺人到什麼時候？承認吧，您對我的愧疚，讓您連直視我的勇氣都沒有。」<br><br>夫人崩潰地掩面痛哭。這份愧疚感被妳徹底挑明後，她會因為無法面對妳而選擇避世，將管家權交給妳。<br><br>妳的權勢與地位顯著上升，家族對妳的評價明顯下降，妳隱約感到有什麼正在悄悄改變`)
        player.mystery += 15; player.power += 20; player.family -= 10 }
    if(type === 'B') { 
        writeStory(`妳走到她身後，輕輕替她梳理凌亂的長髮。「母親，莉薇安能給您的，我能給雙倍。只要您站在我這邊，我會成為全王都最尊貴的王后，沒人會記得這十幾年的空缺。我們會是這世上最完美的母女，不好嗎？」<br><br>夫人像溺水的人抓到浮木。她會將對莉薇安的情感轉移到妳身上，成為妳在王都社交圈最強大的後盾，甚至親自出手處理掉莉薇安。<br><br>妳在家族中的地位大幅提高，妳的影響力正在逐漸擴大，那些模糊的不適感逐漸遠離`)
        player.mystery -= 10; player.family += 25; player.power += 10; }
    if(type === 'C') { 
        writeStory(`妳看都不看那兩件禮服，只是平靜地放下茶杯。「加冕禮後，我會搬出公爵府。您繼續守著您的完美幻象，我繼續守著我的泥濘。我們互不相欠，這就是對您那份『愧疚』最好的交代。」<br><br>這份疏離感讓夫人感到巨大的空虛。她會意識到自己徹底失去了親生女兒，從此陷入長期的抑鬱。<br><br>家族對妳的態度似乎冷淡了一些，某種難以言說的陰影在妳心中擴散`)
        player.mystery += 20; player.family -= 5; }
    
    updateStats();
    
    interactionEl.innerHTML = `
        <button onclick="chapter5_2()">繼續</button>`;
}

function chapter5_2() {
    writeStory(`在夫人回房後，公爵將妳帶進了只有歷代家主才能進入的密室。牆上掛著羅維恩家族先祖的畫像，桌上擺著那份足以讓家族滅亡、也能讓家族重生的「北境糧草案真相」。<br><br>「妳母親雖然糊塗，但她有一句話說對了。」公爵點燃一支雪茄，火光映照著他蒼老的臉龐，「妳這雙混濁的綠色眼眸，看透了太多莉薇安看不見的東西。」他將一份「家主繼承授權書」推到妳面前。這不是婚約同意書，而是轉讓爵位與領地實權的契約。<br><br>「艾德里安想要的是一個美麗的王后，但我看出來了，妳想要的是整個北境，甚至是整個羅維恩。如果我把這枚戒指給妳，妳打算如何處理莉薇安，又打算如何處理我這個『失職』的父親？」`)
    interactionEl.innerHTML = `
        <button onclick="choice5_2('A')">【架空】</button>
        <button onclick="choice5_2('B')">【盟約】</button>
        <button onclick="choice5_2('C')">【撕碎授權書】</button>
    `;
}

function choice5_2(type) {
    resultText = "";
    if(type === 'A') { 
        resultText = `妳拿起戒指，卻不戴在手上，而是隨手丟在桌上。「父親，名聲留給您，實權留給我。加冕禮那天，您會宣布身體不適，由我代理公爵職權。至於莉薇安，她會去修道院為家族祈福，直到她老死。」<br><br>公爵發出了一聲苦笑，他意識到自己被「軟禁」在了家主的位置上。他雖然活著，但每一道命令都必須經過妳的審核。<br><br>妳的權勢與地位顯著上升`
        player.power += 20; }
    if(type === 'B') { 
        resultText = `妳親手為公爵重新戴好戒指。「父親，您依然是公爵，而我會是王后。只要我們聯手，皇室也得看羅維恩家的臉色。莉薇安可以留下，但她只能是我的影子，替我處理那些骯髒的雜事。」<br><br>公爵眼中閃過精光。他發現妳比他更適合這場政治遊戲。這條路徑雖然穩固，但妳會被困在「家族利益」中。<br><br>妳在家族中的地位大幅提高`
        player.family += 20; }
    if(type === 'C') { 
        resultText = `妳當著公爵的面，將那份授權書撕成兩半。「我不需要您的施捨。加冕禮那天，我會親自向國王提交您的貪腐證據，然後以『救贖者』的身分接管領地。您和母親去莊園養老吧，這個家族，由我來重新定義。」<br><br>這是最激進的奪權。公爵感到了徹骨的寒意，他發現妳不是在繼承家族，是在「吞噬」家族。<br><br>某種難以言說的陰影在妳心中擴散`
        player.mystery += 20; }
    let transitionText = `<br><br>深夜，公爵獨自坐在密室。他看著妳離去的背影，突然意識到，這不是他接回了女兒，而是他請回了一個「審判者」。<br><br>隔天一早，公爵府傳出消息：公爵大人因憂心國事突然中風，暫時無法言語，府內大小事務由大小姐全權處理。`
    writeStory(resultText + transitionText);
    updateStats();
    interactionEl.innerHTML = `
        <button onclick="chapter6()">繼續</button>`;
}

function chapter6() {
    writeStory(`地點：聖潔祈禱室<br><br>加冕儀式前的最後一個小時。窗外的鐘聲規律地敲擊著，每一聲都像是喪鐘。<br><br>妳獨自坐在鑲嵌著彩色玻璃的室內，身上穿著沉重得讓人窒息的黑色天鵝絨禮服，胸前佩戴著象徵羅維恩家主的族徽。鏡子裡的妳，臉色蒼白，那雙混濁的綠色眼眸在搖曳的燭火下，顯得深不見底。<br><br>這時，三道腳步聲分別從不同的門扉傳來。<br><br>妳的選擇是？`)
    const interactionEl = document.getElementById('interaction-area');
    let availableButtons = [];
    if (player.power >= 80 && player.favor_prince >= 100) {
        availableButtons.push(`<button onclick="endingA(0)">【將手交給艾德里安，登上血染的王座。】</button>`);
    }
    if (player.power < 70 && player.favor_knight >= 100) {
        availableButtons.push(`<button onclick="endingB(0)">【脫掉沉重的外袍，跟隨羅倫斯消失在風雪中。】</button>`);
    }
    if (player.family >= 150 && player.favor_knight < 100 && player.favor_prince < 100){
        availableButtons.push(`<button onclick="endingC(0)">【獨自走向大祭壇，宣布羅維恩家族的獨立。】</button>`);
    }
    if (availableButtons.length > 0) {
    interactionEl.innerHTML = availableButtons.join("");
    } else {
        interactionEl.innerHTML = `<button onclick="endingF(0)">妳覺得自己還有選擇？</button>`;
    }
}

function endingA(step){
    
    const interactionEl = document.getElementById('interaction-area');
    const statsPanel = document.getElementById('stats-panel');
    document.body.style.backgroundColor = "#0a0a0a";
    document.getElementById('story-text').style.color = "#ffef73";
    if (step === 0) {
        writeStory(`妳決定與惡魔共舞。既然世界給了妳痛苦，妳就要成為掌控痛苦的主人。\n\n月光落進祈禱室，他站在門外，銀髮如霜，肩披深紅披風，手中托著兩頂王冠——一頂嵌滿黑曜石，另一頂鑲著翡翠。\n「大小姐，妳不必裝成無辜。」他看著妳，目光不像情人，也不像敵人。像在評估一件即將完成的作品。「我見過妳看人倒下時的眼神。那不是悲憫，那是計算。」\n「這個國家已經腐朽到骨頭裡。妳若站在祭壇上，只會被吞噬。」他將其中一頂王冠遞到妳面前。「但如果妳站在我身旁。」\n「我們可以決定誰被吞噬。」\n\n妳抬手，不帶一絲猶豫，平穩地將手放進他的掌心。`)
        interactionEl.innerHTML = `<button onclick="endingA(1)">【踏入聖堂】</button>`;
    }
    if (step === 1) {
        
        writeStory("妳與他並肩走入聖堂。王冠落在妳髮間。沉重，卻沒有壓垮妳。\n「從今天起，妳不再需要求生。妳只需要選擇誰活。」");
        
        interactionEl.innerHTML = `<span class="system-msg">命運的齒輪開始轉動...</span>`;
        setTimeout(() => { storyEl.innerHTML += "\n\n【三個月後】\n第一批貴族被清洗。"; }, 1500);
        setTimeout(() => { storyEl.innerHTML += "\n\n【半年後】\n教會失去了三成土地。"; }, 3500);
        setTimeout(() => { 
            storyEl.innerHTML += "\n\n【一年後】\n北境宣布效忠。\n人們只知道——新王與王后從不爭吵，因為他們從來不是夫妻，他們是同謀。"; 
            interactionEl.innerHTML = `<button onclick="endingA(2)">【最終的對話 ]</button>`;
        }, 5500);
    }
    if (step === 2) {
        writeStory(`「妳後悔嗎？」\n妳沒有回答，妳看著城下燈火然後淡淡地說：「後悔是給弱者的奢侈品。」\n他笑了，那笑容不是溫柔，是認可。\n\n達成結局：【惡魔的共犯】`)
        interactionEl.innerHTML = `<button onclick="location.reload()">重新開始</button>`;
    }
    
}

function endingB(step){
    const interactionEl = document.getElementById('interaction-area');
    const statsPanel = document.getElementById('stats-panel');
    document.body.style.backgroundColor = "#0a0a0a";
    document.getElementById('story-text').style.color = "#b4c6cf";
    if (step === 0) {
        writeStory(`權力、家族、名聲，這一切妳都不要了。妳只想在死前，再看一眼真實的顏色。妳一層一層解開那件黑色天鵝絨外袍。沉重的布料落在地上，發出悶響。<br><br>側門悄然打開，羅倫斯站在陰影裡。沒有鎧甲、沒有家徽。只有遠行用的黑斗篷，和腰間兩把劍。「馬在後花園的枯井旁。」他低聲說。「北境今夜有暴雪，但那裡沒有毒酒，也沒有王冠。」他走近，從掌心遞出一朵被雪壓彎的野花。「只有風。」<br><br>妳接過花，花瓣冰冷卻是真實的。`)
        interactionEl.innerHTML = `<button onclick="endingB(1)">【與羅倫斯私奔】</button>`;
    }
    if (step === 1) {
        writeStory("三個月後，妳在木屋裡醒來。羅倫斯正在外面劈柴，他的動作沉穩，卻比以前更沉默。");
        
        interactionEl.innerHTML = `<span class="system-msg">命運的齒輪開始轉動...</span>`;
        
        setTimeout(() => { 
            // 改用 innerHTML 並用 += 累加
            document.getElementById('story-text').innerHTML += "<br><br>妳發現他幾乎不讓妳單獨外出，他會說：「山路滑。」「村裡人不可信。」「我去就好。」"; 
        }, 1500);
        
        setTimeout(() => { 
            document.getElementById('story-text').innerHTML += "<br><br>起初那是關心，後來妳發現，他在妳睡著時會確認門鎖，會把武器放在伸手可及之處，會在夢裡握緊妳的手，像怕妳再次被奪走。"; 
            interactionEl.innerHTML = `<button onclick="endingB(2)">【最終的對話 ]</button>`;
        }, 3500);
    }
    if (step === 2) {
        writeStory(`北境的冬天漫長，妳活著，妳自由。<br><br>某日清晨，妳醒來發現門被反鎖了。不是為了防敵，是為了防妳。<br>窗外風雪正盛，羅倫斯回頭眼神平靜「外面太冷了，妳不適合那個世界。」<br><span class='glitch'>「妳只適合我。」</span><br><br>暴風雪遮住了遠方，妳終於明白，妳逃離了王座，卻走進了另一座王國。<br><br>達成結局：【永冬的囚鳥】`)
        interactionEl.innerHTML = `<button onclick="location.reload()">重新開始</button>`;
    }
}
function endingC(step){
    const interactionEl = document.getElementById('interaction-area');
    const statsPanel = document.getElementById('stats-panel');
    document.body.style.backgroundColor = "#0a0a0a";
    document.getElementById('story-text').style.color = "#9dc7a1";
    if (step === 0) {
        writeStory(`妳要以女公爵的身分，玩弄這場權力遊戲直到妳厭倦為止。妳轉身，裙襬拖過石地。一步，一步，走向祭壇中央。<br><br>鐘聲還在敲，但妳的腳步更穩。聖堂內的燭火映在彩色玻璃上，光影斑斕。所有人以為妳是來接受王冠。妳卻抬手摘下胸前的羅維恩族徽，然後將它放在祭壇之上。<br><br>「今日的加冕，不屬於王室。」妳的聲音不高卻清晰，像刀刃劃過空氣。「羅維恩領地，從此不再向王都納稅。」<br><br>鐘聲戛然而止，整座聖堂陷入死寂。艾德里安第一次沒有笑，大主教的手指緊了緊聖杯，貴族席間傳來壓抑的騷動。妳轉身面向眾人。「羅維恩家族不再附屬於任何人。」`)
        interactionEl.innerHTML = `<button onclick="endingC(1)">【羅維恩家族宣告自治】</button>`;
    }
    if (step === 1) {
        
        writeStory("妳抬起下巴，那雙綠色眼睛清醒而冷冽。「從今日起，我以女公爵之名，宣告自治。」");
        
        interactionEl.innerHTML = `<span class="system-msg">命運的齒輪開始轉動...</span>`;
        setTimeout(() => { storyEl.innerHTML += "<br><br>【三日後】<br>王都發出斥責詔書。"; }, 1500);
        setTimeout(() => { storyEl.innerHTML += "<br><br>【七日後】<br>北境宣布支持羅維恩家族。"; }, 3500);
        setTimeout(() => { 
            storyEl.innerHTML += "<br><br>【十日後】<br>王室派出的稅務使節在邊境被拒絕入境。<br>沒有開戰，卻比戰爭更緊張。"; 
            interactionEl.innerHTML = `<button onclick="endingC(2)">【最終的對話 ]</button>`;
        }, 5500);
    }
    if (step === 2) {
        writeStory(`一年後的邊境談判桌上，王室不得不承認羅維恩的半自治地位。<br>史書寫道：「羅維恩女公爵——第一位拒絕王冠，卻仍然戴上權力的人。」<br><br>夜深時，妳獨自站在書房，桌上堆滿軍報與財務帳冊。<br>妳看著那枚族徽忽然想起祈禱室的鐘聲。妳不是沒有孤單，妳只是選擇與它共存。<br>但至少，這每一步都是妳自己選的。<br><br>達成結局：【無冕之后】`)
        interactionEl.innerHTML = `<button onclick="location.reload()">重新開始</button>`;
    }
}
function endingF(step){
    const interactionEl = document.getElementById('interaction-area');
    const statsPanel = document.getElementById('stats-panel');
    document.body.style.backgroundColor = "#0a0a0a";
    document.getElementById('story-text').style.color = "#b37474";
    if (step === 0) {
        writeStory(`妳還未來得及做出選擇，祈禱室的門被撞開。大主教的聲音冷靜而清晰：「以叛國罪之名——拘捕羅維恩繼承人。」空氣像被抽乾，妳沒有辯解，因為妳忽然明白——這不是審判，這是預設。艾德里安站在人群後方神情平靜，他沒有救妳，也沒有指認妳。<br><br>羅倫斯拔劍，第一箭射穿他的肩膀，第二箭刺入腹部。他仍然站著擋在妳前面，像一面即將倒塌的牆。他回頭看妳，那雙眼裡沒有責怪，只有一句無聲的話：對不起。<br>第三箭射來，他跪倒在妳腳邊，血沿著石縫蔓延。妳蹲下來替他抹去臉上的血，很輕、很慢，像最後一次確認他是真實的。<br>守衛拉開妳，鐵鏈扣上手腕。妳被按在祭壇前，大主教展開羊皮紙。證詞詳盡、動機完整、證據確鑿，每一條都準確得不像臨時編造。<br><br>妳忽然笑了一下。<br>原來——妳早已被寫好結局。<br><br>桌上的銀杯還在，那本該是為加冕準備的酒，如今，裡面只剩下一點無色的液體。<br>妳掙開半寸，指尖碰到冰冷的杯緣。妳抬頭最後一次看向聖堂穹頂，彩色玻璃的光落在妳臉上。那光很美，像是誰在為這一刻祈禱。`)
        interactionEl.innerHTML = `<button onclick="endingF(1)">【飲下】</button>`;
    }
    if (step === 1) {
        
        writeStory("沒有味道。<br>下一瞬，灼燒從喉嚨一路蔓延下去。");
        
        interactionEl.innerHTML = `<span class="system-msg">命運的齒輪開始轉動...</span>`;
        setTimeout(() => { storyEl.innerHTML += "<br><br>鐘聲在此刻敲響，加冕儀式開始，只是王座上站的不是妳。<br>妳倒在祈禱室角落，呼吸漸弱視線模糊。最後映入眼簾的是莉薇安穿著妳的禮服走向祭壇，她的裙擺潔白像從未沾血。"; }, 1500);
        setTimeout(() => { storyEl.innerHTML += "<br><br>妳忽然想起一件小事。<br>那年春天，花園裡的黑色鬱金香開得極盛，妳曾親手剪下一朵卻忘了澆水。它枯死得很快，就像現在。"; }, 3500);
        setTimeout(() => { 
            storyEl.innerHTML += "<br><br>鐘聲落下最後一響。<br>妳閉上眼。<br>沒有王冠。<br>沒有神<br>沒有逃亡<br>只有寂靜<br><br>這場博弈中，妳唯一的自由，是選擇如何退場。<br><br>達成結局：【凋零的黑色鬱金香】";
            interactionEl.innerHTML = `<button onclick="location.reload()">重新開始</button>`;
        }, 5500);
    }

}
