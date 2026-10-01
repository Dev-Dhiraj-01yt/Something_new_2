import logo from '../assets/logo.jpg'

// Crops the supplied logo down to just the chili so it reads on the dark header.
export default function Brand() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#FFF3CD]">
        <img src={logo} alt="" className="h-full w-full scale-[2.6] object-cover [transform-origin:52%_41%]" />
      </div>
      <span className="font-serif text-xl font-bold tracking-tight text-white">Spices For Change</span>
    </div>
  )
}
