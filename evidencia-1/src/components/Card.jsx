function Card(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
              <div className="p-6">
                <h1 className="title-font text-3xl font-bold text-blue-600 mb-3"> {props.title} </h1>
                <p className="leading-relaxed mb-3">Precio: $ {props.price} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsTail;