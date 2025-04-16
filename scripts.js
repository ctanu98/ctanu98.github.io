/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// using array of objects as my datasets
const catalogData = [
  {
    "Title": "Harry Potter and the Philosopher's Stone",
    "Number of Episodes": 1,
    "Release Year": 2001,
    "Genre": "Fantasy, Adventure, Mystery",
    "Rating (IMDb)": 7.7,
    "Cast": "Daniel Radcliffe (Harry Potter), \nEmma Watson (Hermione Granger), \nRupert Grint (Ron Weasley), \nTom Felton (Draco Malfoy), \nAlan Rickman (Severus Snape), \nRobbie Coltrane (Rubeus Hagrid), \nRichard Harris (Albus Dumbledore), \nMaggie Smith (Minerva McGonagall), \nIan Hart (Professor Quirrell),\nZo\u00eb Wanamaker (Madame Hooch),\nMatthew Lewis (Neville Longbottom), \nBonnie Wright (Ginny Weasley), \nOliver Phelps (George Wealey), \nJames Phelps (Fred Weasley),\nChris Rankin (Percy Weasley),  \nJulie Walters (Molly Weasley),\nFiona Shaw (Petunia Dursley),\nHarry Melling (Dudley Dursley),\nRichard Griffiths (Vernon Dursley),\nJohn Hurt (Mr. Ollivander),\nGeraldine Somerville (Lily Potter),\nAdrian Rawlins (James Potter)\n",
    "Type": "Movie",
    "Origin": "UK",
    "ImageURL": "https://i.imgur.com/dbI0pHB.jpeg"
  },
  {
    "Title": "Harry Potter and the Chamber of Secrets",
    "Number of Episodes": 1,
    "Release Year": 2002,
    "Genre": "Fantasy, Adventure, Mystery",
    "Rating (IMDb)": 7.4,
    "Cast": "Daniel Radcliffe (Harry Potter), \nEmma Watson (Hermione Granger), \nRupert Grint (Ron Weasley), \nTom Felton (Draco Malfoy), \nToby Jones (Dobby),\nAlan Rickman (Severus Snape), \nRobbie Coltrane (Rubeus Hagrid), \nRichard Harris (Albus Dumbledore), \nMaggie Smith (Minerva McGonagall), \nKenneth Branagh (Gilderoy Lockhart),\nMiriam Margoyles (Professor Sprout),\nWarwick Davis (Professor Flitwick),\nGemma Jones (Madam Pomfrey),\nChristian Coulson (Tom Riddle),\nMatthew Lewis (Neville Longbottom), \nJason Isaacs (Lucius Malfoy),\nBonnie Wright (Ginny Weasley), \nOliver Phelps (George Wealey), \nJames Phelps (Fred Weasley),\nChris Rankin (Percy Weasley),  \nJulie Walters (Molly Weasley),\nMark Williams (Arthur Weasley),\nFiona Shaw (Petunia Dursley),\nHarry Melling (Dudley Dursley),\nRichard Griffiths (Vernon Dursley),\nJohn Hurt (Mr. Ollivander),\nGeraldine Somerville (Lily Potter),\nAdrian Rawlins (James Potter)",
    "Type": "Movie",
    "Origin": "UK",
    "ImageURL": "https://i.imgur.com/PyhvqDg.jpeg"
  },
  {
    "Title": "Harry Potter and the Prizoner of Azkaban",
    "Number of Episodes": 1,
    "Release Year": 2004,
    "Genre": "Fantasy, Adventure, Mystery",
    "Rating (IMDb)": 7.9,
    "Cast": "Danie Radcliffe (Harry Potter), Emma Watson (Hermione Granger),\nRupert Grint (Ron Weasley), Robbie Coltrane (Rubeus Hagrid),\nMichael Gambon (Albus Dumbledore), Alan Rickman (Severus Snape), Maggie Smith (Minerva McGonagall),\nDavid Thewlis (Remus Lupin), Gary Oldman (Sirius Black),\nTimothy Spall (Peter Pettigrew), Emma Thompson (Sybill Trelawney), \nRichard Griffiths (Vernon Dursley), Fiona Shaw (Petunia Dursley), Harry Melling (Dudley Dursley),\nJames Phelps (Fred Weasley), Oliver Phelphs (George Weasley), Chris Rankin (Percy Weasley), Bonnie Wright (Ginny Weasley), Mark Williams (Arthur Weasley), Julie Walters (Molly Weasley),\nMatthew Lewis (Neville Longbottom), David Heyman (Professor Flitwick), Robert Hardy (Cornelius Fudge), Helena Bonham Carter (Bellatrix Lestrange)\n\n",
    "Type": "Movie",
    "Origin": "UK",
    "ImageURL": "https://i.imgur.com/LD7alGV.jpeg"
  },
  {
    "Title": "Harry Potter and the Half-Blood Prince",
    "Number of Episodes": 1,
    "Release Year": 2009,
    "Genre": "Fantasy, Adventure, Mystery",
    "Rating (IMDb)": 7.6,
    "Cast": "Danile Radcliffe (Harry Potter), Emma Watson (Hermione Granger),\nRupert Grint (Ron Weasley), Tom Felton (Draco Malfoy), Evanna Lynch (Luna Lovegood),\nAlfred Enoch (Dean Thomas), Oliver Phelps (George Weasley), James Phelps (Fred Weasley),\nBonnie Wright (Ginny Weasley), Matthew Lewis (Neville Longbottom),\nDevon Murray (Seamus Finnigan), Hero Fiennes Tiffin (young Tom Riddle), Katie Leung (Cho Chang),\nMichael Gambon (Albus Dumbledore), Maggie Smith (Minerva McGonagall),\nRobbie Coltrane (Rubeus Hagrid), Jim Broadbent (Horace Slughorn), Alan Rickman (Severus Snape),\nDavid Thewlis (Remus Lupin), Natalia Tena (Nymphadora Tonks),\nWarwick Davis (Filius Flitwick), David Bradley (Argus Filch), Gemma Jones (Madam Pomfrey),\nGeraldine Sommerville (Lily Potter), Julie Walters (Molly Weasley), Mark Williams (Arthur Weasley),\nHelena Bonham Carter (Bellatrix Lestrange), Timothy Spall (Peter Pettigrew),\nHelen McCrory (Narcissa Malfoy), Tom Felton (Draco Malfoy), Jason Isaacs (Lucius Malfoy),\nDave Legeno (Fenrir Greyback)\n",
    "Type": "Movie",
    "Origin": "UK",
    "ImageURL": "https://i.imgur.com/0kZCkBe.jpeg"
  },
  {
    "Title": "Harry Potter and the Deathly Hallows (Part 1)",
    "Number of Episodes": 1,
    "Release Year": 2010,
    "Genre": "Fantasy, Adventure, Mystery",
    "Rating (IMDb)": 7.7,
    "Cast": "Danile Radcliffe (Harry Potter), Emma Watson (Hermione Granger),\nRupert Grint (Ron Weasley), Tom Felton (Draco Malfoy), Evanna Lynch (Luna Lovegood),\nAlfred Enoch (Dean Thomas), Oliver Phelps (George Weasley), James Phelps (Fred Weasley),\nBonnie Wright (Ginny Weasley), Matthew Lewis (Neville Longbottom),\nDevon Murray (Seamus Finnigan), Hero Fiennes Tiffin (young Tom Riddle), Katie Leung (Cho Chang),\nMichael Gambon (Albus Dumbledore), Maggie Smith (Minerva McGonagall),\nRobbie Coltrane (Rubeus Hagrid), Jim Broadbent (Horace Slughorn), \nAlan Rickman (Severus Snape), Toby Jones (Dobby), Brendan Gleeson (Alastor Moody),\nImelda Staunton (Dolores Umbridge), John Hurt (Garrick Ollivander),\nDavid Thewlis (Remus Lupin), Natalia Tena (Nymphadora Tonks),\nWarwick Davis (Filius Flitwick), David Bradley (Argus Filch), Gemma Jones (Madam Pomfrey),\nGeraldine Sommerville (Lily Potter), Julie Walters (Molly Weasley), Mark Williams (Arthur Weasley),\nRichard Griffiths (Vernon Dursley), Fiona Shaw (Petunia Dursley), Harry Melling (Dudley Dursley), \nRalph Fiennes (Voldemort), \nHelena Bonham Carter (Bellatrix Lestrange), Timothy Spall (Peter Pettigrew),\nHelen McCrory (Narcissa Malfoy), Tom Felton (Draco Malfoy), Jason Isaacs (Lucius Malfoy)",
    "Type": "Movie",
    "Origin": "UK",
    "ImageURL": "https://i.imgur.com/3fDY7HZ.jpeg"
  },
  {
    "Title": "Grey's Anatomy (Season 1-11)",
    "Number of Episodes": 245,
    "Release Year": 2005,
    "Genre": "Medical Drama, Romance, Drama",
    "Rating (IMDb)": 7.6,
    "Cast": "Ellen Pompeo (Meredith Grey),\nSandra Oh (Cristina Yang),\nKatherine Heighl (Izzie Stevens),\nJustin Chambers (Alex Karev),\nT. R. Knight (George O'Malley),\nChandra Wilson (Miranda Bailey),\nPatrick Dempsey (Derek Shepherd),\nJames Pickens Jr. (Richard Webber),\nIsaiah Washington (Preston Burke),\nKate Walsh (Addison Montgomery),\nSara Ramirez (Callie Torres),\nEric Dane (Mark Sloan),\nChyler Leigh (Lexie Grey),\nBrooke Smith (Erica Hahn),\nKevin McKidd (Owen Hunt),\nJessica Chapsaw (Arizona Robbins),\nKim Raver (Teddy Altman),\nSarah Drew (April Kepner),\nJesse Williams (Jackson Avery), \nCamilla Luddington (Jo Wilson)",
    "Type": "TV Series",
    "Origin": "USA",
    "ImageURL": "https://i.imgur.com/jJaXf5o.jpeg"
  },
  {
    "Title": "Mr. Queen",
    "Number of Episodes": 20,
    "Release Year": 2020,
    "Genre": "Romance, History, Drama",
    "Rating (IMDb)": 8.6,
    "Cast": "Shin Hye-sun (Kim So-yong, Queen Cheorin), \nKim Jung-hyun (King Cheoljong), \nSeol In-ah (Jo Hwa-jin), \nChoi Jin-hyuk (Jang Bong-hwan), \nCha Chung-hwa (Court Lady Choi), \nChae Seo-eun (Hong-yeon), \nYoo Min-kyu (Prince Yeongpyeong), \nBae Jong-ok (Queen Sunwon), \nKim Tae-woo (Kim Jwa-geun),  \nNa In-woo (Kim Byeong-in), \nKim In-kwon (Royal Chef Man-bok)",
    "Type": NaN,
    "Origin": "South Korea",
    "ImageURL": "https://i.imgur.com/VziTiuW.jpeg"
  },
  {
    "Title": "The Kingdom",
    "Number of Episodes": 12,
    "Release Year": 2019,
    "Genre": "Sageuk, Political Drama, Horror-thriller",
    "Rating (IMDb)": 8.3,
    "Cast": "Ju Ji-hoon (Lee Chang), \nBae Donna (Seo-bi), \nRyu Seung-ryong (Lord Cho Hak-ju), \nKim Sung-kyu (Yeong-shin), \nJeon Seok-ho (Cho Beom-pal),\nKim Hye-jun (Queen Consort Cho), \nKim Sang-ho (Mu-yeong), \nHuh Joon-ho (Lord Ahn Hyeon)",
    "Type": "Netflix Series",
    "Origin": "South Korea",
    "ImageURL": "https://i.imgur.com/65YXDPy.jpeg"
  },
  {
    "Title": "Perempuan Tanah Jahanam (Impetigore)",
    "Number of Episodes": 1,
    "Release Year": 2019,
    "Genre": "Horror, Thriller, Mystery, Suspense, Drama",
    "Rating (IMDb)": 6.6,
    "Cast": "Tara Basro (Maya), \nArio Bayu (Ki Saptadi), \nMarissa Anita (Dini), \nChristine Hakim (Nyi Misni), \nAsmara Abigail (Ratih), \nKiki Narendra (Bambang), \nZidni Hakim (Ki Donowongso), \nFaradina Mufti (Nyai Shinta), \nTeuku Rifnu (Bimo)",
    "Type": "Movie",
    "Origin": "Indonesia",
    "ImageURL": "https://i.imgur.com/rWi7F8S.jpeg"
  },
  {
    "Title": "Courage the Cowardly Dog",
    "Number of Episodes": 52,
    "Release Year": "1999 - 2002",
    "Genre": "Dark Comedy, Horror Comedy, Sci-Fi",
    "Rating (IMDb)": 8.3,
    "Cast": "Marty Grabstein (Courage), \nJohn Dilworth (Nowhere Newsman), \nThea White (Muriel), \nLionel Wilson (Eustace), \nSimon Prebble (The Computer)",
    "Type": "TV Series",
    "Origin": "USA",
    "ImageURL": "https://i.imgur.com/uKQ0BWr.jpeg"
  },
  {
    "Title": "Detective Conan: Full Score of Fear",
    "Number of Episodes": 1,
    "Release Year": 2008,
    "Genre": "Anime, Action, Mystery, Thriller, Crime Fiction",
    "Rating (IMDb)": 6.7,
    "Cast": "Minami Takayama (Conan Edogawa), Wakana Yamazaki (Ran Mouri), Akira Kamiya (Kogoro Mouri), Kappei Yamaguchi (Shinichi Kudo), Megumi Hayashibara (Ai Haibara), Naoko Matsui (Sonoko Suzuki), Yukiko Iwai (Ayumi Yoshida), Ikue Otani (Mitsuhiko Tsuburaya), Wataru Takagi (Genta Kojima/Officer Takagi Wataru), Ken'ichi Ogata (Professor Agasa), Chaf\u00fbrin (Inspector Megure), Atsuko Yuya (Miwako Sato), Kazuhiko Inoue (Inspector Shiratori)",
    "Type": "Movie, Anime",
    "Origin": "Japan",
    "ImageURL": "https://i.imgur.com/INxccUB.jpeg"
  },
  {
    "Title": "Detective Conan: The Phantom of Baker Street",
    "Number of Episodes": 1,
    "Release Year": 2002,
    "Genre": "Anime, Action, Adventure, Drama, Mystery, Thriller, Crime Fiction",
    "Rating (IMDb)": 7.8,
    "Cast": "Minami Takayama (Conan Edogawa), \nWakana Yamazaki (Ran Mouri), \nAkira Kamiya (Kogoro Mouri), \nKappei Yamaguchi (Shinichi Kudo), \nHideyuki Tanaka (Yuusaku Kudo),  \nMegumi Hayashibara (Ai Haibara), \nNaoko Matsui (Sonoko Suzuki), \nYukiko Iwai (Ayumi Yoshida), \nIkue Otani (Mitsuhiko Tsuburaya), \nWataru Takagi (Genta Kojima), \nKen'ichi Ogata (Professor Agasa), \nChaf\u00fbrin (Inspector Megure), \nAtsuko Yuya (Miwako Sato), \nKazuhiko Inoue (Inspector Shiratori), Show Hayami (Jack The Ripper), Kei Hayami (Mrs. Hudson), Yuzuru Fujimoto (Sebastian Moran), Hiroaki Hirata (Tadaaki Kashimura)",
    "Type": "Movie, Anime",
    "Origin": "Japan",
    "ImageURL": "https://i.imgur.com/ttlhaWp.jpeg"
  },
  {
    "Title": "Detective Conan: Black Iron Submarine",
    "Number of Episodes": 1,
    "Release Year": 2023,
    "Genre": "Anime, Adventure, Drama, Mystery, Thriller",
    "Rating (IMDb)": 7.1,
    "Cast": "Minami Takayama (Conan Edogawa), \nWakana Yamazaki (Ran Mouri), \nRikiya Koyama (Kogoro Mouri), \nMegumi Hayashibara (Ai Haibara),\nKappei Yamaguchi (Shinichi Kudo),\nSh\u016bichi Ikeda (Shuichi Akai),\nNaoko Matsui (Sonoko Suzuki),\nKenichi Ogata (Professor Agasa),\nRyotaro Okiayu (Subaru Okiya),\nChaf\u00fbrin (Inspector Megure),\nYukiko Iwai (Ayumi Yoshida),\nIkue \u014ctani (Mitsuhiko Tsuburaya),\nWataru Takagi (Genta Kojima), \nShigeru Chiba (Rum),\nToru Furuya (Bourbon / Rei Furuya),\nTakaya Hashi (James Black),\nYukitoshi Hori (Gin),\nFumihiko Tachiki (Vodka),\nMami Koyama (Vermouth),\nKikuko Inoue (Chianti),\nHiroyuki Kinoshita (Korn),\nKotono Mitsuishi (Hidemi Hondou/Rena Mizunashi),\nMiyuki Ichijo (Jodie Starling),\nKenji Nomura (Andr\u00e9 Camel),\nAtsuko Yuya (Miwako Sato),\nKazuhiko Inoue (Shiratori),\nAtsumi Tanezaki (Naomi Argento)",
    "Type": "Movie, Anime",
    "Origin": "Japan",
    "ImageURL": "https://i.imgur.com/ifNYIUG.jpeg"
  },
  {
    "Title": "Thor",
    "Number of Episodes": 1,
    "Release Year": 2011,
    "Genre": "Action, Superhero, Sci-Fi, Fantasy",
    "Rating (IMDb)": 7.0,
    "Cast": "Chris Hemsworth (Thor),\nNatalie Portman (Jane Foster),\nTom Hiddleston (Loki),\nStellan Skarsg\u00e5rd (Erik Selvig),\nKat Dennings (Darcy Lewis),\nClark Gregg (Phil Coulson),\nColm Feore (Laufey),\nRay Stevenson (Volstagg),\nIdris Elba (Heimdall),\nJamie Alexander (Sif),\nRene Russo (Frigga),\nAnthony Hopkins (Odin)",
    "Type": "Movie",
    "Origin": "USA",
    "ImageURL": "https://i.imgur.com/o4xXU1E.jpeg"
  },
  {
    "Title": "Iron Man 3",
    "Number of Episodes": 1,
    "Release Year": 2013,
    "Genre": "Action, Sci-Fi",
    "Rating (IMDb)": 7.1,
    "Cast": "Rober Downey Jr. (Tony Stark/Iron Man),\nGwyneth Paltrow (Pepper Potts),\nDon Cheadle (James Rhodes/Iron Patriot),\nGuy Pearce (Aldrich Killian),\nRebecca Hall (Maya Hansen),\nSt\u00e9phanie Szostak (Ellen Brandt),\nJames Badge Dale (Eric Savin),\nWilliam sadler (Matthew Ellis),\nMiguel Ferrer (Rodriguez),\nJon Favreau (Happy Hogan),\nBen Kingsley (Trevor Slattery),\nPaul Bettany (J.A.R.V.I.S)",
    "Type": "Movie",
    "Origin": "USA",
    "ImageURL": "https://i.imgur.com/QOZrNBD.jpeg"
  },
  {
    "Title": "Queen's Gambit",
    "Number of Episodes": 7,
    "Release Year": 2020,
    "Genre": "Drama, Romance, Mystery",
    "Rating (IMDb)": 8.5,
    "Cast": "Anya Taylor-Joy (Beth Harmon),\nBill Camp (William Shaibel),\nMoses Ingram (Jolene),\nChristiane Seidel (Helen Deardorff),\nRebecca Root (Miss Lonsdale),\nChlore Pirrie (Alice Harmon),\nAkemnji Ndifornyen (Mr. Fergusson),\nMarielle Heller (Alam Wheatley),\nHarry Melling (Harry Beltik),\nPatrick Kennedy (Allston Wheatley),\nJacob Fortune-Lloyd (D.L. Townes),\nThomas Brodie-Sangster (Benny Watts),\nMarcin Doroci\u0144ski (Vasily Borgov)",
    "Type": "Netflix Series",
    "Origin": "USA",
    "ImageURL": "https://i.imgur.com/PFO7TNO.jpeg"
  }
];


