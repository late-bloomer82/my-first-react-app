import cupcake from "/cupcake.png";
export { FavouriteFood };
function FavouriteFood() {
  return (
    <>
      <p>My favourite food is...</p>
      <div>
        <img src={cupcake} className="logo" alt="Vite logo" />
      </div>
    </>
  );
}
