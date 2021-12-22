const carta = 'bici coche balón _playstation bici coche peluche'


function listGifts(letter) {
    return letter
      .trim()
      .split(/\s+/)
      .filter(gift => !gift.startsWith('_'))
      .reduce((acc, gift) => {
        acc[gift] = acc[gift] ? acc[gift] + 1 : 1
        return acc
      }, {})
  }

  const regalos = listGifts(carta)

console.log(regalos)