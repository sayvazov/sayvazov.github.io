
function FillWord(slider, result_name) {
    var output = document.getElementById(result_name);
    
    if (slider.value < 20) {
        output.innerHTML = "<p>Not Very. I don't mess with that.</p>";
        return;
    }
    if (slider.value < 40) {
        output.innerHTML = "<p>I mean, sorta?</p>";
        return;
    }
    if (slider.value < 60) {
        output.innerHTML = "<p>I got some of that shit.</p>";
        return;
    }
    if (slider.value < 80) {
        output.innerHTML = "<p>You know, no big, I try.</p>";
        return;
    }
    if (slider.value < 100) {
        output.innerHTML = "<p>Fuck yeah, all about it.</p>";
        return;
    }
}

// Display the default slider value
var aesthetic_slider = document.getElementById("aesthetic_slider");
aesthetic_slider.onclick = function(){FillWord(aesthetic_slider, "aesthetic_result");};

var basic_slider = document.getElementById("basic_slider");
basic_slider.onclick = function(){FillWord(basic_slider, "basic_result");};

var chaotic_slider = document.getElementById("chaotic_slider");
chaotic_slider.onclick = function(){FillWord(chaotic_slider, "chaotic_result");};

var kinky_slider = document.getElementById("kinky_slider");
kinky_slider.onclick = function(){FillWord(kinky_slider, "kinky_result");};

var majestic_slider = document.getElementById("majestic_slider");
majestic_slider.onclick = function(){FillWord(majestic_slider, "majestic_result");};

var nihilistic_slider = document.getElementById("nihilistic_slider");
nihilistic_slider.onclick = function(){FillWord(nihilistic_slider, "nihilistic_result");};

var quirky_slider = document.getElementById("quirky_slider");
quirky_slider.onclick = function(){FillWord(quirky_slider, "quirky_result");};

var rigorous_slider = document.getElementById("rigorous_slider");
rigorous_slider.onclick = function(){FillWord(rigorous_slider, "rigorous_result");};

var spicy_slider = document.getElementById("spicy_slider");
spicy_slider.onclick = function(){FillWord(spicy_slider, "spicy_result");};

var wholesome_slider = document.getElementById("wholesome_slider");
wholesome_slider.onclick = function(){FillWord(wholesome_slider, "wholesome_result");};

var sliders_by_word = {
    "aesthetic": aesthetic_slider,
    "basic": basic_slider,
    "chaotic": chaotic_slider,
    "kinky": kinky_slider,
    "majestic": majestic_slider,
    "nihilistic": nihilistic_slider,
    "quirky": quirky_slider,
    "rigorous": rigorous_slider,
    "spicy": spicy_slider,
    "wholesome": wholesome_slider
};
words = [];

for (var word in sliders_by_word) {
    sliders_by_word[word].value = 50;
    words.push(word);
}

// console.log (words);
items = [
    "1. A copy of the 2006 University of Chicago Scavenger Hunt List. [1 point] (2006)",
    "24. That train is looking pretty grimy. Do me a favor and ride it through a drive-through trainwash. [12 points] (2010)",
    "54. You little rascals made a pedal powered go-kart that seats two? Let’s see what it can do and, of course,if it can look good doing it. [250 points based on aesthetics, mechanism, placement in the race, and course objectives.] † (2016)",
    "58. A permanent tattoo (we’re talking the real deal) that reads, “Sorry about the syphilis, can we still be cousins?” [69 points] (2004)",
    "81. A team member dragging the Stone of Shame into Judgment. [7 points. You are expected to drag the Stone of Triumph into your headquarters if your team wins the Hunt or said victory will be declared null and void] (2015)",
    "194. A kugel bowling ball fountain. [60 points] (2014.2)",
    "240. A breeder reactor built in a shed, and the boy scout badge to prove credit was given where boy scout credit was due. [500 points] (1999)",
    "241. Hey kids! At Jack’s Tavern, buy your very own ball of twine starter kit, and say hello to the newest member of the Cabinet. Over the course of the next two days, you will add to the ball of twine and nurture it. Document its growth by having it present in all subsequent road trip photos. Top it off with the flag and sign from the starter kit, and bring your buddy to Judgment. [6 points for the starter kit, 0.1 points per cubic inch] (2011)",
    "252. At some point during the Hunt, your Captain must go down with the ship—either literally or figuratively. Points will be awarded based on two criteria: first, the nobility of the sacrifice, and second, a team member playing “Taps” as the Captain descends into the real or metaphorical abyss. [5 points] (2014.2)",
    "ScavvenWedding 11. Of course, no wedding would be complete without the traditional crowdsurf down the aisle. [3 points] (2015)",
];

scores = [];

