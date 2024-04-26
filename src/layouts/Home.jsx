
export default function  Home(){
  return (
    <>

<div class="flex flex-col w-screen min-h-screen p-10 bg-gray-100 text-gray-800">


<h1 class="text-3xl">Product Category Page Title</h1>
<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
  <span class="text-sm font-semibold">1-16 of 148 Products</span>
  <button class="relative text-sm focus:outline-none group mt-4 sm:mt-0">
    <div class="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
      <span class="font-medium">
        Popular
      </span>
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex">
      <a class="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Popular</a>
      <a class="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Featured</a>
      <a class="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Newest</a>
      <a class="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Lowest Price</a>
      <a class="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Highest Price</a>
    </div>
  </button>
</div>
<div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
 
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>

  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>

  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>

  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>

  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>
  
  <div>
    <a href="#" class="block h-64 rounded-lg shadow-lg bg-white"></a>
    <div class="flex items-center justify-between mt-3">
      <div>
        <a href="#" class="font-medium">Product Name</a>
        <a class="flex items-center" href="#">
          <span class="text-xs font-medium text-gray-600">by</span>
          <span class="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
        </a>
      </div>
      <span class="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
    </div>
  </div>

</div>
<div class="flex justify-center mt-10 space-x-1">
  <button class="flex items-center justify-center h-8 w-8 rounded text-gray-400">
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
  </button>
  <button class="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400" disabled>
    Prev
  </button>
  <button class="flex items-center justify-center h-8 w-8 rounded bg-indigo-200 text-sm font-medium text-indigo-600" disabled>
    1
  </button>
  <button class="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
    2
  </button>
  <button class="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
    3
  </button>
  <button class="flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
    Next
  </button>
  <button class="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600">
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
    </svg>
  </button>
</div>
</div>
   
     
   
<section className="text-gray-400 bg-[#252525] body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
        </div>
        <h2 className="text-xl font-medium title-font text-white mt-5">Shooting Stars</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
        </div>
        <h2 className="text-xl font-medium title-font text-white mt-5">The Catalyzer</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
        </div>
        <h2 className="text-xl font-medium title-font text-white mt-5">The 400 Blows</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
       
  
    </>

  );
}
