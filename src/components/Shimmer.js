const Shimmer = () => {
    return (
        <div className="flex flex-wrap">
           
           {/* making multiple i.e 10 shimmer ui empty boxes using fill and map */}
           {Array(10).fill("").map((e, index) => 
           <div key={index} className="w-64 h-80 m-5 p-2 shadow-xl border-solid border-gray-200 border-2 ">
                  <img className="h-48 bg-gray-400 w-60" />
                  <h2 className="bg-gray-300 w-40"></h2>
                  <h2 className="m-2 h-5 bg-gray-300 "></h2>
                  <h2 className="m-2 h-5 bg-gray-300 "></h2>
                  
                    </div>
           )}

        </div>
    )
};

export default Shimmer;

