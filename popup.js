//get your API_KEY from https://cricketdata.org/ and paste in variable API_KEY
//API_KEY = "YOUR_CRIC_API_KEY"
fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`)
    .then((data) => data.json())
    .then((res => {
        document.getElementById('root').innerHTML = "IPL SCORES";


        // console.log(res.data)
        const arr = res.data
        const ipl_matches = arr.filter((ele) => ele.series_id == 'c75f8952-74d4-416f-b7b4-7da4b4e3ae6e')
        // console.log(ipl_matches)

        ipl_matches.map((match, index) => {
            // console.log(match, index);
            para = document.createElement("div");
            image = document.createElement("img");
            image.src = match.teamInfo[0].img;

            image2 = document.createElement("img");
            image2.src = match.teamInfo[1].img;

            image3 = document.createElement("img");
            image3.src = "versus.jpg";
            image3.style.width = "48px";
            // image.append(teamname)

            // para.classList.add(`para${index}`)
            score = "SCORE: " + match.score[0].r.toString() + "/" + match.score[0].w.toString() + " in " + match.score[0].o.toString() + " overs"
            para.setAttribute('class', `score`);
            // para.setAttribute('class', `para${index + 1}`);
            score_ele = document.createElement("p");
            score_ele.innerText = score
            // para.innerText = score
            // console.log(score)
            // para.appendChild()
            currentstatus = document.createElement("p");
            currentstatus.innerText = "Status: " + match.status
            currentstatus.setAttribute('class', 'status')

            matchbetween = document.createElement("h3");
            matchbetween.setAttribute('class', 'matchbwn')
            matchbetween.innerText = match.teamInfo[0].shortname + " V/S " + match.teamInfo[1].shortname
            document.body.appendChild(matchbetween);
            para.appendChild(image);
            para.appendChild(image3);
            para.appendChild(image2);
            para.appendChild(score_ele)
            document.body.appendChild(para);

            document.body.appendChild(currentstatus);
        })

    }))
