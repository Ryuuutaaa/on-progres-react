const LandingPage = ({ myOshi, member, kurang, tambah }) => {
  return (
    <div>
      <p>{myOshi}</p>
      <h1>Oshii aku satu satunya adalah {member}</h1>
      <button onClick={tambah}>tambah ohsi disini</button>
      <button onClick={kurang}>kurangi oshi disini</button>
    </div>
  );
};

export default LandingPage;
