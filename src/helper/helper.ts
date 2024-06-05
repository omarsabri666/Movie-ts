export function formatTime(runtime:number) :string {
  const hours = Math.floor(runtime / 60); // Get the number of hours
  const minutes = runtime % 60; // Get the remaining minutes

  // Create the formatted string
  const formattedRuntime = `${hours} hour${hours !== 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`;

  return formattedRuntime;
}

