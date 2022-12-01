function getRandom() {
  var numberGen = document.getElementById("number")
  numberGen.innerHTML = `<span>Your Lucky Number:</span> ` + Math.floor((Math.random() * 100000000) + 1);

      document.getElementById("clickprogress").insertAdjacentHTML("afterend",
          "||");


}
function randomImg() {
  var insights = [{
        text: "Initiating",
        linknumber: "001",
        img: "/oracle/assets/img/buddhas/buddha-001.jpg"
      }, {
        text: "Responding",
        linknumber: "002",
        img: "/oracle/assets/img/buddhas/buddha-002.jpg",
      }, {
        text: "Beginning",
        linknumber: "003",
        img: "/oracle/assets/img/buddhas/buddha-003.jpg",
      }, {
        text: "Childhood",
        linknumber: "004",
        img: "/oracle/assets/img/buddhas/buddha-004.jpg",
      }, {
        text: "Patience",
        linknumber: "005",
        img: "/oracle/assets/img/buddhas/buddha-005.jpg",
      }, {
        text: "Conflict",
        linknumber: "006",
        img: "/oracle/assets/img/buddhas/buddha-006.jpg"
      }, {
        text: "Discipline",
        linknumber: "007",
        img: "/oracle/assets/img/buddhas/buddha-007.jpg",
      }, {
        text: "Union",
        linknumber: "008",
        img: "/oracle/assets/img/buddhas/buddha-008.jpg",
      }, {
        text: "Small Influences",
        linknumber: "009",
        img: "/oracle/assets/img/buddhas/buddha-009.jpg",
      }, {
        text: "Fulfillment",
        linknumber: "010",
        img: "/oracle/assets/img/buddhas/buddha-010.jpg",
      },



      {
        text: "Advance",
        linknumber: "011",
        img: "/oracle/assets/img/buddhas/buddha-011.jpg"
      }, {
        text: "Hindrance",
        linknumber: "012",
        img: "/oracle/assets/img/buddhas/buddha-012.jpg",
      }, {
        text: "Harmony",
        linknumber: "013",
        img: "/oracle/assets/img/buddhas/buddha-013.jpg",
      }, {
        text: "Harvest",
        linknumber: "014",
        img: "/oracle/assets/img/buddhas/buddha-014.jpg",
      }, {
        text: "Humility",
        linknumber: "015",
        img: "/oracle/assets/img/buddhas/buddha-015.jpg",
      }, {
        text: "Delight",
        linknumber: "016",
        img: "/oracle/assets/img/buddhas/buddha-016.jpg"
      }, {
        text: "Following",
        linknumber: "017",
        img: "/oracle/assets/img/buddhas/buddha-017.jpg",
      }, {
        text: "Remedy",
        linknumber: "018",
        img: "/oracle/assets/img/buddhas/buddha-018.jpg",
      }, {
        text: "Approaching",
        linknumber: "019",
        img: "/oracle/assets/img/buddhas/buddha-019.jpg",
      }, {
        text: "Overview",
        linknumber: "020",
        img: "/oracle/assets/img/buddhas/buddha-020.jpg",
      },



      {
        text: "Eradication",
        linknumber: "021",
        img: "/oracle/assets/img/buddhas/buddha-021.jpg"
      }, {
        text: "Adorning",
        linknumber: "022",
        img: "/oracle/assets/img/buddhas/buddha-022.jpg",
      }, {
        text: "Falling Away",
        linknumber: "023",
        img: "/oracle/assets/img/buddhas/buddha-023.jpg",
      }, {
        text: "Turning Back",
        linknumber: "024",
        img: "/oracle/assets/img/buddhas/buddha-024.jpg",
      }, {
        text: "Honesty",
        linknumber: "025",
        img: "/oracle/assets/img/buddhas/buddha-025.jpg",
      }, {
        text: "Accumulation",
        linknumber: "026",
        img: "/oracle/assets/img/buddhas/buddha-026.jpg"
      }, {
        text: "Nourishing",
        linknumber: "027",
        img: "/oracle/assets/img/buddhas/buddha-027.jpg",
      }, {
        text: "Exceeding",
        linknumber: "028",
        img: "/oracle/assets/img/buddhas/buddha-028.jpg",
      }, {
        text: "Darkness",
        linknumber: "029",
        img: "/oracle/assets/img/buddhas/buddha-029.jpg",
      }, {
        text: "The Light",
        linknumber: "030",
        img: "/oracle/assets/img/buddhas/buddha-030.jpg",
      },


      {
        text: "Mutual Influence",
        linknumber: "031",
        img: "/oracle/assets/img/buddhas/buddha-031.jpg"
      }, {
        text: "Long Lasting",
        linknumber: "032",
        img: "/oracle/assets/img/buddhas/buddha-032.jpg",
      }, {
        text: "Retreat",
        linknumber: "033",
        img: "/oracle/assets/img/buddhas/buddha-033.jpg",
      }, {
        text: "Strength",
        linknumber: "034",
        img: "/oracle/assets/img/buddhas/buddha-034.jpg",
      }, {
        text: "Forward Motion",
        linknumber: "035",
        img: "/oracle/assets/img/buddhas/buddha-035.jpg",
      }, {
        text: "Blessing",
        linknumber: "036",
        img: "/oracle/assets/img/buddhas/buddha-036.jpg"
      }, {
        text: "Household",
        linknumber: "037",
        img: "/oracle/assets/img/buddhas/buddha-037.jpg",
      }, {
        text: "Diversity",
        linknumber: "038",
        img: "/oracle/assets/img/buddhas/buddha-038.jpg",
      }, {
        text: "Hardship",
        linknumber: "039",
        img: "/oracle/assets/img/buddhas/buddha-039.jpg",
      }, {
        text: "Relief",
        linknumber: "040",
        img: "/oracle/assets/img/buddhas/buddha-040.jpg",
      },

      {
        text: "Decreasing",
        linknumber: "041",
        img: "/oracle/assets/img/buddhas/buddha-041.jpg"
      }, {
        text: "Increasing",
        linknumber: "042",
        img: "/oracle/assets/img/buddhas/buddha-042.jpg",
      }, {
        text: "Eliminating",
        linknumber: "043",
        img: "/oracle/assets/img/buddhas/buddha-043.jpg",
      }, {
        text: "Encoutering",
        linknumber: "044",
        img: "/oracle/assets/img/buddhas/buddha-044.jpg",
      }, {
        text: "Bringing Together",
        linknumber: "045",
        img: "/oracle/assets/img/buddhas/buddha-045.jpg",
      }, {
        text: "Growing Upward",
        linknumber: "046",
        img: "/oracle/assets/img/buddhas/buddha-046.jpg"
      }, {
        text: "Exhausting",
        linknumber: "047",
        img: "/oracle/assets/img/buddhas/buddha-047.jpg",
      }, {
        text: "Replenishing",
        linknumber: "048",
        img: "/oracle/assets/img/buddhas/buddha-048.jpg",
      }, {
        text: "Void",
        linknumber: "049",
        img: "/oracle/assets/img/buddhas/buddha-049.jpg",
      }, {
        text: "Creation",
        linknumber: "050",
        img: "/oracle/assets/img/buddhas/buddha-050.jpg",
      },



      {
        text: "Action",
        linknumber: "051",
        img: "/oracle/assets/img/buddhas/buddha-051.jpg"
      }, {
        text: "Stillness",
        linknumber: "052",
        img: "/oracle/assets/img/buddhas/buddha-052.jpg",
      }, {
        text: "Developing Gradually",
        linknumber: "053",
        img: "/oracle/assets/img/buddhas/buddha-053.jpg",
      }, {
        text: "Sacred Heart",
        linknumber: "054",
        img: "/oracle/assets/img/buddhas/buddha-054.jpg",
      }, {
        text: "Abundance",
        linknumber: "055",
        img: "/oracle/assets/img/buddhas/buddha-055.jpg",
      }, {
        text: "Traveling",
        linknumber: "056",
        img: "/oracle/assets/img/buddhas/buddha-056.jpg"
      }, {
        text: "Mindfulness",
        linknumber: "057",
        img: "/oracle/assets/img/buddhas/buddha-057.jpg",
      }, {
        text: "Joy",
        linknumber: "058",
        img: "/oracle/assets/img/buddhas/buddha-058.jpg",
      }, {
        text: "Dispersing",
        linknumber: "059",
        img: "/oracle/assets/img/buddhas/buddha-059.jpg",
      }, {
        text: "Restricting",
        linknumber: "060",
        img: "/oracle/assets/img/buddhas/buddha-060.jpg",
      },



      {
        text: "Sincerity",
        linknumber: "061",
        img: "/oracle/assets/img/buddhas/buddha-061.jpg"
      }, {
        text: "The Ebb",
        linknumber: "062",
        img: "/oracle/assets/img/buddhas/buddha-062.jpg",
      }, {
        text: "Giving",
        linknumber: "063",
        img: "/oracle/assets/img/buddhas/buddha-063.jpg",
      }, {
        text: "Receiving",
        linknumber: "064",
        img: "/oracle/assets/img/buddhas/buddha-064.jpg",
      }, {
        text: "Eternal",
        linknumber: "065",
        img: "/oracle/assets/img/buddhas/buddha-065.jpg",
      }, {
        text: "Beauty",
        linknumber: "066",
        img: "/oracle/assets/img/buddhas/buddha-066.jpg"
      }, {
        text: "Reservation",
        linknumber: "067",
        img: "/oracle/assets/img/buddhas/buddha-067.jpg",
      }, {
        text: "Empty Vessel",
        linknumber: "068",
        img: "/oracle/assets/img/buddhas/buddha-068.jpg",
      }, {
        text: "Kindness",
        linknumber: "069",
        img: "/oracle/assets/img/buddhas/buddha-069.jpg",
      }, {
        text: "Primal Mother",
        linknumber: "070",
        img: "/oracle/assets/img/buddhas/buddha-070.jpg",
      },



      {
        text: "Selfless",
        linknumber: "071",
        img: "/oracle/assets/img/buddhas/buddha-071.jpg"
      }, {
        text: "Water",
        linknumber: "072",
        img: "/oracle/assets/img/buddhas/buddha-072.jpg",
      }, {
        text: "Strategy",
        linknumber: "073",
        img: "/oracle/assets/img/buddhas/buddha-073.jpg",
      }, {
        text: "Invisible Hero",
        linknumber: "074",
        img: "/oracle/assets/img/buddhas/buddha-074.jpg",
      }, {
        text: "Tools",
        linknumber: "075",
        img: "/oracle/assets/img/buddhas/buddha-075.jpg",
      }, {
        text: "Feelings",
        linknumber: "076",
        img: "/oracle/assets/img/buddhas/buddha-076.jpg"
      }, {
        text: "Misfortune",
        linknumber: "077",
        img: "/oracle/assets/img/buddhas/buddha-077.jpg",
      }, {
        text: "Nothingness",
        linknumber: "078",
        img: "/oracle/assets/img/buddhas/buddha-078.jpg",
      }, {
        text: "Unfathomable",
        linknumber: "079",
        img: "/oracle/assets/img/buddhas/buddha-079.jpg",
      }, {
        text: "Guidance",
        linknumber: "080",
        img: "/oracle/assets/img/buddhas/buddha-080.jpg",
      },



      {
        text: "Manifesting",
        linknumber: "081",
        img: "/oracle/assets/img/buddhas/buddha-081.jpg"
      }, {
        text: "The Forgotten",
        linknumber: "082",
        img: "/oracle/assets/img/buddhas/buddha-082.jpg",
      }, {
        text: "The Saint",
        linknumber: "083",
        img: "/oracle/assets/img/buddhas/buddha-083.jpg",
      }, {
        text: "The Scholar",
        linknumber: "084",
        img: "/oracle/assets/img/buddhas/buddha-084.jpg",
      }, {
        text: "The Intangible",
        linknumber: "085",
        img: "/oracle/assets/img/buddhas/buddha-085.jpg",
      }, {
        text: "Bending",
        linknumber: "086",
        img: "/oracle/assets/img/buddhas/buddha-086.jpg"
      }, {
        text: "The Rain",
        linknumber: "087",
        img: "/oracle/assets/img/buddhas/buddha-087.jpg",
      }, {
        text: "Balance",
        linknumber: "088",
        img: "/oracle/assets/img/buddhas/buddha-088.jpg",
      }, {
        text: "Greatness",
        linknumber: "089",
        img: "/oracle/assets/img/buddhas/buddha-089.jpg",
      }, {
        text: "Heart of Light",
        linknumber: "090",
        img: "/oracle/assets/img/buddhas/buddha-090.jpg",
      },



      {
        text: "Compassion",
        linknumber: "091",
        img: "/oracle/assets/img/buddhas/buddha-091.jpg"
      }, {
        text: "The Mirror",
        linknumber: "092",
        img: "/oracle/assets/img/buddhas/buddha-092.jpg",
      }, {
        text: "Less is More",
        linknumber: "093",
        img: "/oracle/assets/img/buddhas/buddha-093.jpg",
      }, {
        text: "Achievement",
        linknumber: "094",
        img: "/oracle/assets/img/buddhas/buddha-094.jpg",
      }, {
        text: "Middle Ground",
        linknumber: "095",
        img: "/oracle/assets/img/buddhas/buddha-095.jpg",
      }, {
        text: "Allowing",
        linknumber: "096",
        img: "/oracle/assets/img/buddhas/buddha-096.jpg"
      }, {
        text: "Friendship",
        linknumber: "097",
        img: "/oracle/assets/img/buddhas/buddha-097.jpg",
      }, {
        text: "Return",
        linknumber: "098",
        img: "/oracle/assets/img/buddhas/buddha-098.jpg",
      }, {
        text: "Peace",
        linknumber: "099",
        img: "/oracle/assets/img/buddhas/buddha-099.jpg",
      }, {
        text: "Strength",
        linknumber: "100",
        img: "/oracle/assets/img/buddhas/buddha-100.jpg",
      },



      {
        text: "Observance",
        linknumber: "101",
        img: "/oracle/assets/img/buddhas/buddha-101.jpg"
      }, {
        text: "The Shadow",
        linknumber: "102",
        img: "/oracle/assets/img/buddhas/buddha-102.jpg",
      }, {
        text: "Clarity",
        linknumber: "103",
        img: "/oracle/assets/img/buddhas/buddha-103.jpg",
      }, {
        text: "Being",
        linknumber: "104",
        img: "/oracle/assets/img/buddhas/buddha-104.jpg",
      }, {
        text: "The Path",
        linknumber: "105",
        img: "/oracle/assets/img/buddhas/buddha-105.jpg",
      }, {
        text: "The One",
        linknumber: "106",
        img: "/oracle/assets/img/buddhas/buddha-106.jpg"
      }, {
        text: "Understanding",
        linknumber: "107",
        img: "/oracle/assets/img/buddhas/buddha-107.jpg",
      }, {
        text: "Self",
        linknumber: "108",
        img: "/oracle/assets/img/buddhas/buddha-108.jpg",
      }, {
        text: "Tranquility",
        linknumber: "109",
        img: "/oracle/assets/img/buddhas/buddha-109.jpg",
      }, {
        text: "Desire",
        linknumber: "110",
        img: "/oracle/assets/img/buddhas/buddha-110.jpg",
      }, {
        text: "The Rainbow",
        linknumber: "111",
        img: "/oracle/assets/img/buddhas/buddha-111.jpg",
      },

 ];
      var insight = insights[Math.floor(Math.random() * insights.length)];
      document.getElementById("insight").innerHTML =
        '<h3>Congratulations! The 1000 Buddhas have chosen this important life lesson for you.</h3><h2>' + insight.text + '</h2><p>Click image for the details about your fortune</p>' +
        '<a href="/oracle/buddhas/' + insight.linknumber + '"><img src="' + insight.img + '"></a>';
    }
