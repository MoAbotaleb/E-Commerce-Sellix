interface CategoryProps {
  style?: string;
}

export default function Category({ style }: CategoryProps) {
  return (
    <div className={`group flex flex-col items-center gap-2 cursor-pointer overflow-hidden ${style}`}>
      
      <div className="relative aspect-square w-full overflow-hidden rounded-full border-2 border-transparent bg-gray-50 shadow-sm transition-all duration-300  group-hover:border-black group-hover:shadow-md">
        <img className="group-hover:scale-[1.1] group-hover:-rotate-10 duration-300"
          src="https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg"
          alt="Men Category"
          
        />
      </div>
      
      <h2 className="text-center text-xs sm:text-sm font-medium tracking-wide text-gray-600 capitalize transition-colors duration-300 group-hover:text-black">
        men
      </h2>
    </div>
  );
}