function History({moves}) {
  let i = 0;
  return (
    <ul>
      {moves.map(m => {
        return <li key={i++}>{m.move} ({m.player})</li>
      })}
    </ul>
  )
}

export default History;