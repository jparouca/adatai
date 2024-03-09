import { Button } from "./button";

export function Hero() {
  return (
    <div className="h-svh w-full bg-white dark:bg-[hsl(257.14,24.14%,5.69%)] dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[hsl(257.14,24.14%,5.69%)] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col items-center">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-3">
          BEM-VINDO A ADATAI
        </p>
        <p className="text-xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          YOUR IN-GAME DATA PLATFORM.
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-sm text-gray-400 text-center whitespace-pre-wrap break-words mb-4">
            Unlock the potential of your in-game data with the 360 in-game Data Solutions for game publishers, tournament organizers, data consumers, <br /> and community on the GRID Data Platform.
          </p>
          <Button className="text-xl mt-10">
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
}