data = `"Timestamp","Aesthetic","Basic","Chaotic","Kinky","Majestic","Nihilistic","Quirky","Rigorous","Spicy","Wholesome","Aesthetic","Basic","Chaotic","Kinky","Majestic","Nihilistic","Quirky","Rigorous","Spicy","Wholesome","Aesthetic","Basic","Chaotic","Kinky","Majestic","Nihilistic","Quirky","Rigorous","Spicy","Wholesome","Aesthetic","Basic","Chaotic","Kinky","Majestic","Nihilistic","Quirky","Rigorous","Spicy","Wholesome","Aesthetic","Basic","Chaotic","Kinky","Majestic","Nihilistic","Quirky","Rigorous","Spicy","Wholesome","Aesthetic","Basic","Chaotic","Kinky","Majestic","Nihilistic","Quirky","Rigorous","Spicy","Wholesome","Aesthetic","Basic","Chaotic","Kinky","Majestic","Nihilistic","Quirky","Rigorous","Spicy","Wholesome","Aesthetic","Basic","Chaotic","Kinky","Majestic","Nihilistic","Quirky","Rigorous","Spicy","Wholesome","Aesthetic","Basic","Chaotic","Kinky","Majestic","Nihilistic","Quirky","Rigorous","Spicy","Wholesome","Aesthetic","Basic","Chaotic","Kinky","Majestic","Nihilistic","Quirky","Rigorous","Spicy","Wholesome"
"2020/05/14 10:19:49 PM AST","5","10","1","1","3","1","7","10","5","10","5","10","10","10","5","10","10","1","10","5","10","1","8","8","10","4","9","10","7","10","8","1","10","10","2","8","10","3","10","1","8","1","2","6","10","1","3","10","7","8","1","3","9","7","1","9","6","7","10","2","8","1","10","6","8","5","7","9","10","2","6","9","1","7","6","5","5","10","7","9","","","","","","","","","","","10","2","6","8","10","6","10","7","10","10"
"2020/05/14 10:20:46 PM AST","5","10","1","2","3","2","1","9","1","10","3","8","9","6","4","9","8","3","8","6","10","3","9","8","9","8","7","3","6","9","10","4","9","10","7","10","8","2","7","6","6","6","3","7","8","10","4","3","2","6","8","5","7","3","6","7","6","3","7","9","3","3","10","9","9","10","9","4","6","8","4","7","2","9","8","3","4","2","1","8","","","","","","","","","","","9","9","10","8","9","1","6","4","5","9"
"2020/05/14 10:23:21 PM AST","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","4","7","6","6","9","9","6","4","6","10","","","","","","","","","",""
"2020/05/14 10:31:36 PM AST","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","9","3","2","6","10","1","3","9","8","10","","","","","","","","","",""
"2020/05/14 10:35:17 PM AST","1","10","1","1","1","1","1","1","1","5","1","5","10","10","1","8","4","1","8","1","10","1","7","1","10","1","5","10","1","10","6","1","4","10","1","8","8","10","10","1","10","3","5","3","10","10","10","10","5","7","6","1","10","1","1","10","10","4","1","1","10","1","10","7","10","10","10","10","4","10","4","5","4","6","10","4","7","10","1","10","10","5","8","7","10","10","2","3","5","3","10","4","4","4","10","1","10","3","3","10"
"2020/05/14 10:36:23 PM AST","7","9","2","1","2","2","4","1","2","4","3","4","6","2","3","2","7","5","4","7","3","4","7","2","6","2","7","8","6","6","2","2","10","8","2","5","3","5","10","1","2","4","4","1","2","4","5","4","2","3","7","3","8","1","7","3","6","8","6","6","3","2","7","4","5","7","6","9","8","3","6","3","6","1","4","2","8","5","4","9","7","4","6","4","8","7","3","3","4","4","5","5","8","4","6","6","9","5","4","7"
"2020/05/14 10:37:42 PM AST","1","1","2","1","1","10","1","1","1","4","3","3","6","2","2","2","4","2","2","5","9","1","8","2","8","2","4","9","7","4","8","1","10","6","2","2","4","4","8","1","2","2","5","5","6","2","3","5","5","5","3","1","5","3","4","1","4","6","5","2","3","1","5","4","5","1","6","6","6","4","8","1","3","3","5","2","5","4","5","5","4","1","6","6","10","10","7","6","5","3","4","1","10","10","10","2","6","10","9","9"
"2020/05/14 10:38:12 PM AST","3","10","1","1","1","1","1","10","1","10","10","5","7","8","9","10","7","7","10","10","10","10","10","6","10","6","6","9","7","10","6","4","9","9","8","5","9","7","9","3","7","8","1","1","10","1","10","10","1","10","6","3","8","8","9","4","9","9","6","10","7","1","10","10","10","10","10","10","10","10","10","8","8","9","8","7","9","9","3","8","7","6","7","6","5","4","6","4","5","5","10","3","10","10","10","10","10","10","10","10"
"2020/05/14 10:38:31 PM AST","10","10","10","10","10","10","10","10","10","10","3","5","5","1","9","6","8","4","3","4","7","4","4","2","9","5","7","5","3","8","10","1","4","8","10","9","9","3","2","1","6","5","7","5","9","8","5","9","5","6","7","2","7","3","8","7","9","6","3","5","7","1","1","1","10","10","10","10","5","8","7","4","6","6","9","4","7","8","3","8","8","4","3","1","9","5","6","4","2","5","10","1","8","7","10","5","8","7","8","10"
"2020/05/14 10:41:50 PM AST","3","8","2","1","9","3","3","7","4","9","3","2","9","4","7","8","8","3","7","1","9","2","6","2","5","3","8","7","4","5","4","4","10","7","4","9","7","3","9","1","5","5","4","3","10","2","4","4","3","8","9","3","7","2","7","3","6","4","5","6","2","2","8","2","7","8","9","9","6","3","4","7","6","3","5","4","5","5","3","7","7","3","8","3","9","6","7","4","3","8","8","2","7","5","10","1","3","7","7","10"
"2020/05/14 10:42:42 PM AST","8","8","2","5","10","1","8","7","8","7","10","10","10","2","8","3","6","7","6","10","10","1","7","10","10","1","7","7","7","10","10","10","10","10","10","1","8","5","9","4","10","1","1","10","10","1","10","10","10","6","3","5","2","1","5","1","1","1","1","1","10","1","10","6","10","3","8","10","10","10","3","3","3","3","4","3","3","3","3","3","7","4","7","3","10","8","4","4","4","7","10","5","3","7","8","1","8","6","4","10"
"2020/05/14 10:45:04 PM AST","1","10","1","1","10","1","9","10","5","6","1","6","10","8","8","1","9","2","1","7","10","4","8","9","10","8","9","7","6","8","1","1","10","10","1","9","8","9","10","2","10","8","7","7","10","1","4","9","1","10","3","4","9","4","4","7","7","6","3","3","3","5","10","5","8","9","6","8","10","1","1","6","1","1","1","5","6","5","1","4","8","8","3","3","8","8","2","7","2","8","10","9","5","6","10","8","8","4","6","10"
"2020/05/14 10:46:05 PM AST","5","1","3","2","3","7","3","10","3","7","8","5","8","3","3","4","6","3","8","6","9","3","7","7","8","9","3","3","3","3","2","1","10","10","5","10","10","10","10","1","10","4","6","3","10","7","5","10","3","8","5","9","3","2","5","3","2","4","1","8","4","10","9","3","6","6","8","10","10","3","8","4","8","5","8","9","8","1","3","6","10","4","3","2","10","6","7","10","4","8","10","5","4","8","8","1","7","9","4","10"
"2020/05/14 10:50:27 PM AST","6","8","10","4","7","5","8","3","1","1","10","7","4","10","9","4","6","10","5","1","9","3","3","1","4","1","4","2","5","5","10","10","10","10","10","10","10","10","10","10","9","4","5","10","7","3","7","10","4","1","6","4","8","10","8","4","8","4","7","1","10","10","10","10","10","10","10","10","8","4","5","3","5","2","6","1","6","7","4","6","7","5","10","10","10","5","7","6","3","7","10","10","10","10","10","1","10","10","10","10"
"2020/05/14 10:58:17 PM AST","5","10","1","1","5","5","10","5","1","9","1","5","10","10","10","10","10","1","10","1","10","2","7","8","10","2","10","9","10","10","1","3","10","7","1","8","6","2","4","1","10","3","2","10","10","1","9","10","9","10","1","10","8","1","1","10","2","2","2","1","2","1","9","1","9","10","10","10","10","7","3","8","2","9","8","3","8","4","2","9","9","8","8","8","9","9","9","4","3","7","10","1","10","8","10","7","10","10","10","10"
"2020/05/14 10:58:51 PM AST","5","10","1","1","3","1","3","1","1","7","6","4","7","2","6","2","7","8","4","5","10","1","8","2","8","2","7","9","4","5","6","2","10","10","3","7","5","5","9","1","8","6","5","3","7","8","7","6","3","5","1","1","10","10","6","4","8","4","10","1","10","1","10","2","8","5","6","10","10","6","8","7","6","4","5","2","5","3","1","8","10","5","7","3","10","10","6","8","3","4","10","7","8","5","10","1","8","7","7","10"
"2020/05/14 11:03:51 PM AST","1","10","1","1","1","3","1","1","1","3","5","2","3","2","6","1","7","7","1","8","8","3","9","1","7","5","6","6","1","4","1","1","10","10","1","9","10","4","10","1","6","3","8","1","7","8","6","8","1","9","3","1","9","1","4","6","8","5","5","6","9","1","10","1","10","9","9","10","4","3","6","6","9","4","8","2","10","5","1","10","7","4","6","3","9","10","5","1","3","4","9","10","10","8","8","1","8","1","7","10"
"2020/05/14 11:10:12 PM AST","7","10","4","5","10","1","9","7","7","6","5","6","8","8","4","3","5","2","6","6","9","2","7","4","10","1","6","8","4","7","6","3","10","10","3","3","5","6","10","4","7","7","6","7","10","3","1","10","1","6","9","1","8","6","7","3","7","3","2","4","6","1","8","2","10","2","4","7","3","5","6","8","6","5","4","6","8","7","4","8","9","4","4","5","10","6","3","8","1","10","10","1","1","2","10","1","8","3","1","10"
"2020/05/14 11:11:55 PM AST","7","4","9","7","6","10","9","7","8","5","10","5","6","7","10","4","7","7","6","9","10","6","6","6","7","5","6","10","8","9","7","6","10","7","3","10","9","4","7","1","10","5","7","7","9","2","6","10","7","9","8","4","9","10","3","6","9","8","9","4","8","5","9","5","8","3","4","8","4","6","10","4","8","9","10","3","6","9","5","9","10","2","8","7","9","3","7","9","10","6","10","7","9","8","7","9","8","9","9","7"
"2020/05/14 11:12:35 PM AST","1","1","1","1","1","1","1","1","1","","10","10","10","10","10","10","10","10","10","10","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""
"2020/05/14 11:15:24 PM AST","1","10","1","1","1","10","1","1","1","10","6","2","5","8","8","4","4","9","9","10","10","1","3","5","10","3","10","10","4","4","10","1","10","10","10","10","10","10","10","10","10","10","1","1","9","2","1","6","5","10","1","1","10","1","1","10","10","10","2","5","10","2","2","10","10","10","4","10","10","7","1","1","1","1","1","1","1","1","1","1","10","4","7","6","9","2","5","5","2","10","10","8","10","7","10","3","10","10","10","10"
"2020/05/14 11:20:32 PM AST","2","10","10","7","8","5","3","10","2","1","10","1","10","3","1","10","6","1","4","4","8","2","5","1","10","2","5","5","3","8","10","3","8","10","3","10","5","3","6","2","7","7","4","1","10","3","7","10","3","9","5","1","8","1","7","10","3","10","7","1","7","1","10","2","10","8","10","10","10","7","6","10","3","5","8","1","8","3","1","8","8","5","2","1","10","1","5","2","1","6","10","2","4","8","10","1","8","2","2","10"
"2020/05/14 11:22:49 PM AST","4","10","1","1","1","1","1","2","1","7","1","2","10","2","8","9","7","1","1","1","10","2","9","2","9","2","8","7","3","5","1","1","10","8","1","6","4","3","9","1","5","4","6","2","9","5","9","2","1","9","1","1","10","1","2","2","8","2","1","1","3","1","9","1","8","8","7","10","7","1","4","8","4","7","2","1","6","1","1","10","10","2","6","3","10","9","5","1","1","3","9","1","8","1","10","1","8","1","1","10"
"2020/05/14 11:31:39 PM AST","2","6","10","2","7","4","9","6","7","3","7","2","9","3","10","3","7","9","4","8","6","1","7","5","1","3","4","10","4","7","1","4","8","10","1","8","6","10","10","1","4","2","6","4","6","4","5","2","2","3","1","3","9","7","6","1","8","7","2","4","10","1","10","3","10","7","5","10","7","10","9","3","6","6","6","1","9","1","1","10","10","3","7","7","10","9","8","7","7","4","8","1","9","10","5","1","10","9","4","7"
"2020/05/14 11:55:57 PM AST","8","7","9","7","9","3","10","10","10","6","3","7","10","3","4","3","5","1","6","5","8","4","9","2","5","8","6","7","5","6","2","4","7","9","3","8","4","5","9","2","7","7","5","2","9","6","3","8","5","10","7","5","7","4","7","4","5","7","6","7","4","10","10","2","10","10","6","10","9","2","8","8","5","1","4","1","6","4","3","10","9","8","8","3","10","8","6","10","7","8","10","4","10","7","9","6","5","8","8","8"
"2020/05/14 11:58:46 PM AST","10","8","10","8","10","3","10","10","10","10","9","10","10","4","10","3","10","10","1","10","10","1","10","10","10","1","10","10","10","10","10","1","10","10","1","10","10","1","10","1","10","1","10","10","10","1","10","10","10","8","10","10","10","10","7","10","10","10","10","1","10","1","10","1","10","1","10","10","10","10","10","1","10","10","10","1","10","10","1","10","1","1","10","10","10","10","10","10","1","10","10","1","8","3","10","1","10","6","6","10"
"2020/05/14 11:59:38 PM AST","7","4","3","7","6","6","7","2","6","4","2","6","2","2","3","7","3","7","4","6","7","1","5","5","7","2","5","10","5","9","2","9","9","10","2","9","5","10","10","1","4","6","7","7","7","5","7","8","3","5","1","4","7","3","5","8","7","9","2","5","6","1","7","7","8","3","7","10","7","6","5","7","6","6","6","4","6","4","2","10","8","4","7","4","9","9","6","4","6","9","10","1","8","7","10","1","10","10","7","10"
"2020/05/15 12:08:44 AM AST","5","9","3","1","5","3","7","8","5","2","10","2","8","3","3","4","4","9","9","5","10","3","10","2","10","3","6","8","9","8","6","5","10","8","3","3","5","4","9","1","10","2","9","7","10","9","7","10","5","3","8","3","4","5","8","5","4","6","5","5","6","2","5","6","5","7","9","10","6","6","9","6","7","4","6","3","10","8","2","9","10","1","2","3","10","10","2","10","5","5","10","1","10","5","8","2","9","7","8","6"
"2020/05/15 12:13:51 AM AST","8","5","10","1","4","10","10","5","10","10","10","5","10","5","10","10","10","5","8","8","3","3","9","4","10","8","8","4","8","10","1","1","2","8","2","2","2","2","6","1","8","5","9","5","5","8","5","5","5","2","5","1","5","5","5","5","5","5","5","5","5","5","5","2","5","5","8","5","5","10","4","1","6","7","5","7","9","7","5","10","5","5","5","5","5","5","5","5","5","5","7","3","6","5","8","4","4","5","6","7"
"2020/05/15 12:18:45 AM AST","5","2","10","6","9","3","8","6","7","4","7","2","6","3","8","1","8","1","10","4","9","7","3","1","8","2","6","6","2","9","1","1","10","9","9","2","10","10","10","1","2","5","2","1","4","4","3","4","5","5","7","2","8","4","7","1","8","5","4","4","8","2","10","2","10","7","8","10","8","3","5","4","2","5","6","1","4","3","2","7","8","4","7","1","6","10","3","5","3","6","10","1","10","2","9","1","10","5","7","10"
"2020/05/15 12:19:48 AM AST","7","10","7","4","2","7","1","1","1","8","3","3","8","6","7","3","9","3","5","10","8","3","9","2","8","2","5","8","3","4","1","8","3","9","1","1","4","2","10","1","7","2","2","9","8","10","6","10","3","1","9","1","6","3","8","2","7","10","3","5","7","3","10","10","10","10","7","10","7","2","7","9","6","10","3","2","2","7","3","8","8","2","6","3","8","8","5","4","3","5","10","4","6","4","10","1","6","7","7","10"
"2020/05/15 12:37:30 AM AST","6","7","2","1","9","3","5","10","4","7","8","1","8","3","10","3","8","10","6","6","10","1","5","5","10","3","8","9","7","10","10","1","10","9","3","8","10","7","10","2","8","4","10","8","3","8","6","10","10","6","3","1","10","1","7","8","10","6","10","4","8","1","10","4","7","10","7","10","8","1","3","6","8","10","5","5","8","6","3","9","10","3","5","1","10","1","3","5","2","9","10","2","6","8","10","7","4","9","2","10"
"2020/05/15 12:45:41 AM AST","10","10","4","3","7","6","8","3","1","10","10","5","10","10","10","2","3","4","6","10","9","2","10","10","4","6","10","10","3","7","10","4","10","10","2","5","1","4","10","1","6","6","8","7","6","9","6","6","6","8","10","2","4","6","7","1","3","7","4","10","6","6","10","3","7","10","9","10","8","6","10","4","8","10","4","5","2","3","4","9","10","7","8","6","10","2","5","6","3","7","10","7","10","10","10","1","9","5","6","10"
"2020/05/15 12:53:56 AM AST","1","1","4","1","1","4","3","1","1","4","1","3","8","1","2","4","6","2","4","3","8","3","2","3","3","1","3","1","2","8","1","1","10","9","1","6","6","1","8","1","6","3","7","2","9","2","8","7","3","9","1","1","10","2","4","7","8","4","8","3","8","1","7","3","9","3","6","10","2","5","6","7","3","1","8","3","5","3","1","10","8","5","10","1","10","8","6","5","3","4","4","3","10","6","6","3","10","5","2","6"
"2020/05/15 1:05:48 AM AST","7","6","1","5","3","1","2","2","1","10","10","2","8","4","10","6","5","1","3","6","4","5","7","4","6","2","3","9","4","4","8","4","9","10","7","5","7","6","10","1","3","5","7","8","10","10","4","6","1","8","5","5","5","5","5","5","5","5","5","5","5","5","9","8","3","5","7","4","4","3","6","5","3","8","4","4","7","4","3","9","10","1","6","8","10","5","2","5","3","4","10","3","8","3","8","4","8","5","4","9"
"2020/05/15 1:34:50 AM AST","3","10","1","1","2","5","2","1","1","7","7","3","9","10","10","3","4","3","7","8","8","3","8","6","10","3","4","6","7","6","1","1","10","10","3","9","8","1","10","1","6","2","1","8","","3","5","8","2","6","10","6","2","1","8","2","3","4","2","8","10","1","10","5","10","10","10","10","10","6","5","7","2","8","3","1","5","2","2","10","10","3","1","1","10","8","7","8","3","10","10","4","8","7","10","1","8","8","6","10"
"2020/05/15 1:38:27 AM AST","1","10","1","1","3","2","3","2","1","5","7","2","10","8","9","4","8","8","10","7","10","1","10","10","10","7","8","10","10","5","7","3","10","10","5","8","8","3","8","1","10","2","6","6","10","7","8","10","7","8","6","2","8","7","9","8","10","7","7","2","6","1","10","8","10","9","8","10","10","1","8","7","4","7","3","2","3","2","2","9","10","1","7","9","10","10","10","4","7","7","10","1","10","10","10","1","10","5","8","10"
"2020/05/15 11:04:12 AM AST","5","10","1","2","8","1","7","10","5","1","3","1","10","9","10","10","10","1","5","10","8","5","2","1","7","1","5","7","5","7","10","1","10","6","7","2","3","8","6","9","8","3","1","8","9","1","4","7","2","2","7","7","7","7","7","7","7","7","7","7","9","6","6","3","9","2","10","10","9","8","10","3","1","2","9","1","7","8","1","10","9","3","1","5","8","2","4","10","4","6","10","7","9","10","10","1","7","6","5","10"
"2020/05/15 11:14:49 AM AST","8","1","10","2","3","5","7","7","2","3","10","1","8","8","10","8","5","4","1","1","10","1","10","3","10","2","9","9","2","8","9","5","10","6","1","8","6","2","1","2","10","1","5","6","8","3","4","10","6","8","6","5","3","2","6","4","8","9","6","5","10","8","10","2","10","3","10","10","2","4","8","9","6","2","3","6","7","4","2","2","10","3","5","1","4","6","7","8","1","3","10","2","4","8","9","1","10","6","8","10"
"2020/05/15 11:38:13 AM AST","8","1","10","5","10","2","10","8","10","6","7","2","8","4","6","6","","1","5","7","10","6","9","4","9","2","7","7","4","6","6","6","10","6","4","7","3","10","10","1","5","4","7","7","8","6","3","8","4","5","9","2","7","7","8","7","7","5","6","6","4","5","9","7","7","10","3","6","4","2","4","4","6","8","4","7","6","5","4","10","10","6","6","6","10","9","4","5","5","5","10","8","8","6","6","7","3","5","7","6"
"2020/05/15 11:44:13 AM AST","10","1","1","2","10","3","1","1","1","10","9","2","5","3","8","2","8","6","3","7","9","1","10","5","9","2","5","7","3","4","7","1","10","10","3","7","8","6","8","1","10","8","3","3","10","1","6","7","2","10","2","3","7","5","2","3","5","3","7","5","6","1","7","7","10","10","7","10","3","1","10","8","5","6","10","1","6","4","4","10","10","9","2","4","9","10","2","4","5","7","10","2","8","5","10","1","10","6","6","10"
"2020/05/15 11:49:47 AM AST","3","8","2","1","1","1","2","1","1","4","5","4","7","1","4","1","6","7","1","8","5","4","7","1","2","4","3","8","1","8","5","2","6","5","4","9","9","9","7","1","4","7","3","1","4","4","4","5","2","5","7","2","5","1","6","5","8","7","1","8","5","5","5","1","2","2","6","6","1","6","7","7","5","1","4","1","6","4","1","9","8","3","7","1","8","7","6","6","1","4","7","4","6","3","7","4","7","5","4","4"
"2020/05/15 11:52:35 AM AST","2","6","10","8","10","3","2","4","2","10","10","1","7","","9","6","8","1","4","10","8","7","10","4","10","8","6","9","4","10","5","10","3","6","1","10","3","1","7","1","10","10","10","10","10","10","10","10","10","10","1","1","10","1","1","1","1","1","1","1","4","4","5","3","7","2","3","8","3","4","7","10","10","8","10","4","5","10","7","10","","","","","","","","","","","8","9","5","4","7","3","7","8","5","10"
"2020/05/15 1:41:08 PM AST","8","10","2","3","8","1","5","7","2","2","8","1","6","6","8","2","9","6","8","10","10","3","5","5","10","2","6","4","7","8","1","2","10","8","2","5","7","3","10","1","10","1","8","2","10","4","","7","3","7","6","2","9","3","5","2","9","3","6","5","8","1","10","5","10","10","7","10","10","5","6","7","8","4","9","2","7","7","3","10","9","7","1","1","10","9","4","10","7","9","10","1","10","8","9","6","9","7","7","7"
"2020/05/15 4:31:08 PM AST","8","10","1","2","6","1","6","8","4","10","7","3","8","7","8","4","7","5","7","7","6","4","4","1","8","3","9","7","6","10","1","2","10","10","1","10","2","5","7","1","8","4","3","5","7","7","5","3","8","6","6","4","8","5","9","6","7","5","3","9","9","1","8","3","10","7","6","10","9","10","7","8","3","6","5","4","7","2","2","9","10","3","4","5","10","7","4","6","5","8","8","4","10","7","7","3","10","5","6","8"
"2020/05/15 4:34:52 PM AST","2","2","2","1","1","2","5","1","1","1","3","4","7","6","5","3","3","3","5","3","8","3","8","7","8","2","4","5","5","5","2","2","10","10","1","2","8","7","10","1","7","5","7","8","3","3","5","5","5","6","8","2","8","4","8","2","7","5","7","4","10","5","10","2","9","2","10","9","9","3","8","5","4","3","6","3","7","4","4","8","8","3","8","7","8","3","6","3","7","5","8","5","7","9","9","2","8","5","7","9"
"2020/05/15 6:56:07 PM AST","2","10","6","1","1","2","1","1","1","2","6","4","8","1","7","5","7","3","5","3","9","1","8","1","10","3","7","9","5","7","1","1","10","9","7","6","9","3","10","1","7","8","6","1","10","1","6","6","1","5","7","8","7","1","9","6","8","6","1","1","4","1","10","1","8","7","10","10","9","1","8","7","2","1","3","2","5","4","5","10","10","5","7","1","9","4","5","1","7","5","10","1","10","6","9","1","10","9","10","10"
"2020/05/15 10:38:19 PM AST","10","10","10","10","10","10","10","1","10","10","1","10","10","10","10","10","10","10","10","10","10","1","10","10","10","10","10","10","10","10","10","1","10","10","10","10","10","10","10","10","10","10","10","10","1","10","10","10","10","10","10","10","10","10","10","1","10","10","10","10","1","10","10","10","10","10","10","10","10","10","10","10","10","10","10","10","10","10","1","10","10","10","10","10","10","1","10","10","10","10","10","10","10","10","10","10","10","10","10","10"
"2020/05/15 11:46:03 PM AST","8","10","5","3","6","7","4","1","1","9","10","10","10","10","10","10","10","10","10","10","10","3","7","3","10","4","7","9","7","6","9","9","8","7","3","6","6","3","6","1","10","1","10","10","10","1","10","10","1","3","9","2","6","6","9","4","7","2","4","1","10","10","10","10","10","10","10","10","10","10","10","1","10","10","10","1","5","10","10","1","5","6","8","7","5","10","4","2","3","1","10","1","1","7","10","1","10","10","10","10"
"2020/05/16 1:30:52 AM AST","10","10","10","2","10","5","9","9","6","4","8","3","9","2","7","6","7","8","8","3","8","4","7","4","7","8","8","8","6","8","10","1","10","7","7","10","10","9","9","1","3","3","8","2","9","5","8","10","6","4","8","5","3","3","4","3","3","3","3","4","4","3","10","4","8","8","8","8","7","8","8","7","6","7","6","7","7","4","4","9","8","4","9","6","6","8","8","6","5","7","8","2","7","6","8","7","8","6","6","10"
"2020/05/16 10:11:24 AM AST","7","9","9","8","3","5","7","2","7","1","9","3","7","5","10","8","6","1","3","2","4","3","8","5","7","3","3","2","4","7","7","8","10","7","1","7","3","4","8","1","10","4","3","5","10","3","2","4","3","3","9","7","9","9","3","2","6","4","6","1","3","9","7","6","4","8","2","8","2","2","8","9","5","2","5","2","7","4","3","10","9","8","3","2","10","7","4","3","2","5","7","9","6","7","1","7","4","5","6","8"
"2020/05/16 5:05:20 PM AST","7","3","2","1","7","4","6","2","3","8","3","7","10","2","3","5","7","3","1","5","4","2","7","2","5","5","6","10","2","6","2","2","10","10","1","5","1","2","9","1","2","4","8","2","4","5","5","3","3","3","3","2","7","1","7","5","8","7","2","8","8","1","10","3","10","10","10","10","3","1","7","2","2","1","7","5","8","3","1","7","2","2","8","1","2","5","8","4","1","5","8","2","5","7","9","3","7","3","7","10"`;

