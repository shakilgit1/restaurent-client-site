
const Previews = () => {
    return (
        <div>
            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div data-aos="fade-right" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img className="h-96 w-auto" src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-lg mb-4 uppercase dark:text-gray-400 ">You can taste it!</span>
				<h3 className="text-3xl font-bold">Chocolate Cake</h3>
				<p className="my-6 dark:text-gray-400 font-bold text-xl">Chocolate Cake is a decadent dessert made with rich chocolate layers and chocolate frosting. A sweet delight!</p>
				
			</div>
		</div>
		<div data-aos="fade-up" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img className="h-96 w-auto" src="https://images.pexels.com/photos/6510301/pexels-photo-6510301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/8518854/pexels-photo-8518854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
			<span className="text-lg mb-4 uppercase dark:text-gray-400 ">You can taste it!</span>
				<h3 className="text-3xl font-bold">Lobster Bisque</h3>
				<p className="my-6 dark:text-gray-400">Lobster Bisque is a rich and creamy French soup made with lobster, cognac, and aromatic herbs. A luxurious delicacy.</p>
				
			</div>
		</div>
		<div data-aos="fade-right" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img  src="https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-80 dark:bg-gray-500 aspect-video w-auto" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
			<span className="text-lg mb-4 uppercase dark:text-gray-400 ">You can taste it!</span>
				<h3 className="text-3xl font-bold">Were not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Taco is a Mexican street food made with a tortilla filled with various ingredients like meat, beans, and salsa.</p>
				
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Previews;