// This function adds cards the page to display the data in the array
document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("catalogContainer");
  let searchInput = document.getElementById("searchInput");
  let genreFilter = document.getElementById("genreFilter");

  // Fill genre dropdown
  let genres = ["All"];
  for (let i = 0; i < catalogData.length; i++) {
    let parts = catalogData[i].Genre.split(",");
    for (let j = 0; j < parts.length; j++) {
      let genre = parts[j].trim();
      if (genres.indexOf(genre) === -1) {
        genres.push(genre);
      }
    }
  }

  for (let i = 0; i < genres.length; i++) {
    let option = document.createElement("option");
    option.value = genres[i];
    option.textContent = genres[i];
    genreFilter.appendChild(option);
  }

  function showCards() {
      container.innerHTML = "";

      for (let i = 0; i < catalogData.length; i++) {
          let item = catalogData[i];

          // 💡 Simplified title + genre matching
          let searchText = searchInput.value.toLowerCase();
          let titleText = item.Title.toLowerCase();

          let titleOk = false;
          if (titleText.indexOf(searchText) !== -1) {
              titleOk = true;
          }

          let genreOk = false;
          if (genreFilter.value === "All") {
              genreOk = true;
          } else {
              if (item.Genre.indexOf(genreFilter.value) !== -1) {
                  genreOk = true;
              }
          }

      if (titleOk && genreOk) {
          let card = document.createElement("div");
          card.className = "card";

          let img = document.createElement("img");
          img.src = item.ImageURL;
          img.alt = item.Title;

          let info = document.createElement("div");
          info.className = "card-body hidden";

          let title = document.createElement("h3");
          title.textContent = item.Title;

          let genre = document.createElement("p");
          genre.textContent = "Genre: " + item.Genre;

          let rating = document.createElement("p");
          rating.textContent = "Rating: " + item["Rating (IMDb)"];

          let cast = document.createElement("p");
          cast.textContent = "Cast: " + item.Cast;

          let type = document.createElement("p");
          type.textContent = "Type: " + item.Type;

          let origin = document.createElement("p");
          origin.textContent = "Origin: " + item.Origin;

          let year = document.createElement("p");
          year.textContent = "Year: " + item["Release Year"];

          info.appendChild(title);
          info.appendChild(genre);
          info.appendChild(rating);
          info.appendChild(cast);
          info.appendChild(type);
          info.appendChild(origin);
          info.appendChild(year);

          img.addEventListener("click", function () {
              info.classList.toggle("hidden");
          });

          card.appendChild(img);
          card.appendChild(info);
          container.appendChild(card);
      }
    }
  }

  searchInput.addEventListener("input", showCards);
  genreFilter.addEventListener("change", showCards);

  showCards();
});

function quoteAlert() {
  console.log("Button Clicked!");
  alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards();  // Re-render cards
}


