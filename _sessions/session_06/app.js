console.log('Le Wagon Race! 🏁');

// const p1 = document.getElementById('player1-race');
// const p2 = document.getElementById('player2-race');

const moveWagon = (event) => {
  if (event.key === 'q') {
      moveForward(1);
  } else if(event.key === 'p') {
      moveForward(2);
  }
};

const moveForward = (player) => {
  const wagon = document.querySelector(`#player${player}-race .active`);

  if (wagon.nextElementSibling) {
    wagon.nextElementSibling.classList.add('active');
    wagon.classList.remove('active');
  } else {
    alert(`Jogador ${player} venceu! Jogar novamente?`);
    window.location.reload();
  }
};

document.addEventListener('keyup', (event) => {
  moveWagon(event);
});