var responses = data.split("\n");
// console.log(responses[0]);

scores_by_item = []; // array, item index -> 
for (var i = 0 ; i < items.length; i++) {
    score_by_word = {}; // dictionary of word -> array of values.
    for (var word_index = 0; word_index < words.length; word_index++) {
        word = words[word_index];
        score_by_word[word] = []; // Empty array, will be filled with values.
    }
    scores_by_item.push(score_by_word);
}
// console.log(scores_by_item);

// First line is column names, ignore it.
for (var i=1; i < responses.length; i++) {
    response_scores = responses[i].split(',');

    word_index = 0;
    item_index = 0;
    // First value is timestamp, ignore it. 
    for (var j = 1; j < response_scores.length; j++) {
        value_string = response_scores[j];
        if (value_string != "\"\"") {
            value = parseInt(value_string.replace(/[^0-9\.]+/g, ""));
            scores_by_item[item_index][words[word_index]].push(value);
        }
        word_index++;
        if (word_index >= words.length) {
            word_index = 0;
            item_index++;
        }
    }
}
// console.log(scores_by_item);

averages_by_item = []; // array, item index ->
for (var i= 0; i < items.length; i++) {
    average_by_word = {};
    for (word in sliders_by_word) {
        sum = 0;
        // console.log(scores_by_item[i][word]);
        for (var score_i = 0; score_i < scores_by_item[i][word].length; score_i++) {
            sum += scores_by_item[i][word][score_i];
        }
        // console.log(sum);
        average_by_word[word] = sum/scores_by_item[i][word].length;
    }
    averages_by_item.push(average_by_word);
}
// console.log(averages_by_item);
distances = []
closest_item_distance = Infinity;
furthest_item_distance = 0;
function calculate_result() {
    closest_item = -1
    closest_item_distance = Infinity;
    furthest_item_distance = 0;
    distances = []
    for (var i = 0; i < items.length; i++) {
        sum_square_distance = 0;
        for (word in sliders_by_word) {
            my_value = sliders_by_word[word].value / 10.0;
            average_value = averages_by_item[i][word]
            sum_square_distance += (my_value - average_value) **2;
        }
        if (sum_square_distance < closest_item_distance) {
            closest_item_distance = sum_square_distance;
            closest_item = i;
        }
        
        if (sum_square_distance > furthest_item_distance) {
            
            furthest_item_distance = sum_square_distance;
        }
        console.log(i);
        console.log(furthest_item_distance);
        distances.push(sum_square_distance);
    }

    console.log(closest_item);
    result_text = document.getElementById("result_text");
    result_text.innerHTML = "<p>So who are you? Well, now we know. You are:</p>"
    result_text.innerHTML += "<p><b>" + items[closest_item] + "</b></p>";
    result_text.innerHTML += "<img src='prince.gif'>"
    console.log(items[closest_item]);
}

result_button = document.getElementById("result_button");
result_button.onclick = calculate_result;

function show_details() {
    console.log(furthest_item_distance);
    canvas = document.getElementById("detail_canvas");
    

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0,50,1000,3);
    first_words = []
    for (var i = 0; i < items.length ; i++) {
        word = items[i].split(" ")[0];
        first_words.push(word);
    }
    console.log(first_words);

    ctx.fillRect(500, 40, 1, 20);
    ctx.fillText("You", 500, 40);
    for (var i = 0; i < items.length ; i++) {
        distance = distances[i] / furthest_item_distance * 500;
        if (i%2 == 0)
            distance *= -1;
        distance = distance + 500;
        word = first_words[i];
        console.log(word);
        console.log(distance);

        ctx.fillRect(distance, 40, 1, 20);
        ctx.fillText(word, distance, 40);
    }
    
    explainer = document.getElementById("details_text");
    for (var i = 0 ; i < items.length; i++) {
        explainer.innerHTML += "<p>" + items[i] + "</p>";
    }
}

detail_button = document.getElementById("details");
detail_button.onclick = show_details;

//calculate_result();