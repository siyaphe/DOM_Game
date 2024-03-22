let questionBox = {
    q1: {
        q: 'What is 1 + 1',
        a: '2',
        img: 'https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-6895600_640.png'
    },
    q2: {
        q: 'What is 2 + 2',
        a: '4',
        img: 'https://i.pinimg.com/736x/8e/5b/a9/8e5ba9d814a3a3eba006a2dccab26c2e.jpg'
    },
    q3: {
        q: 'What is 3 + 3',
        a: '6',
        img: ''
    },
    q4: {
        q: 'What is 4 + 4',
        a: '8',
        img: 'https://i.pinimg.com/736x/8e/5b/a9/8e5ba9d814a3a3eba006a2dccab26c2e.jpg'
    },
    q5: {
        q: 'What is 5 + 5',
        a: '10',
        img: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/807.png'
    }
}

let score = 0
let scoreboard= document.querySelector('.points')
scoreboard.innerHTML = score

const askQuestion1 = (question,solution) => {
    let answer = prompt(question)
    if(answer === solution){
        score += 10
        scoreboard.innerHTML = score
        alert("Correct Answer")
        addPicToCard(1,questionBox.q1.img)
        checkWinner()
    }else{
        score -= 10
        scoreboard.innerHTML = score
        alert("Incorrect Answer")
        checkWinner()
    }
}

const askQuestion2 = (question,solution) => {
    let answer = prompt(question)
    if(answer === solution){
        score += 10
        scoreboard.innerHTML = score
        alert("Correct Answer")
        addPicToCard(2,questionBox.q2.img)
        checkWinner()
    }else{
        score -= 10
        scoreboard.innerHTML = score
        alert("Incorrect Answer")
        checkWinner()
    }
}


const checkWinner = () => {
    if(score >= 50){
        alert("YOU HAVE WON THE GAME")
    }
}


const addPicToCard = (num , pic) => {
    let myCard = document.querySelector(`#poke${num}`)
    let image = document.createElement('img')
    image.setAttribute('src', pic)
    image.setAttribute('class', 'poke')
    myCard.replaceWith(image)
}